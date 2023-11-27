import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./RestaurantTarget.css";

const RestaurantTarget = ({
    restaurantName,
    distanceKm,
    votes,
    city,
    cuisines,
    ratingText,
    aggregationRating
}) => {
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

    return (
        <>
            <article className="restaurant-target">
                <div className="restaurant-target--left">
                    <img
                        src={`../../../public/assets/restaurantsImages/${numeroAleatorio}.png`}
                        alt=""
                    />
                    <div className="restaurant-target--left__info-container">
                        <div>
                            <h2>{restaurantName}</h2>
                            <p>{parseInt(distanceKm)} km from your location</p>
                        </div>

                        <p>
                            <strong>Ciudad:</strong> {city}
                        </p>

                        <div className="label-cuisine">
                            <p>#{cuisines}</p>
                        </div>
                    </div>
                </div>
                <div className="restaurant-target--right">
                    <div className="restaurant-target--right__rating-container">
                        <div className="reviews">
                            <h3>{ratingText}</h3>
                            <p>{votes} reviews</p>
                        </div>
                        <div className="rating-number">
                            <p>{aggregationRating}</p>
                        </div>
                    </div>
                    {/* <button className="restaurant-target--right__favorite">
                        <FontAwesomeIcon
                            className="heart-icon"
                            icon={faHeart}
                        />
                    </button> */}
                </div>
            </article>
        </>
    );
};

export { RestaurantTarget };
