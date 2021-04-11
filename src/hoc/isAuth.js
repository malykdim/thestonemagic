import { useHistory } from 'react-router-dom';
import isLogged from '../services/auth';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const history = useHistory();

        if (!isLogged()) {
            history.push('/login');

            return null;
        }

        return <WrappedComponent {...props} />
    };

    return Component;

};

export default isAuth;