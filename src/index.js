let password = document.getElementById("password");
let input = document.getElementById("enterPassword");
let button = document.getElementById("next");
let correct = document.getElementById("correct");
let counter = 0;
let words = [
  "call",
'instrument',
'fearful',
'punishment',
'fit',
'vulgar',
'labored',
'temper',
'married',
'closed',
'safe',
'hypnotic',
'even',
'month',
'grumpy',
'live',
'tranquil',
'prefer',
'tendency',
'abiding',
'cross',
'wail',
'van',
'secretive',
'clever',
'second-hand',
'accurate',
'tidy',
'scorch',
'hideous',
'faulty',
'cactus',
'remain',
'amused',
'flood',
'base',
'cow',
'rifle',
'ubiquitous',
'spare',
'range',
'hapless',
'quarter',
'accidental',
'easy',
'obtain',
'pray',
'crook',
'army',
'spurious',
'squirrel',
'water',
'scissors',
'glossy',
'rural',
'bucket',
'mountain',
'perfect',
'rock',
'encourage',
'rescue',
'title',
'outstanding',
'cooing',
'switch',
'houses',
'receptive',
'shaggy',
'garrulous',
'defeated',
'ragged',
'flowery',
'bath',
'search',
'doll',
'experience',
'clear',
'fasten',
'selection',
'cats',
'pear',
'ashamed',
'mint',
'x-ray',
'abashed',
'spotty',
'reproduce',
'craven',
'plausible',
'ladybug',
'bashful',
'daily',
'religion',
'observe',
'kind',
'cherry',
'sound',
'breath',
'curved',
'border'
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
    i = 0;
    alert("Try again");
    password.innerHTML = "Password";
    counter = 0;
    correct.innerHTMl = `Password Number: ${counter}`;
    input.value = "";
  }

  if (i > words.length) {
    i = 1;
    password.innerText = words[i];
  }
}
