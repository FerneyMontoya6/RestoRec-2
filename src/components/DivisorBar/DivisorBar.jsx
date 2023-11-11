import "./DivisorBar.css";

const DivisorBar = ({ size, orientation }) => {
    return (
        <>
            <div className={`divisor-bar-${size} ${orientation}`}></div>
        </>
    );
};

export { DivisorBar };
