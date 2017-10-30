// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
       secondsLeft: this.props.initialCount
     }
   }
   render() {
     const timer = this.state.secondsLeft;
     let text = null;
     if (timer === 0){
       text = <p>Boom!</p>
     }else{
      text = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
     }
     return (
       <div>
       {text}
     </div>
     );
   }
}
