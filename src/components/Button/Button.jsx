import { cardStates } from "../CuisineCard/CuisineCard.jsx";
import { substractionCards } from "../../utils/substractionCards.js";
import { trackLocation } from "../../utils/trackLocation.js";

import "./Button.css";

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
    const handdleButton = (
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
        // Handdle to btn cards
        if (size === "add") {
            setCuisinesSelected([...cuisinesSelected, cuisineText]);
            setCuisinesSelectedOriginal([
                ...cuisinesSelectedOriginal,
                cuisineTextOriginal
            ]);
            setCardState(cardStates[1]);
        } else if (size === "substraction") {
            const [newCuisineSelected, newCuisineSelectedOriginal] =
                substractionCards(
                    cuisinesSelected,
                    cuisinesSelectedOriginal,
                    cuisineText,
                    cuisineTextOriginal
                );
            setCuisinesSelected(newCuisineSelected);
            setCuisinesSelectedOriginal(newCuisineSelectedOriginal);
            setCardState(cardStates[0]);
        }

        // Handdle to location section
        else if (screen === "") {
            setScreen("location");
        } else if (size === "habilitar") {
            trackLocation(setLocation);
            setScreen("location-map");
        }
    };

    return (
        <>
            <button
                className={`btn btn-${size}`}
                onClick={() =>
                    handdleButton(
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
