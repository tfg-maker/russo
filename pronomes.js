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

/***********************
 * DADOS
 ***********************/
const groups = [

  /* =====================
     PRONOMES
  ====================== */
  {
    id: "pessoais",
    label: "Pessoais",
    words: [
      { pt: "eu", ru: "я" },
      { pt: "você (informal)", ru: "ты" },
      { pt: "ele", ru: "он" },
      { pt: "ela", ru: "она" },
      { pt: "isso (neutro)", ru: "оно" },
      { pt: "nós", ru: "мы" },
      { pt: "vocês / você (formal)", ru: "вы" },
      { pt: "eles / elas", ru: "они" }
    ]
  },

  {
    id: "possessivos",
    label: "Possessivos",
    words: [
      { pt: "meu", ru: "мой" },
      { pt: "teu", ru: "твой" },
      { pt: "nosso", ru: "наш" },
      { pt: "vosso / de vocês", ru: "ваш" },
      { pt: "dele", ru: "его" },
      { pt: "dela", ru: "её" },
      { pt: "deles", ru: "их" }
    ]
  },

];


/***********************
 * ELEMENTOS
 ***********************/
const tabsEl = document.getElementById("tabs");
const listEl = document.getElementById("wordList");
const progressEl = document.getElementById("progress");

let activeGroup = groups[0].id;
let voices = [];

/***********************
 * LOCAL STORAGE
 ***********************/
function getProgress() {
  return JSON.parse(localStorage.getItem("progress")) || {};
}

function saveProgress(progress) {
  localStorage.setItem("progress", JSON.stringify(progress));
}

function resetProgress() {
  localStorage.removeItem("progress");
  renderList();
}

/***********************
 * VOZ
 ***********************/
function loadVoices() {
  voices = speechSynthesis.getVoices();
}
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function playAudio(text) {
  if (!voices.length) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ru-RU";

  const ruVoice = voices.find(v => v.lang === "ru-RU");
  if (ruVoice) utterance.voice = ruVoice;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

/***********************
 * HELPERS
 ***********************/
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function updateProgressUI(group) {
  const progress = getProgress();
  const correct = progress[group.id]
    ? Object.keys(progress[group.id]).length
    : 0;

  progressEl.textContent = `${correct} / ${group.words.length}`;
}

/***********************
 * RENDER ABAS
 ***********************/
function renderTabs() {
  tabsEl.innerHTML = "";

  groups.forEach(group => {
    const tab = document.createElement("div");
    tab.className = "tab" + (group.id === activeGroup ? " active" : "");
    tab.textContent = group.label;

    tab.addEventListener("click", () => {
      activeGroup = group.id;
      renderTabs();
      renderList();
    });

    tabsEl.appendChild(tab);
  });
}

/***********************
 * RENDER LISTA
 ***********************/
function renderList() {
  listEl.innerHTML = "";

  const group = groups.find(g => g.id === activeGroup);
  const words = shuffle(group.words);
  const progress = getProgress();

  updateProgressUI(group);

  words.forEach(word => {
    const row = document.createElement("div");
    row.className = "word";

    const label = document.createElement("span");
    label.textContent = word.pt;

    const input = document.createElement("input");
    input.placeholder = "Digite em russo…";

    const actions = document.createElement("div");
    actions.className = "actions";

    const btnShow = document.createElement("button");
    btnShow.textContent = "👁️";

    const btnAudio = document.createElement("button");
    btnAudio.textContent = "🔊";

    actions.append(btnShow, btnAudio);

    // restaurar estado salvo
    if (progress[group.id] && progress[group.id][word.pt]) {
      input.value = word.ru;
      input.classList.add("correct");
    }

    // validação justa
    input.addEventListener("input", () => {
      const value = input.value.trim().toLowerCase();
      const correct = word.ru.toLowerCase();

      input.classList.remove("correct", "wrong", "revealed");

      if (!value) return;

      if (value === correct) {
        input.classList.add("correct");

        progress[group.id] = progress[group.id] || {};

        if (!progress[group.id][word.pt]) {
          progress[group.id][word.pt] = true;
          saveProgress(progress);
          updateProgressUI(group);
        }
      } else {
        input.classList.add("wrong");
      }
    });

    // mostrar resposta (amarelo)
    btnShow.addEventListener("click", () => {
      input.value = word.ru;
      input.classList.remove("wrong", "correct");
      input.classList.add("revealed");
    });

    // áudio
    btnAudio.addEventListener("click", () => {
      playAudio(word.ru);
    });

    row.append(label, input, actions);
    listEl.appendChild(row);
  });
}

/***********************
 * RESET GERAL (se existir)
 ***********************/
const resetBtn = document.getElementById("resetAll");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (confirm("Resetar todo o progresso?")) {
      resetProgress();
    }
  });
}

/***********************
 * INIT
 ***********************/
renderTabs();
renderList();
