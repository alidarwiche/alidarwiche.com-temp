import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './Kiera.css';

class Kiera extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{background: '#ffb759 no-repeat center center fixed', paddingTop:'20px'}}>
        <div className="container">
          <h2>Spoons</h2>
          <p>Spoons come in funny ways.</p>
          <p>Some are deep and some have weight.</p>
          <p>Some are thin and shave clean scrapes</p>
          <p>of ice-cream from tongue to slate.</p>
          <br />
          <p>Spoons come in many shapes,</p>
          <p>and no shape is stuck to you.</p>
          <p>You’ll find some slip between your teeth</p>
          <p>with more ease than others do.</p>
          <p>And some will barely fit your palm,</p>
          <p>and then what will you do?</p>
          <br />
          <p>But then, once again,</p>
          <p>no spoon is built for you.</p>
          <p>Better yet, it’s just a matter</p>
          <p>of how you use a spoon.</p>
          <br />
          <p>Do you use it to stir your beans?</p>
          <p>Do you use it for music on knees?</p>
          <p>Or is maybe your spoon in between</p>
          <p>your fingers in times of need?</p>
          <p>Pooling water in your hand;</p>
          <p>that sounds like a spoon to me!</p>
          <br />
          <p>Spoons come in funny ways,</p>
          <p>and sometimes they’re hard to find.</p>
          <p>Sometimes it doesn’t matter</p>
          <p>how hard you squint your eyes.</p>
          <br />
          <p>But if you don’t mind the offer,</p>
          <p>I’ll offer you one of mine.</p>
          <p>Because spoons come in funny ways</p>
          <p>and a smile is where they hide.</p>
          <p>––––––––––––––––––––––––––––––</p>
          <div style={{maxWidth:'350px'}}><div style={{width:'100%',height:'0',paddingBottom:'133%',position:'relative'}}><iframe src="https://giphy.com/embed/pJIMzAT5mNAXK" width="100%" height="100%" style={{position:'absolute'}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/puppy-spoon-yogurt-pJIMzAT5mNAXK">via GIPHY</a></p></div>
          <p>––––––––––––––––––––––––––––––</p>
          <p>Hope this wasn't too much!!! I was just hoping to give you a good start to your new day... Take care, Kiera! I'm hear if you need me!</p>
          <br />
          <p>With Love,</p>
          <p>The Man Of Infinite Spoons :)</p>
        </div>
      </div>
    );
  }
}

export default Kiera;
