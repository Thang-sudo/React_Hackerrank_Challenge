import React from 'react';

class TextEditor extends React.Component {
  state = {
    input: '',
    message: [],
  }
  onChange = (e) =>{
    e.preventDefault()
    this.setState({input: e.target.value})
  }

  onAppend = (e) =>{
    e.preventDefault()
    this.setState(prevState =>{
      let newMessage = [...prevState.message]
      newMessage.push(this.state.input)
      return{
        ...prevState,
        input: '',
        message: newMessage
      }
    })
  }
  
  onUndo = (e) =>{
    e.preventDefault();
    this.setState(prevState =>{
      let newMessage = [...prevState.message]
      newMessage.pop();
      return{
        ...prevState,
        input: '',
        message: newMessage
      }
    })
  }

  render() {
    const {input, message} = this.state
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text"  data-testid="word-input" value={this.state.input} onChange = {this.onChange} />
          <button id="btn-1" data-testid="append-button" disabled={input.length ? false : true} onClick = {this.onAppend} >Append</button>
          <button id="btn-2"  data-testid="undo-button" disabled={message.length ? false : true} onClick = {this.onUndo}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.message.join(' ')}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
