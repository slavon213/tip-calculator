const bill = document.getElementById("bill");
const customTip = document.getElementById("custom-tip");
const resetButton = document.getElementById("reset");

bill.addEventListener("input", function () {
    let value = this.value;
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

    this.value = value;
});
