let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "thanks to christ the king"
];

function generarExcusa() {
  const indiceWho = Math.floor(Math.random() * who.length);
  const indiceAction = Math.floor(Math.random() * action.length);
  const indiceWhat = Math.floor(Math.random() * what.length);
  const indiceWhen = Math.floor(Math.random() * when.length);

  const excusa = `${who[indiceWho]} ${action[indiceAction]} ${what[indiceWhat]} ${when[indiceWhen]}.`;

  return excusa;
}

function mostrarExcusa() {
  const elementoExcusa = document.getElementById("excuse");

  const excusa = generarExcusa();

  elementoExcusa.innerHTML = excusa;
}

window.onload = mostrarExcusa;
