import { getDatabase, ref, set, update, child, get } from "firebase/database";
import { db } from "./database";

export class DataModel {
    constructor(model, firebaseApp) {
        this.model = model;
        this.db = db;
        this.realtimeDb = getDatabase(firebaseApp);
    }

    async get(id) {
        const dbRef = ref(this.realtimeDb);
        const snapshot = await child(dbRef, `${this.model}/${id}`).get();

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }

    async getLocal(){
        return await this.getDbTable(this.model).toArray();
    }

    async list() {
        
    }

    async create(data, saveLocal = false) {
        // Realtime db
        set(ref(this.realtimeDb, `${this.model}/` + data.uid), data);

        // Dexie (local) db
        if (saveLocal) {
            await this.createLocal(data);
        }
    }

    async createLocal(data, id = null) {
        if (id) {
            await this.getDbTable(this.model).put({
                id: id,
                ...data
            });
        } else {
            await this.getDbTable(this.model).put(data);
        }
    }

    async update(data, id) {
        const dbRef = ref(this.realtimeDb);

        const updates = {};
        for (let key of Object.keys(data)) {
            updates[`${this.model}/${id}/${key}`] = data[key];           
        }    

        update(dbRef, updates);
    }

    async delete(id) {
        ref(this.realtimeDb, `${this.model}/` + id).remove();
    }

    async getDbTable(model) {
        switch (model) {
            case 'user':
                return this.db.user;
            case 'task':
                return this.db.task;
            case 'category':
                return this.db.category;        
            default:
                return this.db.user;
        }
    }
}