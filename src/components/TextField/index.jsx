import { TextField } from '@mui/material';

const TextFieldComponent = ({ noValidate, style, autoComplete, label, variant, type, ...rest }) => {
    return <TextField
                style={{
                    width: rest.fullWidth ? 'calc(100% - 16px)' : 'auto',
                    ...style
                }}
                {...rest}
                label={label} 
                variant={variant}
                type={type} 
            />

};

TextFieldComponent.defaultProps = {
    style: {},
    variant: "outlined", 
    type: "text",
    autoComplete: "on",
    noValidate: true
}

export default TextFieldComponent;