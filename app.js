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
})

custom.addEventListener('change', () => {
    tipAmount = custom.value
})

document.querySelectorAll('.tip').forEach(item => {
    item.addEventListener('click', ()=>{
        tipAmount = item.value
        item.style.backgroundColor = 'hsl(185, 41%, 84%)'
    })
})

numPeople.addEventListener('change', () => {
    numberOfPeople = numPeople.value
    finalTipPerPerson = (billAmount / 100) * (tipAmount / numberOfPeople)
    finalTipPerPerson = Math.round(finalTipPerPerson * 100) / 100
    finalTipPerson.innerHTML = finalTipPerPerson
    tipPerson = Math.round(finalTipPerPerson + (billAmount / numberOfPeople) * 100) / 100
    totalPricePerson.innerHTML = tipPerson
    if(finalTipPerPerson.innerHTML != '0.00'){
        resetButton.style.backgroundColor = 'hsl(185, 41%, 84%)'
        resetButton.addEventListener('click', () => {
            activateReset()
        })
    }
})

const activateReset = () =>{
    finalTipPerson.innerHTML = '0.00'
    totalPricePerson.innerHTML = '0.00'
    resetButton.style.backgroundColor = 'hsl(186, 14%, 43%)'
    document.querySelectorAll('.tipButton').forEach(item => {
            item.style.backgroundColor = 'hsl(183, 100%, 15%)'
        })
    totalBill.value = ''
    numPeople.value = ''
}