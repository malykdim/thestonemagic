import {Link} from 'react-router-dom';
import './Error.scss';

const Error = (history) => {
    return (
        <main className="AppMain">
            <section className="error">
                <h2>There is no such page</h2>
                <h2><i class="fas fa-map-signs"></i></h2>
                
                <Link to="/thestonemagic">Back?</Link>                
            </section>  
        </main>        
    )
}

export default Error;