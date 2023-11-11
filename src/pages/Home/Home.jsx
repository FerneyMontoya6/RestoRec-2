import { Header } from "../../components/Header/Header.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header btnText={"Descubrelo ahora"} btnSize={"small"}></Header>
            <Hero
                h1Text={"Descubre la Experiencia Gastronómica Perfecta"}
                descText={
                    "Permítanos guiarlo a los mejores restaurantes cercanos según su ubicación y preferencias culinarias. Dile adiós a lasbúsquedas interminables y saluda el deleite culinario"
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
                        Explora un mundo de dabores
                    </h2>
                    <p className="main-info-content--paragraph  ">
                        Nuestra plataforma lleva el mundo de los sabores
                        directamente a su puerta, ofreciendo una amplia gama de
                        experiencias culinarias esperando ser descubiertas.
                        Desde cocinas exóticas hasta los favoritos locales,
                        satisfaga sus antojos con solo unos pocos clics
                    </p>
                    <Button size={"medium"} text={"Descubrelo"}></Button>
                </div>
            </main>

            <section className="bg-nuevas-experiencias">
                <div className="nuevas-experiencias">
                    <img
                        className="nuevas-experiencias--left-img"
                        src="../../../public/assets/main-left-image.jpeg"
                        alt="Platos con comida"
                    />
                    <div className="nuevas-experiencias--container">
                        <h2 className="nuevas-experiencias--h2">
                            Ayudanos a Seguir Descubriendo Nuevos Restaurantes
                        </h2>
                        <p className="nuevas-experiencias--p">
                            ¿Conoces un restaurante increíble que aún no está en
                            nuestra lista? Tu aporte no solo enriquecerá la
                            experiencia de otros usuarios, sino que también
                            ayudará a destacar esos lugares especiales que
                            merecen ser descubiertos.
                        </p>
                        <Button
                            size={"medium"}
                            text={"Nuevo Restaurante"}
                        ></Button>
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
