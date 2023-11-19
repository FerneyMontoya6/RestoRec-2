import { Button } from "../Button/Button.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CuisineCard.css";
import { useState } from "react";

const cardStates = ["", "cuisine-active"];

const CuisineCard = ({
    cuisineText,
    cuisineImage,
    cuisineAlt,
    cuisineTextOriginal,
    cuisinesSelected,
    setcuisinesSelected,
    cuisinesSelectedOriginal,
    setCuisinesSelectedOriginal
}) => {
    const [cardState, setCardState] = useState(cardStates[0]);

    return (
        <>
            <article className={`cuisine ${cardState}`}>
                <img src={cuisineImage} alt={cuisineAlt} />
                <div className="cuisine--text-container">
                    <h3>{cuisineText}</h3>
                    <Button
                        size={
                            cardState === cardStates[0] ? "add" : "substraction"
                        }
                        cardState={cardState}
                        setCardState={setCardState}
                        cuisineText={cuisineText}
                        cuisineTextOriginal={cuisineTextOriginal}
                        cuisinesSelected={cuisinesSelected}
                        setCuisinesSelected={setcuisinesSelected}
                        cuisinesSelectedOriginal={cuisinesSelectedOriginal}
                        setCuisinesSelectedOriginal={
                            setCuisinesSelectedOriginal
                        }
                    >
                        <FontAwesomeIcon
                            className={
                                cardState === cardStates[0]
                                    ? "font-unactive"
                                    : "font-active"
                            }
                            icon={
                                cardState === cardStates[0] ? faXmark : faMinus
                            }
                        />
                    </Button>
                </div>
            </article>
        </>
    );
};

export { CuisineCard, cardStates };
