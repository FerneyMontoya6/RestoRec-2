const trackLocation = () => {
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            latitude = pos.coords.latitude;
            longitude = pos.coords.longitude;
        },
        (error) => {
            console.log(error);
        }
    );

    return [latitude, longitude];
};

export { trackLocation };
