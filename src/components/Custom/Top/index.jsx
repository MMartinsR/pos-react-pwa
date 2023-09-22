import { Box, TopMenu, Typography } from "../..";

const Top = ({ title, subtitle, hasMenu, hasArrowBack, hasImage, hasBubble }) => {
    return (
        <Box>
            <TopMenu hasMenu={hasMenu} hasArrowBack={hasArrowBack} hasImage={hasImage}/>
            <Typography variant="h1" component="h1" sx={{
                fontSize: "3rem",
            }}>
                {title}
            </Typography>
            <Typography variant="h6" component="h6">
                {subtitle}
            </Typography>
            { hasBubble ? <>
                <div style={{
                background: "#00373F",
                width: "300px",
                height: "300px",
                position: "fixed",
                right: "-180px",
                top: "-180px",
                borderRadius: "100%",
                zIndex: "-1"
                }}/>
                <div style={{
                background: "#006876",
                width: "160px",
                height: "150px",
                position: "fixed",
                left: "-65px",
                bottom: "-85px",
                borderRadius: "100%",
                zIndex: "-1"
                }}/>
            </>
             : null}
        </Box>
    )
}

Top.defaultProps = {
    hasMenu: false, 
    hasArrowBack: false, 
    hasImage: false,
    hasBubble: false
}

export default Top;