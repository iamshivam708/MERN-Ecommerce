import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AddCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var url="http://localhost:5000/category";
        var category={
            name: this.state.name
        }
        axios.post(url,category).then(() =>{
            this.props.history.push("/admin/categories");
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render(){
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{ background: "pink" }}>
                <div className="col-6">
                    <Link to="/admin/categories" className="nav-link">
                    <h3>Category Dashboard</h3>
                    </Link>
                </div>
                </div>
                <div className="row mt-5 px-5 py-5">
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input onChange={e => this.setState({name: e.target.value})} type="text" />
                        <button type="submit" className="btn btn-primary">Add Category</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default AddCategory;