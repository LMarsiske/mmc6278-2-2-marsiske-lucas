// Your code here
function greet() {
  let name = prompt("What is your name?");
  alert(`Hello, ${name}`);
  let age = parseInt(prompt("How old are you?"));
  let birthYear = null;
  let currentYear = new Date().getFullYear();
  if (window.confirm("Have you had a birthday yet this year?")) {
    birthYear = currentYear - age;
  } else {
    birthYear = currentYear - (age + 1);
  }
  alert(`You were born in ${birthYear}!`);
}
