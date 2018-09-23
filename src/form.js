import React , { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.initialState = {
            name : "",
            job : ""
        }
        this.state = this.initialState;
    }
    handleChange = (event)=>{
        const {name , value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        this.props.addCharacter(this.state);
        this.setState(this.initialState);
        alert("Form Submitted.");
    }
    render(){
        const {name , job} = this.state;
        return (
            <div className="container">
                <form className = "well">
                <div className="row">
                    <label for="name" class="col-sm-2 col-md-2">Name</label>
                    <input type="text" 
                        class="col-sm-8 col-md-8"
                        name="name" 
                        value={name} 
                        class="form-control" 
                        required="required" 
                        onChange={this.handleChange} />
                </div>
                <div className="row">
                    <label for="name" class="col-sm-2 col-md-2">Job</label>
                    <input type="text" 
                        name="job" 
                        class="col-sm-8 col-md-8"
                        value={job} 
                        class="form-control" 
                        required="required"
                        onChange={this.handleChange} />
                </div>
                <br/>
                <div className = "row">
                    
                    <button type="button" 
                        class="btn btn-large btn-block btn-default"
                        onClick={ this.handleSubmit }> 
                        Add New Character
                    </button>
                    
                </div>
                </form>
            </div>
        )
    }
}

export default Form;