import L from "leaflet";
import urlIcon from "../../public/assets/cuisines-images/location-dot-solid-red.svg";

const LocationIconBlue = L.icon({
    iconUrl: urlIcon,
    iconRetinaUrl: urlIcon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [20, 20],
    className: "leaflet-venue-icon"
});

export { LocationIconBlue };
