import { useHistory } from 'react-router-dom';
import isLogged from '../services/auth';

const isAuth = (WrappedComponend) => {

    const Component = (props) => {
        const history = useHistory();

        if (!isLogged()) {
            history.push('/login');

            return null;
        }

        return <WrappedComponend {...props} />
    };

    return Component;

};

export default isAuth;