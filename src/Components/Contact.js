import React, { Component } from 'react';

class Contact extends Component {

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var linkedinPic = "images/" + this.props.data.linkedinpic;
    }

    // const LinkedinPlugin = () => (
    //   <div style={{display: 'inline-block'}}>
    //     <div style={{display: 'inline-block', width: '49%'}}>
    //       <h3><a target="_blank" href='https://www.linkedin.com/in/darwiche2005/'>Ali Darwiche</a></h3>
    //       <p style={{fontWeight: 'bold', marginBottom: '10px'}}>Full Stack Software Engineer at The Home Depot</p>
    //       <p>Austin, TX</p>
    //       <a target="_blank" href='https://www.linkedin.com/in/darwiche2005/'><button>View LinkedIn</button></a>
    //     </div>
    //     <div style={{display: 'inline-block', width: '50%'}}>
    //       <img className="" style={{borderRadius: '2%'}} src={linkedinPic} alt="Ali Darwiche Linkedin Picture" />
    //     </div>
    //   </div>
    // );


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="two columns"></div>
            <div className="four columns">
              <img className="" style={{borderRadius: '2%'}} src={linkedinPic} alt="Ali Darwiche Linkedin Picture" />
              {/* <LinkedinPlugin /> */}
              {/* <div className="widget widget_tweets"> */}
                {/* <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">2 Days Ago</a></b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">3 Days Ago</a></b>
                  </li>
                </ul> */}
            </div>
            <div className="one columns"></div>
            <div className="three columns">

              <div className="widget widget_contact">

                <h4>Address and Phone</h4>
                <p className="address">
                  {name}<br />
                  {street} <br />
                  {city}, {state} {zip}<br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <a target="_blank" href='https://www.linkedin.com/in/darwiche2005/'><button style={{marginTop: '1.7em'}}>View LinkedIn</button></a>
           </div>
           <div className="two columns"></div>
      </div>
   </section>
    );
  }
}

export default Contact;
