const datasets = {
  pessoais: [
    { pt: "eu", ru: "я" },
    { pt: "você (informal)", ru: "ты" },
    { pt: "ele", ru: "он" },
    { pt: "ela", ru: "она" },
    { pt: "isso (neutro)", ru: "оно" },
    { pt: "nós", ru: "мы" },
    { pt: "vocês / formal", ru: "вы" },
    { pt: "eles / elas", ru: "они" }
  ],
  possessivos: [
    { pt: "meu", ru: "мой" },
    { pt: "teu", ru: "твой" },
    { pt: "nosso", ru: "наш" },
    { pt: "vosso / de vocês", ru: "ваш" },
    { pt: "dele", ru: "его" },
    { pt: "dela", ru: "её" },
    { pt: "deles", ru: "их" }
  ]
};

let currentType = "pessoais";
let voices = [];
const listEl = document.getElementById("pronounList");
const tabs = document.querySelectorAll("#typeToggle .tab");

/***********************
 * SISTEMA DE ÁUDIO
 ***********************/
function loadVoices() {
  voices = speechSynthesis.getVoices();
}
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function playAudio(text) {
  if (!voices.length) voices = speechSynthesis.getVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ru-RU";
  
  const ruVoice = voices.find(v => v.lang === "ru-RU" || v.lang.includes("ru"));
  if (ruVoice) utterance.voice = ruVoice;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

/***********************
 * LÓGICA DE INTERFACE
 ***********************/
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentType = tab.getAttribute("data-type");
    render();
  });
});

function render() {
  listEl.innerHTML = "";
  const data = datasets[currentType];
  document.getElementById("currentCategory").textContent = 
    currentType === "pessoais" ? "Pronomes Pessoais" : "Pronomes Possessivos";

  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "word";

    const label = document.createElement("span");
    label.textContent = item.pt;

    const input = document.createElement("input");
    input.placeholder = "Digite em russo...";

    const actions = document.createElement("div");
    actions.className = "actions";

    const btnAudio = document.createElement("button");
    btnAudio.textContent = "🔊";
    btnAudio.title = "Ouvir pronúncia";
    btnAudio.onclick = () => playAudio(item.ru);

    actions.append(btnAudio);

    input.addEventListener("input", () => {
      const val = input.value.trim().toLowerCase();
      input.classList.remove("correct", "wrong");
      if (!val) return;
      if (val === item.ru.toLowerCase()) {
        input.classList.add("correct");
        // Opcional: Tocar áudio automático ao acertar
        // playAudio(item.ru); 
      } else {
        input.classList.add("wrong");
      }
    });

    row.append(label, input, actions);
    listEl.appendChild(row);
  });
}

render();