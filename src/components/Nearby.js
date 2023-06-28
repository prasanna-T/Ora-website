import React from "react";
import { useGeolocated } from "react-geolocated";
import Iframe from 'react-iframe';
import { useState } from 'react';
import { Form } from "react-bootstrap";

const Nearby = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: Infinity,
            },
            watchPosition: false,
            userDecisionTimeout: null,
            suppressLocationOnMount: false,
            geolocationProvider: navigator.geolocation,
            isOptimisticGeolocationEnabled: true,
        });
        const [text, setText] = useState('');
        const handleCopy = () => {
            navigator.clipboard.writeText(text);
          };

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div>
        <Iframe  url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15542.029420545598!2d80.04231435!3d13.13036545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679298939769!5m2!1sen!2sin"
        width="1525px"
        height="600px"
        className=""
        display="block" />
        <p>
        <div>
        {coords.latitude} {coords.longitude}
        <Form onsubmit="return false" oninput="txtFullName.value = txtFirstName.value +' '+ txtLastName.value">
            <input type="text" value={coords.latitude} name="txtFirstName" />
            <input type="text" value={coords.longitude} name="txtLastName" />
            <input type="text" name="txtFullName" value={(coords.latitude) + (coords.longitude)} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
        </Form>
        
        
        </div>
        </p>
        </div>
        
        
                    
    ) : (
        <div>Getting the location data&hellip; </div>
    );
    
};

export default Nearby;