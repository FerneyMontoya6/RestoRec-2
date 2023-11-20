import { cardStates } from "../CuisineCard/CuisineCard.jsx";
import { trackLocation } from "../../utils/trackLocation.js";
import "./Button.css";
import { useEffect } from "react";

const Button = ({
    size,
    text,
    children,
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
}) => {
    const addCuisine = (
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
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;

                    setLocation({ lat, lng });
                },
                (error) => {
                    console.log(error);
                }
            );

            if (location !== "") {
                setScreen("location-map");
            }
        }
    };

    return (
        <>
            <button
                className={`btn btn-${size}`}
                onClick={() =>
                    addCuisine(
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
