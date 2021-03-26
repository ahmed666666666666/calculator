import logo from './logo.svg';
import './App.css';
import React from 'react';


var eq = []

class App extends React.Component {
  
  render(){
  return (
    <Calculator/>
  );
}
}
class Calculator extends React.Component {
  
  render(){
  return (
    <div className="container">
      <CalculatorBody/>
    </div>
  );
}
}

class Screen extends React.Component {

  render(){
  return (
    <div className="screen">{this.props.on}</div>
  );
}
}

class CalculatorBody extends React.Component {
    constructor(){
      super()
      this.state = {
        input:"",
      }
      this.display  = this.display.bind(this)
      this.result = this.result.bind(this)
    }
    display(val){
      this.setState({input:this.state.input+val})
    }
    
    result(val){
      this.setState({input:val})
    }
  render(){
  return (
    <div className="container">
    <Screen on = {this.state.input}/>
    <div className="body">
      <ButtonClear handleclick = {this.result}  color = 'rgba(197,195,204)' value="AC"/>
      <Button handleclick = {this.display}  color = 'rgba(197,195,204)' value="+" />
      <Button handleclick = {this.display} color = 'rgba(197,195,204)'  value="%"/>
      <Button handleclick = {this.display} color = 'rgba(251,149,24)' value="/" tcolor="white"/>
      <Button handleclick = {this.display} color = 'rgba(244,244,231)' value="7" />
      <Button handleclick = {this.display} color = 'rgba(244,244,231)' value="8"  />
      <Button handleclick = {this.display} color = 'rgba(244,244,231)' value="9"  />
      <Button handleclick = {this.display} color = 'rgba(251,149,24)' value="*"  tcolor="white"/>
      <Button handleclick = {this.display} color = 'rgba(244,244,231)' value="4"  />
      <Button  handleclick = {this.display} color = 'rgba(244,244,231)' value="5"  />
      <Button  handleclick = {this.display} color = 'rgba(244,244,231)' value="6"  />
      <Button color = 'rgba(251,149,24)' value="-" tcolor="white"  handleclick = {this.display} />
      <Button color = 'rgba(244,244,231)' value="1"  handleclick = {this.display} />
      <Button color = 'rgba(244,244,231)' value="2"  handleclick = {this.display} />
      <Button color = 'rgba(244,244,231)' value="3"  handleclick = {this.display} />
      <Button color = 'rgba(251,149,24)' value="+" tcolor="white" handleclick = {this.display} />
      <Button color = 'rgba(244,244,231)' value="0"  border="none"  handleclick = {this.display} />
      <Button color = 'rgba(244,244,231)'   value=" " border="none"  handleclick = {this.display} />
      <Button color = 'rgba(244,244,231)'   value="."  handleclick = {this.display} />
      <Equal handleclick = {this.result} color = 'rgba(251,149,24)' value="=" tcolor="white"  />
    </div>
    </div>
  );
}
}
class Button extends React.Component {
    
    displayeq = ()=>{
     eq.push(this.props.value)
     console.log(eq)
      this.props.handleclick(this.props.value)
    }
  render(){
  return (
    <button onClick={this.displayeq} style={{'background':this.props.color,color:this.props.tcolor ,'border-right': this.props.border,'border-left': this.props.border}} className="button">
      {this.props.value}
    </button>
  );
}
}

class ButtonClear extends React.Component {
    
  displayeq = ()=>{
   eq = []
    this.props.handleclick("")
  }
render(){
return (
  <button onClick={this.displayeq} style={{'background':this.props.color,color:this.props.tcolor ,'border-right': this.props.border,'border-left': this.props.border}} className="button">
    {this.props.value}
  </button>
);
}
}


class Equal extends React.Component {
    
  result = ()=>{
    var res = eval(eq.join(""))
      console.log(res)
      this.props.handleclick(res)
      eq = []
    }
render(){
return (
  <button onClick={this.result} style={{'background':this.props.color,color:this.props.tcolor ,'border-right': this.props.border,'border-left': this.props.border}} className="button">
    {this.props.value}
  </button>
);
}
}


export default App;
