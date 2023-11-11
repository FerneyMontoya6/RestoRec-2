import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.css";

const Header = ({ btnSize, btnText }) => {
    return (
        <>
            <header>
                <Link to={"/"}>
                    <img
                        className="main-logo"
                        src="../../../public/assets/logo.png"
                        alt="RestoRec logo"
                    />
                </Link>
                <nav>
                    <ul>
                        <li className="nav-nuevas-experiencias">
                            <Link>Nuevas experiencias</Link>
                        </li>
                        <li>
                            <Link>
                                <Button size={btnSize} text={btnText}></Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export { Header };
