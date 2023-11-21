import { Header } from "../../components/Header/Header.jsx";
import { CuisineCard } from "../../components/CuisineCard/CuisineCard.jsx";
import { cuisinesImgObj } from "../../utils/cuisinesImgObjc.js";
import { LabelCard } from "../../components/LabelCard/LabelCard.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { MapView } from "../../components/MapView/MapView.jsx";
import Carousel from "react-multi-carousel";

import { responsiveCarousel } from "../../utils/responsiveCarousel.js";

import "react-multi-carousel/lib/styles.css";
import "./Descubrir.css";

import { useState } from "react";

const Descubrir = () => {
    const [screen, setScreen] = useState("");
    const [location, setLocation] = useState(null);
    const [cuisinesSelected, setcuisinesSelected] = useState([]);
    const [cuisinesSelectedOriginal, setCuisinesSelectedOriginal] = useState(
        []
    );

    if (screen === "") {
        return (
            <>
                <Header
                    btnText={"Descubrelo ahora"}
                    btnSize={"small"}
                    sndLinkText={"Nuevas experiencias"}
                ></Header>
                <h2 className="h2-descubrir">
                    ¿Qué tipo de comida quieres probar hoy?
                </h2>
                <Carousel responsive={responsiveCarousel} className="carousel">
                    {cuisinesImgObj.map((item) => (
                        <CuisineCard
                            key={item.originalCuisineText}
                            cuisineImage={item.cuisineImg}
                            cuisineText={item.cuisineText}
                            cuisineAlt={item.cuisineAlt}
                            cuisineTextOriginal={item.originalCuisineText}
                            cuisinesSelected={cuisinesSelected}
                            setcuisinesSelected={setcuisinesSelected}
                            cuisinesSelectedOriginal={cuisinesSelectedOriginal}
                            setCuisinesSelectedOriginal={
                                setCuisinesSelectedOriginal
                            }
                        ></CuisineCard>
                    ))}
                </Carousel>
                <section className="food-selected">
                    <p className="food-selected--p">
                        Categorías seleccionadas:{" "}
                    </p>
                    <div className="food-selected--categories">
                        {cuisinesSelected.map((item) => (
                            <LabelCard text={item} key={item}></LabelCard>
                        ))}
                    </div>
                </section>

                <div className="continue-btn-container">
                    <Button
                        size={"medium"}
                        text={"Continuar"}
                        screen={screen}
                        setScreen={setScreen}
                    ></Button>
                </div>
            </>
        );
    } else if (screen === "location") {
        return (
            <>
                <Header
                    btnText={"Descubrelo ahora"}
                    btnSize={"small"}
                    sndLinkText={"Nuevas experiencias"}
                ></Header>
                <h2 className="h2-descubrir">
                    Por favor habilite su ubicación:
                </h2>
                <section className="location">
                    <Button
                        size={"habilitar"}
                        text={"Habilitar"}
                        screen={screen}
                        setScreen={setScreen}
                        location={location}
                        setLocation={setLocation}
                    ></Button>
                </section>
                <div className="continue-btn-container">
                    <Button size={"medium"} text={"Continuar"}></Button>
                </div>
            </>
        );
    } else if (screen === "location-map") {
        return (
            <>
                <Header
                    btnText={"Descubrelo ahora"}
                    btnSize={"small"}
                    sndLinkText={"Nuevas experiencias"}
                ></Header>
                <h2 className="h2-descubrir">Ubicación actual:</h2>
                <section className="location">
                    <MapView location={location}></MapView>
                </section>
                <div className="continue-btn-container">
                    <Button
                        size={"medium"}
                        text={"Continuar"}
                        location
                    ></Button>
                </div>
            </>
        );
    }
};

export { Descubrir };
