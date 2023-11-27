import { Header } from "../../components/Header/Header.jsx";
import { CuisineCard } from "../../components/CuisineCard/CuisineCard.jsx";
import { LabelCard } from "../../components/LabelCard/LabelCard.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { MapView } from "../../components/MapView/MapView.jsx";
import { RestaurantTarget } from "../../components/RestaurantTarget/RestaurantTarge.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";

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

    const [modalState, setModalState] = useState(false);

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
                    btnText={"Discover it now"}
                    btnSize={"small"}
                    sndLinkText={"New experiencies"}
                ></Header>
                <h2 className="h2-descubrir">
                    What kind of food do you want to try today?
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
                    <p className="food-selected--p">Selected categories: </p>
                    <div className="food-selected--categories">
                        {cuisinesSelected.map((item) => (
                            <LabelCard text={item} key={item}></LabelCard>
                        ))}
                    </div>
                </section>

                <div className="continue-btn-container">
                    <Button
                        size={"medium"}
                        text={"Next"}
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
                    btnText={"Discover it now"}
                    btnSize={"small"}
                    sndLinkText={"New experiencies"}
                ></Header>
                <h2 className="h2-descubrir">Please enable your location:</h2>
                <section className="location">
                    <Button
                        size={"habilitar"}
                        text={"Enable"}
                        screen={screen}
                        setScreen={setScreen}
                        location={location}
                        setLocation={setLocation}
                        stringRestaurants={stringRestaurants}
                    ></Button>
                </section>
                <div className="continue-btn-container">
                    <Button size={"medium"} text={"Next"}></Button>
                </div>
            </>
        );
    } else if (screen === "location-map") {
        return (
            <>
                <Header
                    btnText={"Discover it now"}
                    btnSize={"small"}
                    sndLinkText={"New experiencies"}
                ></Header>
                <h2 className="h2-descubrir">Current location:</h2>
                <section className="location">
                    <MapView
                        location={location}
                        restaurantsLocation={restaurants}
                    ></MapView>
                </section>
                <div className="continue-btn-container">
                    <Button
                        size={"buscar-restaurantes"}
                        text={"Search restaurants"}
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
                    btnText={"Discover it now"}
                    btnSize={"small"}
                    sndLinkText={"New experiencies"}
                ></Header>
                {loadingRestaurants ? (
                    // Añadir los skeletons
                    <p>Cargando...</p>
                ) : errorRestaurants ? (
                    <p>Error: {errorRestaurants}</p>
                ) : (
                    <>
                        <Modal
                            modalState={modalState}
                            setModalState={setModalState}
                        >
                            <section
                                className="location"
                                style={{
                                    border: "none",
                                    width: "100%"
                                }}
                            >
                                <MapView
                                    location={location}
                                    restaurantsLocation={restaurants}
                                ></MapView>
                            </section>
                        </Modal>

                        <div className="info-context">
                            <div className="current-location text">
                                <p>Showing</p>
                                <h2>Restaurants Nearest:</h2>
                            </div>
                            <button
                                className="open-modal"
                                onClick={() => setModalState(!modalState)}
                            >
                                Open Map
                            </button>
                        </div>

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
