import React from "react";
import { YMaps, Map, FullscreenControl, GeolocationControl, GeoObject, RouteButton } from 'react-yandex-maps';

const mapState = {
    center: [55.751574, 37.573856],
    zoom: 3,
};

const MyMap = () => (
    <YMaps>
        <Map className={"map"} defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
            <GeolocationControl options={{ float: 'left' }} />
            <GeoObject
                geometry={{
                    type: 'Point',
                    coordinates: mapState.center,
                }}
            />
            <GeoObject
                geometry={{
                    type: 'LineString',
                    coordinates: [mapState.center, [52.51, 13.38]],
                }}
                options={{
                    geodesic: true,
                    strokeWidth: 5,
                    strokeColor: '#F008',
                }}
            />
            <FullscreenControl />
        </Map>
    </YMaps>
);

export default MyMap;
