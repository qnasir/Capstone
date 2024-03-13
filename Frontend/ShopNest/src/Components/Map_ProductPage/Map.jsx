import React, { useState, useEffect } from 'react';
import './Map.css'

const BingMapsComponent = () => {
    const [searchInput, setSearchInput] = useState('');
    const [map, setMap] = useState(null);
    const [searchManager, setSearchManager] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=getMap';
        script.async = true;
        document.body.appendChild(script);

        window.getMap = () => {
            const newMap = new window.Microsoft.Maps.Map('#map', {
                credentials: 'AnSwNOD-rjLdT-e7jJq1Y7mzbGpX7H4lS2dcU1V7CMPUx6BmmPh8g-No4K9dJNN5', 
                center: new window.Microsoft.Maps.Location(20.76485825, 78.58431244),
                zoom: 10
            });

            var pin = new window.Microsoft.Maps.Pushpin(newMap.getCenter());
            newMap.entities.push(pin);

            setMap(newMap);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (map && !searchManager) {
            window.Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
                setSearchManager(new window.Microsoft.Maps.Search.SearchManager(map));
            });
        }
    }, [map, searchManager]);

    const handleSearch = () => {
        if (searchManager) {
            geocodeQuery(searchInput);
        }
    };

    const geocodeQuery = (query) => {
        if (!searchManager) return;

        let searchRequest = {
            where: query,
            callback: function (r) {
                if (r && r.results && r.results.length > 0) {
                    var pin = new window.Microsoft.Maps.Pushpin(r.results[0].location);
                    map.entities.push(pin);

                    map.setView({ bounds: r.results[0].bestView });
                } else {
                    alert("No results found.");
                }
            },
            errorCallback: function (error) {
                alert("Error occurred during search.", error);
            }
        };

        searchManager.geocode(searchRequest);
    };

    return (
        <div>
            <main>
                {/* <div className="options">
                    <input
                        className="search_input"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className="search_btn" onClick={handleSearch}>Search</button>
                </div> */}
                <div id="map" style={{ width: '100%', height: '18rem', cursor: 'grab' }}></div>
            </main>
        </div>
    );
};

export default BingMapsComponent;
