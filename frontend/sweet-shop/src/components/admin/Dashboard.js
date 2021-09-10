import React, { Component } from 'react';

class AdminDashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidMount = () =>{

    }

    handleLogout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('isAdminLoggedIn')
        this.props.history.push('/admin/login')
    }
    
    render() {
        return (
            <div>
                admin dashboard
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default AdminDashboard;