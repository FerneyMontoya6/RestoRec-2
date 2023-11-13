import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./NuevasExperiencias.css";

const NuevasExperiencias = () => {
    return (
        <>
            <Header btnText={"Descubrelo ahora"} btnSize={"small"}></Header>
            <h1>Nuevas experiencias</h1>
            <Footer></Footer>
        </>
    );
};

export { NuevasExperiencias };
