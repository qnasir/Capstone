import { useEffect, useState } from 'react';
import { useClerk } from '@clerk/clerk-react'
import './Geolocation.css';

function GeocodingForm() {

    const [fetchedData, setFetchedData] = useState(null);
    const { user } = useClerk();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [dataWithuserId, setDataWithuserId] = useState([])
    const [error, setError] = useState('');

    const bingMapsApiKey = 'AnSwNOD-rjLdT-e7jJq1Y7mzbGpX7H4lS2dcU1V7CMPUx6BmmPh8g-No4K9dJNN5';

    useEffect(() => {
        if (user && user.id) {
            console.log(user.id)
            console.log(user.firstName)
            const data = {...fetchedData, userId: `${user.id}`, username: `${user.firstName}`} 
            setDataWithuserId(data)
        }
    }, [user])

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
            const data = {};
            for (let [key, value] of queryParams.entries()) {
                data[key] = value;
            }
            setFetchedData(data);

    }, [])

    const handleGeocode = () => {
        const fullAddress = `${address}, ${city}, ${state}, ${postalCode}, ${country}`;
        const url = `http://dev.virtualearth.net/REST/v1/Locations?query=${encodeURIComponent(fullAddress)}&key=${bingMapsApiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
                    const location = data.resourceSets[0].resources[0].point.coordinates;
                    const latitude = location[0];
                    const longitude = location[1];
                    // setLatitude(latitude);
                    // setLongitude(longitude);
                    const dataWithCoordinates = { ...dataWithuserId, location: address, latitude: latitude, longitude: longitude };
                    const queryParams = new URLSearchParams(dataWithCoordinates).toString();
        
                    window.location.href = `./upload-images?${queryParams}`
                    setError('');
                } else {
                    setError('The provided address is not valid or not present in the geocoding service.');
                }
            })
            .catch(error => {
                setError('Error fetching geocoding data.', error);
            });

    };

    return (
        <div className="GeocodingForm">
            <div>
                <h2>Geocoding Form</h2>
                <label>
                    Address:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
                <br />
                <label>
                    State:
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </label>
                <br />
                <label>
                    Postal Code:
                    <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
                <br />
                <button onClick={handleGeocode}>Step3 : Upload Images</button>
            </div>
        </div>
    );
}

export default GeocodingForm;
