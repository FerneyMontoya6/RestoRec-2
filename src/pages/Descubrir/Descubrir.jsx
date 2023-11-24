import { Header } from "../../components/Header/Header.jsx";
import { CuisineCard } from "../../components/CuisineCard/CuisineCard.jsx";
import { LabelCard } from "../../components/LabelCard/LabelCard.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { MapView } from "../../components/MapView/MapView.jsx";
import { RestaurantTarget } from "../../components/RestaurantTarget/RestaurantTarge.jsx";
import Carousel from "react-multi-carousel";

import { cuisinesImgObj } from "../../utils/cuisinesImgObjc.js";
import { getRestaurants } from "../../utils/fetchData.js";
import { responsiveCarousel } from "../../utils/responsiveCarousel.js";

import "react-multi-carousel/lib/styles.css";
import "./Descubrir.css";

import { useEffect, useState } from "react";

const Descubrir = () => {
    const [screen, setScreen] = useState("");
    const [location, setLocation] = useState(null);
    const [cuisinesSelected, setcuisinesSelected] = useState([]);
    const [cuisinesSelectedOriginal, setCuisinesSelectedOriginal] = useState(
        []
    );
    const [stringRestaurants, setStringRestaurants] = useState("a");

    const [loadingRestaurants, setLoadingRestaurants] = useState(false);
    const [restaurants, setRestaurants] = useState(null);
    const [errorRestaurants, setErrorRestaurants] = useState(null);

    useEffect(() => {
        if (loadingRestaurants) {
            getRestaurants(
                "http://localhost:3000/",
                setRestaurants,
                setErrorRestaurants,
                setLoadingRestaurants,
                location,
                stringRestaurants
            );
        }
    }, [loadingRestaurants]);

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
                        cuisinesSelectedOriginal={cuisinesSelectedOriginal}
                        setStringRestaurants={setStringRestaurants}
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
                        stringRestaurants={stringRestaurants}
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
                    <MapView
                        location={location}
                        restaurantsLocation={restaurants}
                    ></MapView>
                </section>
                <div className="continue-btn-container">
                    <Button
                        size={"buscar-restaurantes"}
                        text={"Buscar restaurantes"}
                        setScreen={setScreen}
                        location={location}
                        cuisinesSelected={cuisinesSelected}
                        cuisinesSelectedOriginal={cuisinesSelectedOriginal}
                        setLoadingRestaurants={setLoadingRestaurants}
                        stringRestaurants={stringRestaurants}
                    ></Button>
                </div>
            </>
        );
    } else if (screen === "restaurants") {
        return (
            <>
                <Header
                    btnText={"Descubrelo ahora"}
                    btnSize={"small"}
                    sndLinkText={"Nuevas experiencias"}
                ></Header>
                {loadingRestaurants ? (
                    // Añadir los skeletons
                    <p>Cargando...</p>
                ) : errorRestaurants ? (
                    <p>Error: {errorRestaurants}</p>
                ) : (
                    <>
                        <section className="location">
                            <MapView
                                location={location}
                                restaurantsLocation={restaurants}
                            ></MapView>
                        </section>
                        <section className="restaurants-nearest-container">
                            {restaurants.map(
                                ({
                                    restaurant_name,
                                    distanceKm,
                                    votes,
                                    city,
                                    rating_text,
                                    cuisines,
                                    aggregate_rating,
                                    id
                                }) => (
                                    <RestaurantTarget
                                        restaurantName={restaurant_name}
                                        distanceKm={distanceKm}
                                        votes={votes}
                                        city={city}
                                        ratingText={rating_text}
                                        cuisines={cuisines}
                                        aggregationRating={aggregate_rating}
                                        key={id}
                                    ></RestaurantTarget>
                                )
                            )}
                        </section>
                    </>
                )}
            </>
        );
    }
};

export { Descubrir };
