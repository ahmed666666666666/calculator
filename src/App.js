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
      <Screen output={eq} />
      <CalculatorBody/>
    </div>
  );
}
}

class Screen extends React.Component {
  constructor(){
    super()
    this.state = {
      val:'0',
    }

  }
  componentWillReceiveProps(){
    this.setState({val:eq.join("")})
  }
  render(){
  return (
    <div className="screen">{this.state.val}</div>
  );
}
}

class CalculatorBody extends React.Component {
  
  render(){
  return (
    <div className="body">
          
      <Button color = 'rgba(197,195,204)' value="AC"/>
      <Button color = 'rgba(197,195,204)' value="+-" />
      <Button color = 'rgba(197,195,204)'  value="%"/>
      <Button color = 'rgba(251,149,24)' value="/" tcolor="white"/>
      <Button color = 'rgba(244,244,231)' value="7" />
      <Button color = 'rgba(244,244,231)' value="8"  />
      <Button color = 'rgba(244,244,231)' value="9"  />
      <Button color = 'rgba(251,149,24)' value="*"  tcolor="white"/>
      <Button color = 'rgba(244,244,231)' value="4"  />
      <Button color = 'rgba(244,244,231)' value="5"  />
      <Button color = 'rgba(244,244,231)' value="6"  />
      <Button color = 'rgba(251,149,24)' value="-" tcolor="white" />
      <Button color = 'rgba(244,244,231)' value="1"  />
      <Button color = 'rgba(244,244,231)' value="2"  />
      <Button color = 'rgba(244,244,231)' value="3"  />
      <Button color = 'rgba(251,149,24)' value="+" tcolor="white" />
      <Button color = 'rgba(244,244,231)' value="0"  border="none" />
      <Button color = 'rgba(244,244,231)'   value=" " border="none"  />
      <Button color = 'rgba(244,244,231)'   value="."  />
      <Equal color = 'rgba(251,149,24)' value="=" tcolor="white" />
    </div>
  );
}
}
class Button extends React.Component {
    
    displayeq = ()=>{
      eq.push(this.props.value)
        console.log(eq)
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
