import axios from 'axios';
import React, { Component } from 'react';

class UpdateCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             category:[],
             name:''
        }
    }

    componentDidMount = () =>{
        var url = `http://localhost:5000/category/${this.state.id}`
        axios.get(url).then((res) =>{
            this.setState({
                category: res.data
            })
            console.log(this.state.category)
        }).catch((err) =>{
            console.log(err);
        })
    }

    handleUpdate = (e) =>{
        e.preventDefault();
        const category={
            name: this.state.name
        }
        var url=`http://localhost:5000/category/update/${this.state.id}`
        axios.put(url, category).then(() =>{
            this.props.history.push("/admin/categories");
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5 px-5 py-5">
                    <form method="POST" onSubmit={this.handleUpdate}>
                        <label>Name</label>
                        <input onChange={e => this.setState({name: e.target.value})} type="text" defaultValue={this.state.category.name} />
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default UpdateCategory;