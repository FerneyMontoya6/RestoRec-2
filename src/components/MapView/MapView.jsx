import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "../LocationIcon.jsx";
import { LocationIconBlue } from "../LocationIconBlue.jsx";
import "leaflet/dist/leaflet.css";

const MapView = ({ location, restaurantsLocation }) => {
    if (location === null) {
        return "Loading...";
    } else if (restaurantsLocation !== null) {
        return (
            <>
                <MapContainer center={location} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={location} icon={LocationIconBlue}>
                        <Popup>
                            <div>Hola</div>
                        </Popup>
                    </Marker>
                    {restaurantsLocation.map((restaurant) => (
                        <Marker
                            position={{
                                lat: restaurant.latitude,
                                lng: restaurant.longitude
                            }}
                            icon={LocationIcon}
                            key={restaurant.id}
                        >
                            <Popup>
                                <div>Hola</div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </>
        );
    } else {
        return (
            <MapContainer center={location} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={location} icon={LocationIconBlue}>
                    <Popup>
                        <div>Hola</div>
                    </Popup>
                </Marker>
            </MapContainer>
        );
    }
};

export { MapView };
