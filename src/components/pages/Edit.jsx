import { Component } from 'react' ;
import { Link } from 'react-router-dom' ;
import Gallery from './Gallery' ;

import '../main.scss';
import './Edit.scss';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <main className="App-main">
                <h2>Edit Page</h2>
                
                <form action="#" className="form-edit">
                </form>
                
                <Link to="/gallery" component={Gallery} />
                
                <p>
                    In Development Stage...
                </p>
            </main>
        );
    }
}

export default Edit;