var firstName = prompt('What is your 1st name?')
var familyName = prompt('what is your family name?')
alert('welcome ' + firstName + familyName)


var localTime = prompt('What is your current time?')
console.log(localTime)
localTime = Number(localTime)
console.log(localTime)
if (localTime <= 12 && localTime >=6 ) {
    alert('Good morning ' + firstName)
} else if (localTime <= 20 && localTime >=13) {
    alert('Good evning ' + firstName)
} else {
    alert("Go sleep " + firstName + ' !') 

}

document.write('This web page presented for ' +firstName + " " + familyName)


