import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
    return (
        <>
            <MapContainer
                center={{ lat: "6.1407232", lng: "-75.3074176" }}
                zoom={13}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </>
    );
};

export { MapView };
