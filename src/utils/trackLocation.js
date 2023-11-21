const trackLocation = (setLocation) => {
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude.toString();
        const lng = pos.coords.longitude.toString();

        setLocation({ lat, lng });
    });
};

export { trackLocation };
