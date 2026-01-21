/***********************
 * DADOS
 ***********************/
const groups = [

  /* =====================
     NÚMEROS
  ====================== */
  {
    id: "numeros",
    label: "Números",
    words: [
      { pt: "0", ru: "ноль" },
      { pt: "1", ru: "один" },
      { pt: "2", ru: "два" },
      { pt: "3", ru: "три" },
      { pt: "4", ru: "четыре" },
      { pt: "5", ru: "пять" },
      { pt: "6", ru: "шесть" },
      { pt: "7", ru: "семь" },
      { pt: "8", ru: "восемь" },
      { pt: "9", ru: "девять" },
      { pt: "10", ru: "десять" },
      { pt: "11", ru: "одиннадцать" },
      { pt: "12", ru: "двенадцать" },
      { pt: "13", ru: "тринадцать" },
      { pt: "14", ru: "четырнадцать" },
      { pt: "15", ru: "пятнадцать" },
      { pt: "16", ru: "шестнадцать" },
      { pt: "17", ru: "семнадцать" },
      { pt: "18", ru: "восемнадцать" },
      { pt: "19", ru: "девятнадцать" },
      { pt: "20", ru: "двадцать" },
      { pt: "30", ru: "тридцать" },
      { pt: "40", ru: "сорок" },
      { pt: "50", ru: "пятьдесят" },
      { pt: "60", ru: "шестьдесят" },
      { pt: "70", ru: "семьдесят" },
      { pt: "80", ru: "восемьдесят" },
      { pt: "90", ru: "девяносто" },
      { pt: "100", ru: "сто" }
    ]
  }

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
