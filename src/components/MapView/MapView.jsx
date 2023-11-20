import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ location }) => {
    return (
        <>
            <MapContainer center={location} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.otg/{z}/{x}/{y}.png" />
            </MapContainer>
        </>
    );
};

export { MapView };
