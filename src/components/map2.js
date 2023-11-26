import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import * as turf from "@turf/turf";

const MapBoxLegacy = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(99.4151112);
    const [lat, setLat] = useState(19.0379267);
    const [zoom, setZoom] = useState(10);
    const [pitch, setPitch] = useState(80);
    const [bearing, setBearing] = useState(40);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/satellite-streets-v12',
          center: [lng, lat],
          zoom: zoom,
          pitch: pitch,
          bearing: bearing
        });

        map.current.on('style.load', () => {
            map.current.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });
            map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        });
    })

    return (
        <div ref={mapContainer} style={{width: 920, height: 600}} />
    );

}

export default MapBoxLegacy;