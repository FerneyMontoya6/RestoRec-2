import { Header } from "../../components/Header/Header.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header
                btnText={"Discover it now"}
                btnSize={"small"}
                sndLinkText={"New experiencies"}
            ></Header>
            <Hero
                h1Text={"Discover the Perfect Gastronomic Experience"}
                descText={
                    "Let us guide you to the best restaurants nearby based on your location and culinary preferences. Say goodbye to endless searches and say hello to culinary delight"
                }
            ></Hero>
            <main>
                <div className="main-images-section">
                    <img
                        src="../../../public/assets/sumarized-image-1.jpeg"
                        alt="Fotografía de una cena"
                    />
                    <img
                        src="../../../public/assets/sumarized-image-2.png"
                        alt="Fotografía de un plato con hamburguesa y papas"
                    />
                    <img
                        src="../../../public/assets/sumarized-image-3.png"
                        alt="Fotografía de un restaurante con vista a una gran ciudad"
                    />
                    <img
                        src="../../../public/assets/sumarized-image-4.png"
                        alt="Fotografía de un restaurante con vista a una gran ciudad"
                    />
                </div>
                <div className="main-info-content">
                    <h2 className="main-info-content--h2">
                        Explore a world of flavors
                    </h2>
                    <p className="main-info-content--paragraph  ">
                        Our platform brings the world of flavors directly to
                        your door, offering a wide range of culinary experiences
                        waiting to be discovered. From exotic cuisines to local
                        favorites, satisfy your cravings with just a few clicks
                    </p>
                    <Link to={"/descubrir"}>
                        <Button size={"medium"} text={"Discover it"}></Button>
                    </Link>
                </div>
            </main>

            <section
                className="bg-nuevas-experiencias"
                id="bg-nuevas-experiencias"
            >
                <div className="nuevas-experiencias">
                    <img
                        className="nuevas-experiencias--left-img"
                        src="../../../public/assets/main-left-image.jpeg"
                        alt="Platos con comida"
                    />
                    <div className="nuevas-experiencias--container">
                        <h2 className="nuevas-experiencias--h2">
                            Help us Continue Discovering New Restaurants
                        </h2>
                        <p className="nuevas-experiencias--p">
                            Do you know an amazing restaurant that isn't on yet?
                            our list? Your contribution will not only enrich the
                            experience of other users, but also will help
                            highlight those special places that They deserve to
                            be discovered.
                        </p>
                        <Link to={"/nuevas-experiencias"}>
                            <Button
                                size={"medium"}
                                text={"New restaurant"}
                            ></Button>
                        </Link>
                    </div>
                    <img
                        className="nuevas-experiencias--right-img"
                        src="../../../public/assets/main-right-image.png"
                        alt="Restaurante con ambiente moderno"
                    />
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export { Home };
