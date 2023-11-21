const substractionCards = (
    cuisinesSelected,
    cuisinesSelectedOriginal,
    cuisineText,
    cuisineTextOriginal
) => {
    const newCuisineSelected = cuisinesSelected.filter(
        (element) => element !== cuisineText
    );
    const newCuisineSelectedOriginal = cuisinesSelectedOriginal.filter(
        (element) => element !== cuisineTextOriginal
    );

    return [newCuisineSelected, newCuisineSelectedOriginal];
};

export { substractionCards };
