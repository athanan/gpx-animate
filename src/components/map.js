import React from 'react'
import Map, {Source, Layer} from 'react-map-gl';

const MapBox = () => {

    const defaultView = {
        latitude: 15.87,
        longitude: 100.99,
        zoom: 4,
        bearing: 80,
        pitch: 80
    };

    const skyLayer = {
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
        }
    };

    return (
        <Map
            mapLib={import('mapbox-gl')}
            initialViewState={defaultView}
            style={{width: 920, height: 600}}
            mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
            maxPitch={85}
            terrain={{source: 'mapbox-dem', exaggeration: 1.5}}
        >
            <Source
                id="mapbox-dem"
                type="raster-dem"
                url="mapbox://mapbox.mapbox-terrain-dem-v1"
                tileSize={512}
                maxzoom={14}
            />
            <Layer {...skyLayer} />
        </Map>
    )
}

export default MapBox;
