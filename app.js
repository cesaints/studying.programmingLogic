alert("Welcome to the secret number game!");

let secretNumber = 4;
let chute;
let attempts = 1;

while (chute != secretNumber) {
  chute = prompt("Choose a number between 0 and 10: ");

  if (secretNumber == chute) {
    break;
  } else if (chute > secretNumber) {
    alert(`The secret number is less than ${chute}`);
    attempts++;
  } else {
    alert(`The secret number is greater than  ${chute}`);
    attempts++;
  }
}

if (attempts > 1) {
  alert(
    `Congratulations! You discovered the secret number (${secretNumber}) with ${attempts} attempts`
  );
} else {
  alert(
    `Congratulations! You discovered the secret number (${secretNumber}) with ${attempts} attempt`
  );
}
