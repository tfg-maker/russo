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
      { pt: "estudar", ru: "учить" },
      { pt: "falar", ru: "говорить" },
      { pt: "ler", ru: "читать" },
      { pt: "perguntar", ru: "спрашивать" },
      { pt: "responder", ru: "отвечать" },
      { pt: "escrever", ru: "писать" },
      { pt: "apagar", ru: "стирать" },
      { pt: "errar", ru: "ошибаться" },
      { pt: "acertar", ru: "правильно ответить" },
      { pt: "aprender", ru: "выучить" },
      { pt: "conversar", ru: "разговаривать" },
      { pt: "chamar", ru: "звать" }
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
      { pt: "largar", ru: "бросать" },
      { pt: "dar / entregar", ru: "давать" },
      { pt: "receber / aceitar", ru: "Принимать" },
      { pt: "usar", ru: "использовать" },
      { pt: "mudar", ru: "менять" },
      { pt: "tentar", ru: "пытаться" },     
      { pt: "abrir", ru: "открывать" },
      { pt: "fechar", ru: "закрывать" },
      { pt: "tocar (instrumento)", ru: "играть" },
      { pt: "ligar (telefone)", ru: "звонить" },
      { pt: "acertar (alvo)", ru: "попадать" },
      { pt: "começar", ru: "начинать" },
      { pt: "terminar", ru: "заканчивать" }
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
      COTIDIANO / ATIVIDADES
  ====================== */
  {
    id: "cotidiano",
    label: "Cotidiano",
    words: [
      { pt: "ser / estar", ru: "быть" },
      { pt: "viver / morar", ru: "жить" },
      { pt: "trabalhar", ru: "работать" },
      { pt: "precisar", ru: "нуждаться" },
      { pt: "querer", ru: "хотеть" },
      { pt: "poder", ru: "мочь" },
      { pt: "esperar", ru: "ждать" },
      { pt: "comprar", ru: "покупать" },
      { pt: "vender", ru: "продавать" },
      { pt: "encontrar", ru: "находить" },
      { pt: "perder", ru: "терять" }
    ]
  },

  /* =====================
      EMOÇÕES E ESTADOS (O que eu sinto)
  ====================== */
  {
    id: "emocoes",
    label: "Emoções & Estados",
    words: [
      { pt: "amar", ru: "любить" },
      { pt: "sorrir", ru: "улыбаться" },
      { pt: "rir", ru: "смеяться" },
      { pt: "chorar", ru: "плакать" },
      { pt: "preocupar-se", ru: "волноваться" },
      { pt: "ter medo", ru: "бояться" },
      { pt: "alegrar-se", ru: "радоваться" },
      { pt: "irritar-se", ru: "злиться" },
      { pt: "esperar (esperança)", ru: "надеяться" },
      { pt: "sentir falta / saudade", ru: "скучать" }
    ]
  },

  /* =====================
      INTERAÇÃO SOCIAL (O que eu faço com os outros)
  ====================== */
  {
    id: "interacao",
    label: "Interação Social",
    words: [
      { pt: "pedir desculpas", ru: "извиняться" },
      { pt: "ajudar", ru: "помогать" },
      { pt: "conhecer (alguém)", ru: "знакомиться" }, // Reflexivo também!
      { pt: "abraçar", ru: "обнимать" },
      { pt: "beijar", ru: "целовать" },
      { pt: "prometer", ru: "обещать" },
      { pt: "agradecer", ru: "благодарить" } // Verbo essencial!
    ]
  }


  /* =====================
      CORPO HUMANO
  ====================== 
  {
    id: "corpo",
    label: "Corpo Humano",
    words: [
      { pt: "cabeça", ru: "голова" },
      { pt: "pescoço", ru: "шея" },
      { pt: "olho", ru: "глаз" },
      { pt: "boca", ru: "рот" },
      { pt: "lábio", ru: "губа" },
      { pt: "nariz", ru: "нос" },
      { pt: "orelha", ru: "ухо" },
      { pt: "mão / braço", ru: "рука" },
      { pt: "pé / perna", ru: "нога" },
      { pt: "dedo", ru: "палец" },
      { pt: "cabelo", ru: "волосы" }
    ]
  },*/

  /* =====================
     MOVIMENTO
  ====================== 
  {
    id: "movimento",
    label: "Movimento",
    words: [
      { pt: "ir", ru: "идти" },
      { pt: "vir / chegar", ru: "приходить" },
      { pt: "entrar", ru: "входить" },
      { pt: "sair (ir embora)", ru: "уходить" },
      { pt: "sair (para fora)", ru: "выходить" },
      { pt: "andar", ru: "ходить" },
      { pt: "viajar", ru: "путешествовать" },
      { pt: "ficar", ru: "оставаться" },
    ]
  },*/

  /* =====================
       DIREÇÃO
    ====================== 
  {
    id: "direção",
    label: "Direção",
    words: [
      { pt: "direita", ru: "право" },
      { pt: "esquerda", ru: "лево" },
      { pt: "cima", ru: "вверх" },
      { pt: "baixo", ru: "вниз" },
      { pt: "frente", ru: "вперёд" },
      { pt: "trás", ru: "назад" }
    ]
  },*/

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
