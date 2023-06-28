import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import ra from './ra.png'
import b1 from './b1.png'
import b2 from './b2.jpeg'
import b3 from './mslogo.png'
import b4 from './hyunlogo.png'
import b5 from './toylogo.png'
import b6 from './tatalogo.png'
import b7 from './jaglogo.png'
import b8 from './hondalogo.png'
import b9 from './fordlogo.png'
import b10 from './fiatlogo.png'
import b11 from './bmwlogo.png'
import b12 from './benzlogo.png'
import b13 from './audilogo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bounce from 'react-reveal/Bounce';
import Marquee from "react-fast-marquee";
import { FacebookFill,Download,WhatsappFill,InstagramFill,GithubFill } from 'akar-icons';
import MetaTags from 'react-meta-tags';

function Home() {
  useEffect(()=>{
    Aos.init({duration: 2200})
  }, []);
  return (
    
    
    <div id='top' className='webname' data-aos="fade-right">
      <MetaTags>
        <title>ORA - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </MetaTags>
      <Bounce left cascade>
        ON ROAD ASSISTANCE
      </Bounce>
      <div className='imag' data-aos='fade-up-left'><img src={ra} alt="ra" width='70%'/></div>
      <Marquee>
      <img src={b3} alt="mslogo" width='20%'/><p>&emsp;</p><img src={b4} alt="hyunlogo" width='150px'/><p>&emsp;</p><img src={b5} alt="toylogo" width='150px'/><p>&emsp;</p><img src={b6} alt="tatalogo" width='150px'/><p>&emsp;</p><img src={b7} alt="jaglogo" width='150px'/><p>&emsp;</p><img src={b8} alt="hondalogo" width='150px'/><p>&emsp;</p><img src={b9} alt="fordlogo" width='150px'/><p>&emsp;</p><img src={b10} alt="fiatlogo" width='150px'/><p>&emsp;</p><img src={b11} alt="bmwlogo" width='150px'/><p>&emsp;</p><img src={b12} alt="benzlogo" width='150px'/><p>&emsp;</p><img src={b13} alt="audilogo" width='150px'/>
      </Marquee>
      <div className='imag'><img data-aos="zoom-in" src={b1} alt="b1" width='80%'/></div><br/><br/><br/><br/><br/><br/><br/><br/>
      <div>
            <Container>
              <Row>
                <Col xs={12} md={5}>
                <img className='imag3' data-aos="zoom-in" src={b2} alt="b2" width='80%'/>
                </Col>
                <Col xs={6} md={7}>
                  <h2 className='sub1'>Our Expertise is to Preserve Mobility</h2>
                  <h5 className='sub2'>We are committed to your mobility, assist remotely when possible, provide on-site repair, refueling, towing the vehicle to the nearest garage or a specific location, and much more. Whether you are on your way to some excit- ing road trip or be it your daily commute, we do everything in our power to provide rapid repair and support to our customers from the event to its resolution.</h5>
                </Col>
              </Row>
            </Container><br/><br/>
      </div>
    <div className='footeric'>
      <a href='https://www.facebook.com/'><FacebookFill strokeWidth={2} size={36} /></a>&emsp;<a href='https://web.whatsapp.com/'><WhatsappFill strokeWidth={2} size={36} /></a>&emsp;<a href='https://www.instagram.com/'><InstagramFill strokeWidth={2} size={36} /></a>&emsp;<a href='https://github.com/'><GithubFill strokeWidth={2} size={36} /></a>&emsp;<Link to='/download'><Download strokeWidth={2} size={36} /></Link>
    </div><br/>
    <div className='footer'>
      <h4>©2023 All Rights Reserved <a href='#top'><i>On Road Assistance</i></a></h4>
    </div>
    </div>
  )
}

export default Home