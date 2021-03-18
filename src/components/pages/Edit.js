import { Component } from 'react';

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
                
                <p>
                    In Development Stage...
                </p>
            </main>
        );
    }
}

export default Edit;