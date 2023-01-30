const value1El = document.querySelector("#value1");
const value2El = document.querySelector("#value2");
const resultEl = document.querySelector("#result");
const checkBtn = document.querySelector("#checkBtn");

checkBtn.addEventListener("click", () => {
  let value1 = value1El.value;
  let value2 = value2El.value;
  if (value1 == value2) {
    resultEl.innerHTML = "les valeurs sont egales";
  } else {
    resultEl.innerHTML = "les valeurs ne sont pas egales";
  }
});