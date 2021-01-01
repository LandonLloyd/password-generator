let password = document.getElementById("password");
let input = document.getElementById("enterPassword");
let button = document.getElementById("next");
let correct = document.getElementById("correct");
let counter = 0;
let words = [
  "action",
  "again",
  "test",
  "vacation",
  "Goat",
  "happy",
  "terrible-password",
  "random",
  "type-me-right",
  "you-got-this",
  "!@#$%^&*()",
  "~~~!"
];
let i = 0;

button.addEventListener("click", passwordGenerator);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    passwordGenerator();
  }
});
function passwordGenerator() {
  if (input.value === password.innerText) {
    counter++;
    correct.innerHTML = `Password Number: ${counter}`;
    alert("Correct, Next Password!");
    i++;
    password.innerText = words[i];
    input.value = "";
  } else if (input.value !== password.innerText) {
    alert("Try again");
    password.innerHTML = "Password";
    counter = 0;
    correct.innerHTMl = `Password Number: ${counter}`;
    input.value = "";
  }

  if (i > words.length) {
    i = 0;
    password.innerText = words[i];
  }
}
