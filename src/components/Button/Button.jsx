import "./Button.css";

const Button = ({ size, text }) => {
    return (
        <>
            <button className={`btn btn-${size}`}>{text}</button>
        </>
    );
};

export { Button };
