/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeparts = time.split(':') 
  if (parseInt(timeparts[0]) < 12) {
    return "Good Morning" 
  }
  if (parseInt(timeparts[0]) >= 12 && timeparts[0] < 17) {
    return "Good Afternoon"
  }
  if (parseInt(timeparts[0]) >= 17) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  const input = document.getElementById('greeting');
  input.innerHTML = `${msg}`

}