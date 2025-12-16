/* ===============================
   CARREGAMENTO DE VOZES (TTS)
================================ */

let russianVoice = null;

function loadVoices() {
  const voices = speechSynthesis.getVoices();

  // Tenta pegar voz russa nativa
  russianVoice =
    voices.find(v => v.lang === "ru-RU") ||
    voices.find(v => v.lang.startsWith("ru")) ||
    null;
}

// Chrome carrega vozes de forma assíncrona
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

/* ===============================
   LISTA DE PALAVRAS
================================ */

const palavras = [
  { pt: "comer", ru: "есть" },
  { pt: "beber", ru: "пить" },
  { pt: "falar", ru: "говорить" },
  { pt: "andar", ru: "ходить" },
  { pt: "ir", ru: "идти" },
  { pt: "vir", ru: "приходить" },
  { pt: "ver", ru: "видеть" },
  { pt: "olhar", ru: "смотреть" },
  { pt: "ouvir", ru: "слышать" },
  { pt: "escutar", ru: "слушать" },
  { pt: "pensar", ru: "думать" },
  { pt: "saber", ru: "знать" },
  { pt: "conhecer", ru: "знать" },
  { pt: "querer", ru: "хотеть" },
  { pt: "poder", ru: "мочь" },
  { pt: "fazer", ru: "делать" },
  { pt: "trabalhar", ru: "работать" },
  { pt: "viver", ru: "жить" },
  { pt: "morar", ru: "жить" },
  { pt: "amar", ru: "любить" },
  { pt: "gostar", ru: "нравиться" },
  { pt: "dar", ru: "давать" },
  { pt: "pegar", ru: "брать" },
  { pt: "chegar", ru: "приходить" },
  { pt: "sair", ru: "уходить" },
  { pt: "dormir", ru: "спать" },
  { pt: "acordar", ru: "просыпаться" },
  { pt: "comprar", ru: "покупать" },
  { pt: "vender", ru: "продавать" },
  { pt: "abrir", ru: "открывать" },
  { pt: "fechar", ru: "закрывать" },
  { pt: "começar", ru: "начинать" },
  { pt: "terminar", ru: "заканчивать" },
  { pt: "ajudar", ru: "помогать" },
  { pt: "esperar", ru: "ждать" },
  { pt: "entender", ru: "понимать" },
  { pt: "lembrar", ru: "помнить" },
  { pt: "esquecer", ru: "забывать" },
  { pt: "perguntar", ru: "спрашивать" },
  { pt: "responder", ru: "отвечать" },
  { pt: "usar", ru: "использовать" },
  { pt: "tentar", ru: "пытаться" },
  { pt: "encontrar", ru: "находить" },
  { pt: "perder", ru: "терять" },
  { pt: "ficar", ru: "оставаться" },
  { pt: "mudar", ru: "менять" },
  { pt: "sentir", ru: "чувствовать" },
  { pt: "acreditar", ru: "верить" }
];

/* ===============================
   RENDERIZAÇÃO + VALIDAÇÃO
================================ */

const lista = document.getElementById("lista-palavras");

palavras.forEach(palavra => {
  const card = document.createElement("div");
  card.className = "card";

  const pt = document.createElement("div");
  pt.className = "pt";
  pt.textContent = palavra.pt;

  const input = document.createElement("input");
  input.className = "input";
  input.type = "text";
  input.placeholder = "Digite em russo";

  input.addEventListener("input", () => {
    const valor = input.value.trim();

    input.classList.remove("correct", "wrong");

    if (!valor) return;

    const normalizadoInput = valor.toLowerCase();
const normalizadoResposta = palavra.ru.toLowerCase();

if (normalizadoInput === normalizadoResposta) {
  input.classList.add("correct");
} else {
  input.classList.add("wrong");
}

  });

  /* ===============================
     BOTÃO DE ÁUDIO
  ================================ */

  const audioBtn = document.createElement("button");
  audioBtn.className = "btn";
  audioBtn.textContent = "🔊";
  audioBtn.title = "Ouvir pronúncia";

  audioBtn.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
      alert("Seu navegador não suporta áudio TTS.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(palavra.ru);
    utterance.lang = "ru-RU";
    utterance.rate = 0.9;

    if (russianVoice) {
      utterance.voice = russianVoice;
    }

    // Evita sobreposição de áudios
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });

  /* ===============================
     BOTÃO MOSTRAR
  ================================ */

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "Mostrar";

  btn.addEventListener("click", () => {
    input.value = palavra.ru;
    input.classList.remove("wrong");
    input.classList.add("correct");
  });

  card.appendChild(pt);
  card.appendChild(input);
  card.appendChild(audioBtn);
  card.appendChild(btn);

  lista.appendChild(card);
});
