import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UnknownPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                page does not exist go back <Link to="/" className="nav-link">Go Back</Link>
            </div>
        );
    }
}

export default UnknownPage;