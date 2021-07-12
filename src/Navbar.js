import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Img3 from './img/Create1.png';
import Img2 from './img/CustomerSurvey-pana1.png';
import Img1 from './img/Analyse1.png';
import Img4 from './img/Logo.png';

const Navbar = () => {
    // const styleBody={
    //   display:'flex'
    // }
    const styleV1={
        // display:'flex',
        position: 'absolute',
        top:240,
        left:430,
        height:100,
        width:80,
    };
    const styleButtons={
      // display:'flex',
        marginTop:15,
        marginLeft:150,
        marginRight:560,
        textAlign:'center',
        padding:40,
    };
    const buttonResearch={
        // display:'flex',
        borderRadius:15,
        borderColor:'#2C5364',
        margin:5,
        marginBottom:190,
        height:40,
        width:150,
        position: 'absolute-center',
        textAlign: 'center',
        backgroundColor:'#2C5364'
    }
    const buttonUser={
        // display:'flex',
        borderRadius:15,
        marginRight:20,
        borderColor:'#2C5364',
        marginLeft:2,
        marginBottom:190,
        height:40,
        width:150,
        position: 'absolute-center',
        textAlign: 'center',
    }
    const styleRect={
        // display:'flex',
        position: 'absolute',
        left:0,
        top:0,
        marginRight:1500,
        fill:'#2C5364'
    };
    const styleCarousel={
        // display:'flex',
        position: 'absolute',
        marginTop:5,
        width: 600,
        height: 500,
        left: 730,
        top: 55,
    };
    const styleLogin={
        // display:'flex',
        borderRadius:10,
        borderColor:'#2C5364',
        marginTop:7,
        top:5,
        position:'absolute',
        right:55,
        height:40,
        width:150,
        textAlign:'center',
    };
    const styleContent={
        // display:'flex',
        fontColor:'#2C5364',
        marginTop:350,
        marginRight:400,
        left:300,
        textAlign:'center',
    };
    const styleUranch={
        // display:'flex',
        color:'#2C5364',
        margin:5,
    }
    
    return ( 
      <div >
           {/* <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
           <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
           <meta name="HandheldFriendly" content="true"> */}
           <div className="Container" style={styleRect}>
           <svg width="100" height="700">
           <rect width="100" height="700" style={styleRect} />
          </svg>
          </div>
          <img className="logo" src={Img4} style={styleV1}  alt="img5"/>
          <button className="login" style={styleLogin}>Login</button>
          <div class="content" style={styleContent}>
          {/* <img className="d-block w-100" src={Img5} style={styleV2} alt="img6"/>
          */}
          <h1 style={styleUranch}>URanch</h1>
          <h2>Create.Research.Analyse</h2>
        
          </div>
          <div class="button" style={styleButtons}>

            <button className="buttonUser" style={buttonResearch}>New Researcher</button>
            <button className="buttonUser"style={buttonUser} >New User</button>
              
          </div>
          <div style={styleCarousel}>
          <Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
      </div>
        
     );
}
 
export default Navbar;