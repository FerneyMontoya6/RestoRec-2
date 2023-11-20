import { cardStates } from "../CuisineCard/CuisineCard.jsx";
import { trackLocation } from "../../utils/trackLocation.js";
import "./Button.css";
import { useEffect } from "react";

const Button = ({
    size,
    text,
    children,
    cardState,
    setCardState,
    cuisineText,
    cuisineTextOriginal,
    cuisinesSelected,
    setCuisinesSelected,
    cuisinesSelectedOriginal,
    setCuisinesSelectedOriginal,
    screen,
    setScreen,
    type,
    location,
    setLocation
}) => {
    const addCuisine = (
        cardState,
        setCardState,
        cuisineText,
        cuisineTextOriginal,
        cuisinesSelected,
        setCuisinesSelected,
        cuisinesSelectedOriginal,
        setCuisinesSelectedOriginal,
        screen,
        setScreen,
        location,
        setLocation
    ) => {
        if (size === "add") {
            setCuisinesSelected([...cuisinesSelected, cuisineText]);
            setCuisinesSelectedOriginal([
                ...cuisinesSelectedOriginal,
                cuisineTextOriginal
            ]);
            setCardState(cardStates[1]);
        } else if (size === "substraction") {
            const newCuisineSelected = cuisinesSelected.filter(
                (element) => element !== cuisineText
            );
            const newCuisineSelectedOriginal = cuisinesSelectedOriginal.filter(
                (element) => element !== cuisineTextOriginal
            );
            setCuisinesSelected(newCuisineSelected);
            setCuisinesSelectedOriginal(newCuisineSelectedOriginal);
            setCardState(cardStates[0]);
        } else if (screen === "") {
            setScreen("location");
        } else if (size === "habilitar") {
            navigator.geolocation.getCurrentPosition((pos) => {
                const lat = pos.coords.latitude.toString();
                const lng = pos.coords.longitude.toString();

                setLocation({ lat, lng });
            });

            setScreen("location-map");
        } else if (screen === "location-map") {
        }
    };

    return (
        <>
            <button
                className={`btn btn-${size}`}
                onClick={() =>
                    addCuisine(
                        cardState,
                        setCardState,
                        cuisineText,
                        cuisineTextOriginal,
                        cuisinesSelected,
                        setCuisinesSelected,
                        cuisinesSelectedOriginal,
                        setCuisinesSelectedOriginal,
                        screen,
                        setScreen,
                        location,
                        setLocation
                    )
                }
            >
                {text}
                {children}
            </button>
        </>
    );
};

export { Button };
