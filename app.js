console.log('hello world')

const totalBill = document.getElementById('bill')
const tip5 = document.getElementById('5')
const tip10 = document.getElementById('10')
const tip15 = document.getElementById('15')
const tip25 = document.getElementById('25')
const tip50 = document.getElementById('50')
const custom = document.getElementById('custom')

tip5.addEventListener('click', () => {
    console.log(tip5.value)
})

totalBill.addEventListener('change', () => {
    console.log(totalBill.value)
})