import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ location }) => {
    if (location === null) {
        return "Loading...";
    } else {
        return (
            <>
                <MapContainer center={location} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            </>
        );
    }
};

export { MapView };
