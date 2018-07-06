import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	       <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="banner" style={{marginTop: '25rem'}}>
         <div className="banner-text">
            {/* <h1 className="responsive-headline">{name}</h1> */}
            <h3 className="outline-text" style={{color: '#fff', backgroundColor: 'rgb(218, 222, 229, 0.1)', borderRadius: '6px'}}>I'm an <span style={{color:'#ffe200'}}>Austin</span> based <span style={{color:'#ffe200'}}>Full Stack Software Engineer</span> who's passionate about building Web and Mobile applications that improve my user's life.</h3>
            {/* <hr /> */}
            <ul className="social social-media" style={{ position: 'absolute', bottom: '0', marginLeft: '33%'}}>
               {networks}
            </ul>
         </div>
      </div>

      {/* <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> */}

   </header>
    );
  }
}

export default Header;
