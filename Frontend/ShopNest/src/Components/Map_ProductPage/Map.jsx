import React, { useState, useEffect, useContext } from 'react';
import './Map.css'
import { AppContext } from '../../Context/ParentContext';

const BingMapsComponent = () => {
    const [map, setMap] = useState(null);

    const { latitude } = useContext(AppContext)
    const { longitude } = useContext(AppContext)
    console.log(latitude)
    console.log(longitude)

    useEffect(() => {
        const script = document.createElement('script');
        script.src = import.meta.env.VITE_BING_MAP_KEY;
        script.async = true;
        document.body.appendChild(script);

        window.getMap = () => {
            const newMap = new window.Microsoft.Maps.Map('#map', {
                credentials: import.meta.env.VITE_BING_CREDENTIALS_KEY, 
                center: new window.Microsoft.Maps.Location(latitude, longitude),
                zoom: 10,
            });

            var pin = new window.Microsoft.Maps.Pushpin(newMap.getCenter());
            newMap.entities.push(pin);

            setMap(newMap);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [latitude, longitude]);

    return (
        <div>
            <main>
                <div id="map" style={{ width: '100%', height: '18rem', cursor: 'grab' }}></div>
            </main>
        </div>
    );
};

export default BingMapsComponent;
