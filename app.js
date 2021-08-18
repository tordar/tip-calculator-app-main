console.log('hello world')

const totalBill = document.getElementById('bill')
const tip5 = document.getElementById('5')
const tip10 = document.getElementById('10')
const tip15 = document.getElementById('15')
const tip25 = document.getElementById('25')
const tip50 = document.getElementById('50')
const custom = document.getElementById('custom')
const numPeople = document.getElementById('numPeople')
const finalTipPerson = document.getElementById('finalTipPerson')
const totalPricePerson = document.getElementById('finalTipTotal')
const resetButton = document.getElementById('reset')


let billAmount = 0
let tipAmount = 0
let numberOfPeople = 0
let totalTip = 0
let tipPerson = 0
let finalTipPerPerson = 0

totalBill.addEventListener('change', () => {
    billAmount = totalBill.value
    console.log(billAmount)

    custom.addEventListener('change', () => {
        tipAmount = custom.value
        console.log(tipAmount)
    })

    document.querySelectorAll('.tip').forEach(item => {
        item.addEventListener('click', ()=>{
            tipAmount = item.value
            console.log(tipAmount)
        })
    })
        numPeople.addEventListener('change', () => {
            numberOfPeople = numPeople.value
            console.log(numberOfPeople)
                finalTipPerPerson = (billAmount / 100) * (tipAmount / numberOfPeople)
                finalTipPerson.innerHTML = finalTipPerPerson
                totalPricePerson.innerHTML = finalTipPerPerson + (billAmount / numberOfPeople)
            })
   
        })

resetButton.addEventListener('click', () => {
    finalTipPerson.innerHTML = '0.00'
    totalPricePerson.innerHTML = '0.00'
})



const calculator = () => {
    totalBill.addEventListener('change', () => {
        billAmount = totalBill.value
    })

    custom.addEventListener('change', () => {
        tipAmount = custom.value
    })
    
    numPeople.addEventListener('change', () => {
        numberOfPeople = numPeople.value
    })
    
    finalTipPerson.innerHTML = billAmount * numberOfPeople
}

// calculator()