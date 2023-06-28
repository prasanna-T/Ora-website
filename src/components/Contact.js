import React from 'react';
import MetaTags from 'react-meta-tags';
  
// pick a theme of your choice
// original Windows95 font (optionally)
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Card, Fab } from '@mui/material';
import { Envelope, Location, Phone } from 'akar-icons';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Iframe from 'react-iframe'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



const Contact = () => (
  <div className='ctcmain'>
    <MetaTags>
        <title>ORA - Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </MetaTags>
    
    <div>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Admins
        </Typography>
        <Typography variant="h5" component="div">
          BADHRINARAYAN {bull} PRASANNA {bull} SUDIN
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Note
        </Typography>
        <Typography variant="body2">
         Contact Us if in any case of error in working of App or Website
         <br /><br />
          {'"Please Use Contact Properly"'}
        </Typography>
      </CardContent>
      
    </Card>
    </div><br/>
    
    <Fab variant="extended" color="light" aria-label="add">
    <Phone strokeWidth={2} size={36} />
    <a href='tel:+917358503339'>+91 73585 03339</a>
    <Phone strokeWidth={2} size={36} />
    <a href='tel:+919445512927'>+91 94455 12927</a>
    <Phone strokeWidth={2} size={36} />
    <a href='tel:+917871270577'>+91 78712 70577</a>
    </Fab><br/><br/><br/><br/>
    <Fab variant="extended" color="light" aria-label="add">
    <Envelope strokeWidth={2} size={36} />
    <a href='mailto:ora.assist@gmail.com'>ora.assist@gmail.com</a>
    </Fab><br/><br/><br/><br/>
    <Fab variant="extended" color="light" aria-label="add">
    <a href='https://goo.gl/maps/TWpsdKeYJd53LDyn7'><Location strokeWidth={2} size={36} /></a>
    <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.82446585548954!2d80.19134996381987!3d13.150320412808481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677335144862!5m2!1sen!2sin"
        width="300px"
        height="30px"
        className=""
        display="block"/>
    </Fab>
  </div>
);

export default Contact;