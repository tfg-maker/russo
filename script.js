/***********************
 * DADOS
 ***********************/
const groups = [

  /* =====================
     SENTIDOS / PERCEPÇÃO
  ====================== */
  {
    id: "sentidos",
    label: "Sentidos",
    words: [
      { pt: "ver", ru: "видеть" },
      { pt: "olhar / assistir", ru: "смотреть" },
      { pt: "ouvir", ru: "слышать" },
      { pt: "escutar", ru: "слушать" },
      { pt: "cheirar", ru: "нюхать" },
      { pt: "sentir", ru: "чувствовать" },
      { pt: "tocar (sensação)", ru: "трогать" }
    ]
  },

  /* =====================
     MENTE / COGNIÇÃO
  ====================== */
  {
    id: "mente",
    label: "Mente",
    words: [
      { pt: "pensar", ru: "думать" },
      { pt: "saber / conhecer", ru: "знать" },
      { pt: "entender", ru: "понимать" },
      { pt: "lembrar", ru: "помнить" },
      { pt: "esquecer", ru: "забывать" },
      { pt: "confundir", ru: "путать" },
      { pt: "acreditar", ru: "верить" },
      { pt: "gostar", ru: "нравиться" },
      { pt: "preferir", ru: "предпочитать" }
    ]
  },

  /* =====================
     ESTUDO / COMUNICAÇÃO
  ====================== */
  {
    id: "estudo",
    label: "Estudo & Comunicação",
    words: [
      { pt: "estudar", ru: "учиться" },
      { pt: "falar", ru: "говорить" },
      { pt: "ler", ru: "читать" },
      { pt: "perguntar", ru: "спрашивать" },
      { pt: "responder", ru: "отвечать" },
      { pt: "escrever", ru: "писать" },
      { pt: "apagar", ru: "стирать" },
      { pt: "errar", ru: "ошибаться" },
      { pt: "acertar", ru: "попадать" }
    ]
  },

  /* =====================
     MOVIMENTO
  ====================== */
  {
    id: "movimento",
    label: "Movimento",
    words: [
      { pt: "ir", ru: "идти" },
      { pt: "vir / chegar", ru: "приходить" },
      { pt: "sair", ru: "уходить" },
      { pt: "andar", ru: "ходить" },
      { pt: "viajar", ru: "путешествовать" },
      { pt: "ficar", ru: "оставаться" }
    ]
  },

  /* =====================
     AÇÕES FÍSICAS
  ====================== */
  {
    id: "acoes",
    label: "Ações",
    words: [
      { pt: "fazer", ru: "делать" },
      { pt: "pegar", ru: "брать" },
      { pt: "dar", ru: "давать" },
      { pt: "usar", ru: "использовать" },
      { pt: "mudar", ru: "менять" },
      { pt: "tocar (instrumento)", ru: "играть" },
      { pt: "ligar (telefone)", ru: "звонить" }
    ]
  },

  /* =====================
     EMOÇÕES / RELAÇÕES
  ====================== */
  {
    id: "relacoes",
    label: "Relações",
    words: [
      { pt: "amar", ru: "любить" },
      { pt: "beijar", ru: "целовать" },
      { pt: "abraçar", ru: "обнимать" },
      { pt: "pedir desculpas", ru: "извиняться" },
      { pt: "ajudar", ru: "помогать" }
    ]
  },

  /* =====================
     ROTINA / NECESSIDADES
  ====================== */
  {
    id: "rotina",
    label: "Rotina",
    words: [
      { pt: "comer", ru: "есть" },
      { pt: "beber", ru: "пить" },
      { pt: "dormir", ru: "спать" },
      { pt: "acordar", ru: "просыпаться" },
      { pt: "almoçar", ru: "обедать" },
      { pt: "jantar", ru: "ужинать" },
      { pt: "tomar banho", ru: "принимать душ" }
    ]
  },

  /* =====================
     VIDA PRÁTICA
  ====================== */
  {
    id: "vida",
    label: "Vida Prática",
    words: [
      { pt: "ser", ru: "быть" },
      { pt: "viver / morar", ru: "жить" },
      { pt: "trabalhar", ru: "работать" },
      { pt: "precisar", ru: "нуждаться" },
      { pt: "querer", ru: "хотеть" },
      { pt: "poder", ru: "мочь" },
      { pt: "esperar", ru: "ждать" }
    ]
  },

  /* =====================
     OBJETOS / TAREFAS
  ====================== */
  {
    id: "objetos",
    label: "Objetos & Tarefas",
    words: [
      { pt: "comprar", ru: "покупать" },
      { pt: "vender", ru: "продавать" },
      { pt: "abrir", ru: "открывать" },
      { pt: "fechar", ru: "закрывать" },
      { pt: "encontrar", ru: "находить" },
      { pt: "perder", ru: "терять" }
    ]
  },

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

let activeGroup = groups[0].id;
let voices = [];

/***********************
 * VOZ (Web Speech API)
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

  group.words.forEach(word => {
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


    // Validação em tempo real
    input.addEventListener("input", () => {
      const value = input.value.trim().toLowerCase();
      const correct = word.ru.toLowerCase();

      input.classList.remove("correct", "wrong");

      if (!value) return;

      input.classList.add(value === correct ? "correct" : "wrong");
    });

    // Mostrar resposta
    btnShow.addEventListener("click", () => {
      input.value = word.ru;
      input.classList.remove("wrong");
      input.classList.add("correct");
    });

    // Áudio
    btnAudio.addEventListener("click", () => {
      playAudio(word.ru);
    });

    row.append(label, input, actions);
    listEl.appendChild(row);
  });
}

/***********************
 * INIT
 ***********************/
renderTabs();
renderList();
