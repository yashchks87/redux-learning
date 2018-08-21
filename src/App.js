import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getName} from './action/index';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : '',
      email : ''
    };
  }
  inputData = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  submitData = event => {
    event.preventDefault();
    this.props.getName({
      name : this.state.name,
      email : this.state.email
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
          Name:
          <input type='text' name='name' onChange={this.inputData}/>
          email:
          <input type='text' name='email' onChange={this.inputData}/>
          <button type='submit'>Submit</button>
        </form>
        {this.props.name}
        {this.props.email}
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    name : state.name,
    email : state.email
  };
}
function mapDispatchToProps(dispatch){
  return{
    getName : bindActionCreators(getName,dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
