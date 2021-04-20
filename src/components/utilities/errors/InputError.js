import './InputError.scss';

const InputError = ({message: children}) => {
    
    if(!children) {
        return null;
    } 
            
    return (
        <div className="input-error">{children}</div>       
    );
}

export default InputError;