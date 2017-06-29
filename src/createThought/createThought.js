import React, { Component } from 'react';

export default class CreateThought extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      body:''
    }
  }

  handleClick(){
    this.props.submitIdea(this.state);
    this.setState({title: '', body:''})
  }
  
  render() {
    return(
      <div>
      <input value={this.state.title} id='title' onChange={(e)=> this.setState({title: e.target.value})}/>

      <input value={this.state.body} id='body' onChange={(e)=> this.setState({body: e.target.value})}/>

      <button onClick = {()=>this.handleClick()}> Submit </button>
      </div>
    );
  }

}
