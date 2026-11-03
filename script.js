//your JS code here. If required.const element = document.getElementById('level')
let currentElement = element
let count = 0

while (currentElement) {
    count++
    currentElement = currentElement.parentElement

}
alert(`The level of the element is: ${count}`)
