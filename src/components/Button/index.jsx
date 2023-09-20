import Button from "@mui/material/Button";

const ButtonComponent = ({ label, style, onClick, variant, ...rest }) => {
    return <Button
                {...rest}
                variant={variant} 
                onClick={onClick} 
                style={{
                    width: rest.fullWidth ? 'calc(100% - 16px)' : 'auto',
                    border: null,
                    borderRadius: 4,
                    padding: 8,
                    ...style

            }} >{label}</Button>
}

ButtonComponent.defaultProps = {
    style: {},
    variant: "contained" 
}

export default ButtonComponent;