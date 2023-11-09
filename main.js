document.querySelector('#compute').addEventListener('click', compute)
function compute() {
    const month = Number(document.querySelector('#month').value)
    const day = (document.querySelector('#day').value)
    if (month ===1 && day >= 20 || month ===2 && day <= 18) {
        document.querySelector('#result').innerText = "Aquarius: 'You will find true love'"
    } else if (month === 2 && day >= 19 || month === 3 && day <= 20) {
        document.querySelector('#result').innerText = "Pisces: 'You will find happiness'"
    } else if (month === 3 && day >= 21 || month === 4 && day <= 19) {
        document.querySelector('#result').innerText = "Aries: 'You will find money'"
    } else if (month === 4 && day >= 20 || month === 5 && day <= 20) {
        document.querySelector('#result').innerText = "Taurus: 'You will find faith'"
    } else if (month === 5 && day >= 21 || month === 6 && day <= 20) {
        document.querySelector('#result').innerText = "Gemini: 'You will find freedom'"
    } else if (month === 6 && day >= 21 || month === 7 && day <= 22) {
        document.querySelector('#result').innerText = "Cancer: 'You will find hope'"
    } else if (month === 7 && day >= 23 || month === 8 && day <= 22) {
        document.querySelector('#result').innerText = "Leo: 'You will find friendship'"
    } else if (month === 8 && day >= 23 || month === 9 && day <= 22) {
        document.querySelector('#result').innerText = "Virgo: 'You will find success'"
    } else if (month === 9 && day >= 23 || month === 10 && day <= 22) {
        document.querySelector('#result').innerText = "Libra: 'You will find balance'"
    } else if (month === 10 && day >= 23 || month === 11 && day <= 21) {
        document.querySelector('#result').innerText = "Scorpio: 'You will find fun'"
    } else if (month === 11 && day >= 22 || month === 12 && day <= 21) {
        document.querySelector('#result').innerText = "Sagittarius: 'You will find truth'"
    } else if (month === 12 && day >= 22 || month === 1 && day <= 19) {
        document.querySelector('#result').innerText = "Capricorn: 'You will find fortune'"
    } else {
        document.querySelector('#result').innerText = "Please Enter a valid date"
    }
}
