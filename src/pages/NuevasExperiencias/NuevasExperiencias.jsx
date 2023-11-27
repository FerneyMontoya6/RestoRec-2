import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./NuevasExperiencias.css";

import { cuisinesImgObj } from "../../utils/cuisinesImgObjc.js";
import { useEffect, useState } from "react";

const NuevasExperiencias = () => {
    const [restaurantName, setRestaurantName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [cuisines, setCuisines] = useState("");
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [states, setStates] = useState([]);
    const [state, setState] = useState("");
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://www.universal-tutorial.com/api/countries/",
                    {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJmZXJuZXkubW9udG95YWdAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiX1ptZ25vcnYxYzdsOENGSm56MGxPczA2QXVqMktsQThyYjBQajIyRUVaWUYycDFSMkM1Z1VMZ19sbnotMmlmOEt4RSJ9LCJleHAiOjE3MDExMTk0NTJ9.-UNjlFg-WyUcSB_fcj4Lf5W2HB2fIHF2Mwah4S93B1U",
                            Accept: "application/json"
                        }
                    }
                );

                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.log(`Error desde petición países: ${error}`);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (country !== "") {
            const fetchData = async () => {
                try {
                    const res = await fetch(
                        `https://www.universal-tutorial.com/api/states/${country}`,
                        {
                            headers: {
                                Authorization:
                                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJmZXJuZXkubW9udG95YWdAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiX1ptZ25vcnYxYzdsOENGSm56MGxPczA2QXVqMktsQThyYjBQajIyRUVaWUYycDFSMkM1Z1VMZ19sbnotMmlmOEt4RSJ9LCJleHAiOjE3MDExMTk0NTJ9.-UNjlFg-WyUcSB_fcj4Lf5W2HB2fIHF2Mwah4S93B1U",
                                Accept: "application/json"
                            }
                        }
                    );

                    const data = await res.json();
                    setStates(data);
                } catch (error) {
                    console.log(`Error desde states: ${error}`);
                }
            };

            fetchData();
        }
    }, [country]);

    useEffect(() => {
        if (state !== "") {
            const fetchData = async () => {
                try {
                    const res = await fetch(
                        `https://www.universal-tutorial.com/api/cities/${state}`,
                        {
                            headers: {
                                Authorization:
                                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJmZXJuZXkubW9udG95YWdAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiX1ptZ25vcnYxYzdsOENGSm56MGxPczA2QXVqMktsQThyYjBQajIyRUVaWUYycDFSMkM1Z1VMZ19sbnotMmlmOEt4RSJ9LCJleHAiOjE3MDExMTk0NTJ9.-UNjlFg-WyUcSB_fcj4Lf5W2HB2fIHF2Mwah4S93B1U",
                                Accept: "application/json"
                            }
                        }
                    );

                    const data = await res.json();
                    setCities(data);
                } catch (error) {
                    console.log(`Error desde states: ${error}`);
                }
            };

            fetchData();
        }
    }, [state]);

    const handleSubmit = async (e) => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/newRestaurant",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        restaurantName,
                        city,
                        latitude,
                        longitude,
                        cuisines
                    })
                }
            );

            if (response.ok) {
                alert("Datos enviados con éxito");
                const res = await response.json();
                console.log(res);
            } else {
                console.log("Error al enviar los datos");
            }
        } catch (error) {
            console.log(`Error en la solicitud: ${error}`);
        }
    };

    return (
        <>
            <Header btnText={"Descubrelo ahora"} btnSize={"small"}></Header>
            <main className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2 className="form-title">Add a New Restaurant</h2>
                    <div className="inputs-container">
                        <div className="inputs-container--left">
                            <label>
                                <span>Restaurant Name</span>
                                <input
                                    type="text"
                                    value={restaurantName}
                                    onChange={(e) =>
                                        setRestaurantName(e.target.value)
                                    }
                                    required="required"
                                />
                            </label>

                            <label>
                                <span>Country</span>
                                <select
                                    onChange={(e) => setCountry(e.target.value)}
                                    required="required"
                                >
                                    <option>Select a country</option>
                                    {countries.map((countryItem) => (
                                        <option
                                            value={countryItem.country_name}
                                            key={countryItem.country_name}
                                        >
                                            {countryItem.country_name}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label>
                                <span>State</span>
                                <select
                                    onChange={(e) => setState(e.target.value)}
                                    required="required"
                                >
                                    <option>Select a state</option>
                                    {states.map((state, index) => (
                                        <option
                                            value={state.state_name}
                                            key={index}
                                        >
                                            {state.state_name}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label>
                                <span>City</span>
                                <select
                                    onChange={(e) => setCity(e.target.value)}
                                    required="required"
                                >
                                    <option>Select a city</option>
                                    {cities.map((city) => (
                                        <option
                                            value={city.city_name}
                                            key={city.city_name}
                                        >
                                            {city.city_name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div className="inputs-container--right">
                            <label>
                                <span>Latitude</span>
                                <input
                                    type="number"
                                    value={latitude}
                                    onChange={(e) =>
                                        setLatitude(e.target.value)
                                    }
                                    required="required"
                                />
                            </label>

                            <label>
                                <span>Longitude</span>
                                <input
                                    type="number"
                                    value={longitude}
                                    onChange={(e) =>
                                        setLongitude(e.target.value)
                                    }
                                    required="required"
                                />
                            </label>

                            <label>
                                <span>Cuisines</span>
                                <select
                                    value={cuisines}
                                    onChange={(e) =>
                                        setCuisines(e.target.value)
                                    }
                                    required="required"
                                >
                                    <option>Select an option</option>
                                    {cuisinesImgObj.map((cuisine) => (
                                        <option
                                            value={cuisine.cuisineText}
                                            key={cuisine.cuisineText}
                                        >
                                            {cuisine.cuisineText}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn-submit">
                        Send
                    </button>
                </form>
            </main>
        </>
    );
};

export { NuevasExperiencias };
