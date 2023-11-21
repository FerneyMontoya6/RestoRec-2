import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "../LocationIcon.jsx";
import "leaflet/dist/leaflet.css";

const MapView = ({ location }) => {
    if (location === null) {
        return "Loading...";
    } else {
        return (
            <>
                <MapContainer center={location} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={location} icon={LocationIcon}>
                        <Popup>
                            <div>Hola</div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </>
        );
    }
};

export { MapView };
