const becomeUnicQuery = (cusisinesSelectedOriginal) => {
    let unicQuery = "";

    cusisinesSelectedOriginal.forEach((arrFood, index) => {
        if (arrFood.length > 1) {
            for (let i = 0; i < arrFood.length; i++) {
                unicQuery += arrFood[i];
                if (i < arrFood.length - 1) {
                    unicQuery += "-";
                }
            }
        } else {
            unicQuery += arrFood[0];
        }

        if (index < cusisinesSelectedOriginal.length - 1) {
            unicQuery += "-";
        }
    });

    return unicQuery;
};

export { becomeUnicQuery };
