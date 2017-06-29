import React, { Component } from 'react';
import PropTypes, { func, string } from 'prop-types'

export default class CreateThought extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      body:''
    }
  }

  handleClick(){
    this.props.handleSubmit(this.state);
    this.setState({title: '', body:''})
  }

  render() {
    return(
      <div>
      <input value={this.state.title} id='title' onChange={(e)=> this.setState({title: e.target.value})}/>

      <input value={this.state.body} id='body' onChange={(e)=> this.setState({body: e.target.value})}/>

      <button className = 'submit' onClick = {()=>this.handleClick()}> Submit </button>
      </div>
    );
  }
}

CreateThought.propTypes = {
  handleSubmit: func
}
