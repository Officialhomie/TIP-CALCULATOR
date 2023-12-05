const billsInp = document.querySelector('.bills-inp');
const billsWarning = document.querySelector('.bills-warning');
const tipPercent = document.querySelector('.tip-percent');
const tipWarning = document.querySelector('.tip-warning');
const nosPerson = document.querySelector('.no-persons');
const errorMsg = document.querySelector('.warning');
const genWarning = document.querySelector('.general-warning');
const calc = document.querySelector('.calc');

const amtPerPerson = document.querySelector('.dollar-tip-amount');
const totalPerPerson = document.querySelector('.total-tip-amount');
const reset = document.querySelector('.Reset');

function errorHandler (msg){
    billsWarning.textContent = msg
    setTimeout(() => {
        billsWarning.textContent = ""
    },5000)
}

function tipError (msg){
    tipWarning.textContent = msg
    setTimeout(() => {
        tipWarning.textContent = ""
    },5000)
}
 
function warning (msg){
    errorMsg.textContent = msg
    setTimeout(() => {
        errorMsg.textContent = ""
    },5000)
}

function generalWarning (msg){
    genWarning.textContent = msg
    setTimeout(() => {
        genWarning.textContent = ""
    },5000)
}


calc.addEventListener('click', () => {
    if (billsInp.value === "") {
        errorHandler("Please Insert Amount");
    } else if (tipPercent.value === "") {
        tipError("Select Percentage");
    } else if (nosPerson.value === ""){
        warning("Input Amount!");
    } else if (!Number(billsInp.value) || !Number(tipPercent.value) || !Number(nosPerson.value)) {
        generalWarning("Input Numbers Only");
    } else {
        let bills = Number(billsInp.value);
        let percent = Number(tipPercent.value);
        let persons = Number(nosPerson.value);
        let indivAmount = bills / persons
        let pecentageCalc = percent / 100;
        let sharedAmount = pecentageCalc * bills;
        let total = sharedAmount / persons;
        let totalAmount = indivAmount + total;

        amtPerPerson.textContent = total.toFixed(1);
        totalPerPerson.textContent = totalAmount.toFixed(1);
    }
})

document.querySelector(".Reset").addEventListener("click", ()=>{
    billsInp.value = "";
    tipPercent.value = "";
    nosPerson.value = "";
    amtPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
})
