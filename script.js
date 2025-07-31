const form = document.getElementById("form");
const bill = document.getElementById("bill");
const customTip = document.getElementById("custom-tip");
const numberOfPeople = document.getElementById("people-number");
const resetButton = document.getElementById("reset");
const tipButtons = document.querySelectorAll(".tip-amount");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const billIsValid = validationNonZero(bill);
    const numberPeopleIsValid = validationNonZero(numberOfPeople);

    if (billIsValid && numberPeopleIsValid) {
        const [tipPerPErson, totalPerPerson] =  calculate();
        console.log(tipPerPErson);
        console.log(totalPerPerson);
        
        
    }
});

function removeClassActive(listButtons) {
    listButtons.forEach((button) => {
        button.classList.remove("active");
    });
}

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

function getTipPercent() {
    const customTipPercent = parseFloat(customTip.value);

    if (isNaN(customTipPercent) || customTipPercent === 0) {
        const tip = [...tipButtons].filter((button) => button.classList.contains("active"));
        tipPercent = parseFloat(tip[0].textContent);
        return tipPercent;
    }

    return parseFloat(customTipPercent);
}

function validationNonZero(element) {
    const value = parseFloat(element.value);

    const parentElement = element.closest(".with-icon");
    const errorElement = parentElement.querySelector("small");

    if (isNaN(value) || value <= 0) {
        showErrorMessage(errorElement, "Can't be zero2");
        return;
    }
    showErrorMessage(errorElement);
    return true;
}

function showErrorMessage(element, message = "") {
    element.textContent = message;
}

bill.addEventListener("input", function () {
    this.value = decimalInput(this.value);
});

customTip.addEventListener("input", function () {
    this.value = decimalInput(this.value);
});

numberOfPeople.addEventListener("input", function () {
    this.value = integerInput(this.value);
});

tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        removeClassActive(tipButtons);
        button.classList.add("active");
        customTip.value = '';
    });
});

function calculate() {
    const billNumber = parseFloat(bill.value);
    const tip = getTipPercent();
    const peopleNumber = parseInt(numberOfPeople.value);

    const totalSumWithTip = billNumber + (billNumber * tip) / 100;
    const tipPerPerson = parseFloat((tip / peopleNumber).toFixed(2));
    const totalPerPerson = parseFloat((totalSumWithTip / peopleNumber).toFixed(2));

    return [tipPerPerson, totalPerPerson]
}
