import { DivisorBar } from "../../components/DivisorBar/DivisorBar.jsx";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <DivisorBar size={"medium"}></DivisorBar>
                <img
                    src="../../../public/assets/logo.png"
                    alt="logo principal de RestoRec"
                />
            </footer>
        </>
    );
};

export { Footer };
