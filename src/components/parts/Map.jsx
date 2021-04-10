import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react';
import baselinePlace from '@iconify-icons/ic/baseline-place';

import './Map.scss';

const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <Icon icon={baselinePlace} className="pin-icon" />
            <p className="pin-text">{text}</p>
        </div>
    )
}

const location = {
    address: 'ul. "Hristo G. Danov" 11, 4000 Tsentar, Plovdiv, Bulgaria',
    lat: 42.148215594449134,
    lng: 24.74586854733439
}

const Map = ({ location, zoomLevel }) => {
    
    return (
        <div className="map">
            {/* <h2 className="map-h2">Exposition will take place Here in May.</h2> */}
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDEV6BRDvCQ5qrJ9lAuLCLGbHsRPfYzaIo' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map;