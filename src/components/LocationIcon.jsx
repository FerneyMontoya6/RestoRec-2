import L from "leaflet";
import urlIcon from "../../public/assets/cuisines-images/venue_location_icon.svg";

const LocationIcon = L.icon({
    iconUrl: urlIcon,
    iconRetinaUrl: urlIcon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon"
});

export { LocationIcon };
