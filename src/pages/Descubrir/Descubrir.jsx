import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./Descubrir.css";

const Descubrir = () => {
    return (
        <>
            <Header
                btnText={"Descubrelo ahora"}
                btnSize={"small"}
                sndLinkText={"Nuevas experiencias"}
            ></Header>
            <h1>Descubrir</h1>
            <Footer></Footer>
        </>
    );
};

export { Descubrir };
