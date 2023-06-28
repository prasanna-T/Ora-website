import React from 'react'
import dl1 from './app.png'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MetaTags from 'react-meta-tags';

function Download() {
  return (
    <div><br/>
    <MetaTags>
        <title>ORA - Download</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </MetaTags>
      <Card className='bg2s'>
      <Card.Header as="h5" data-aos="zoom-in">Download The App</Card.Header>
      <Card.Body className='ccbg' data-aos="flip-left">
        <Card.Title><b>On Road Assistance [ORA]</b></Card.Title>
        <Card.Text>
        "Helping you reach your destination safely, with us on the road."
        </Card.Text><img className='dlimg' data-aos="fade-up" src={dl1} alt="dl1"/>
        <br/><Button variant="warning" href='https://drive.google.com/file/d/1PNAfW6hUEoDCHBxcCKZo-T5paftayIVX/view?usp=share_link'>Download</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Download