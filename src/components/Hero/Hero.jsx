import "./Hero.css";

const Hero = ({ h1Text, descText }) => {
    return (
        <>
            <section className="hero">
                <h1>{h1Text}</h1>
                <p>{descText}</p>
            </section>
        </>
    );
};

export { Hero };
