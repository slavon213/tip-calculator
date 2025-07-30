const bill = document.getElementById("bill");
const customTip = document.getElementById("custom-tip");
const numberOfPeople = document.getElementById("people-number");
const resetButton = document.getElementById("reset");

function decimalInput(value) {
    value = value.replace(/[^\d.]+/g, "");
    const parts = value.split(".");

    if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1, 3).join("");
    }

    if (value.includes(".")) {
        const dotIndex = value.indexOf(".");
        const intPart = value.substring(0, dotIndex);
        let decimalPart = value.substring(dotIndex + 1);

        if (decimalPart.length > 2) {
            decimalPart = decimalPart.substring(0, 2);
        }

        value = intPart + "." + decimalPart;
    }

    return value;
}

function integerInput(value) {
    value = value.replace(/[^\d]+/g, "");
    return value;
}

// bill.addEventListener("input", function () {
//     let value = this.value;
//     value = value.replace(/[^\d.]+/g, "");
//     const parts = value.split(".");

//     if (parts.length > 2) {
//         value = parts[0] + "." + parts.slice(1, 3).join("");
//     }

//     if (value.includes(".")) {
//         const dotIndex = value.indexOf(".");
//         const intPart = value.substring(0, dotIndex);
//         let decimalPart = value.substring(dotIndex + 1);

//         if (decimalPart.length > 2) {
//             decimalPart = decimalPart.substring(0, 2);
//         }

//         value = intPart + "." + decimalPart;
//     }

//     this.value = value;
// });

bill.addEventListener("input", function () {
    this.value = decimalInput(this.value);
});

customTip.addEventListener("input", function () {
    this.value = decimalInput(this.value);
});

numberOfPeople.addEventListener("input", function(){
    this.value = integerInput(this.value);
})
