import {useHistory} from 'react-router-dom';
import './Error.scss';

const Error = () => {
    const history = useHistory();
    
    function backToHome() {
        history.push("/thestonemagic");
    }
    
    return (
        <main className="AppMain">
            <section className="error">
                <h2>There is no such page</h2>
                <h2><i class="fas fa-map-signs"></i></h2>
                <button onClick={backToHome}>Home?</button>
            </section>  
        </main>        
    );
}

export default Error;