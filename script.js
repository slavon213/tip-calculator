const bill = document.getElementById("bill");
const customTip = document.getElementById("custom-tip");
const resetButton = document.getElementById("reset");
console.log(bill);

bill.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d.]+/g, "").substring(0, 5);
    // console.log('test');
    
});
