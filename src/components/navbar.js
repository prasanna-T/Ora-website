import React from 'react'
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Nav className="justify-content-end" variant="pills" defaultActiveKey="/home">
      <div className="hoover-2"><Nav.Item>
        <Nav.Link><Link to='/home'><p className="ho">Home</p></Link></Nav.Link>
      </Nav.Item></div>
      <div className="hoover-2"><Nav.Item>
        <Nav.Link><Link to='/download'><p className="ho">Download <Badge pill bg="success">Updated!</Badge></p></Link></Nav.Link>
      </Nav.Item></div>
      <div className="hoover-2"><Nav.Item>
        <Nav.Link><Link to='/contact'><p className="ho">Contact</p></Link></Nav.Link>
      </Nav.Item></div>
      <div className="hoover-2"><Nav.Item>
        <Nav.Link><Link to='/NearbyLocations'><p className="ho">Nearby Locations</p></Link></Nav.Link>
      </Nav.Item></div>
      <div className="hoover-2"><Nav.Item>
        <Nav.Link><Link to='/chatbots'><p className="ho">Chatbot <Badge pill bg="warning">NEW</Badge></p></Link></Nav.Link>
      </Nav.Item></div>
    </Nav>
  )
}

export default Navbar