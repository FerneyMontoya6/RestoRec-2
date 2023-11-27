const getRestaurants = async (
    endPoint,
    setData,
    setError,
    setLoading,
    location,
    stringRestaurants
) => {
    try {
        const res = await fetch(
            `${endPoint}api/restaurants/${location.lat}/${location.lng}/?cuisines=${stringRestaurants}`
        );
        const data = await res.json();
        const dataSorted = [...data].sort(
            (a, b) => a.distanceKm - b.distanceKm
        );

        setData(dataSorted);
    } catch (error) {
        setError("Hubo un error al obtener los restaurantes");
    } finally {
        setLoading(false);
    }
};

export { getRestaurants };
