const alfabeto = [
    { l: "А", s: "a", t: "v" }, { l: "Б", s: "b", t: "c" },
    { l: "В", s: "v", t: "c" }, { l: "Г", s: "g", t: "c" },
    { l: "Д", s: "d", t: "c" }, { l: "Е", s: "ié", t: "v" },
    { l: "Ё", s: "ió", t: "v" }, { l: "Ж", s: "j", t: "c" },
    { l: "З", s: "z", t: "c" }, { l: "И", s: "i", t: "v" },
    { l: "Й", s: "i curto", t: "c" }, { l: "К", s: "k", t: "c" },
    { l: "Л", s: "l", t: "c" }, { l: "М", s: "m", t: "c" },
    { l: "Н", s: "n", t: "c" }, { l: "О", s: "o", t: "v" },
    { l: "П", s: "p", t: "c" }, { l: "Р", s: "r", t: "c" },
    { l: "С", s: "s", t: "c" }, { l: "Т", s: "t", t: "c" },
    { l: "У", s: "u", t: "v" }, { l: "Ф", s: "f", t: "c" },
    { l: "Х", s: "rr", t: "c" }, { l: "Ц", s: "ts", t: "c" },
    { l: "Ч", s: "tch", t: "c" }, { l: "Ш", s: "ch", t: "c" },
    { l: "Щ", s: "chtch", t: "c" }, { l: "Ы", s: "i duro", t: "v" },
    { l: "Э", s: "é", t: "v" }, { l: "Ю", s: "iú", t: "v" },
    { l: "Я", s: "iá", t: "v" }
];

// ... (mantenha o array alfabeto no topo)

// 1. EVENTO DE INICIALIZAÇÃO E TROCA DE ABAS
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const wrapperProgresso = document.getElementById('progresso-wrapper'); // O container da barra

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const modo = tab.getAttribute('data-type');
            
            if (modo === 'escrita') {
                // MOSTRA o progresso apenas aqui
                if(wrapperProgresso) wrapperProgresso.style.display = 'block';
                renderEscrito();
                atualizarProgresso(); 
            } else {
                // ESCONDE nas outras abas
                if(wrapperProgresso) wrapperProgresso.style.display = 'none';
                renderAlfabeto();
            }
        });
    });

    renderAlfabeto();
});

// 2. FUNÇÕES DE RENDERIZAÇÃO
function renderAlfabeto() {
    const grid = document.getElementById('grid-container');
    if (!grid) return;
    grid.className = "grid-layout";
    grid.innerHTML = alfabeto.map((item, index) => `
        <div class="card-alfabeto" id="card-${index}">
            <div class="audio-icon" onclick="tocarLetra('${item.l}')">🔊</div>
            <h2>${item.l}</h2>
            <input type="text" class="alfabeto-input" placeholder="Som..." 
                   oninput="this.value.toLowerCase() === '${item.s}' ? this.classList.add('ok') : this.classList.remove('ok')">
            <div class="btn-group-genero">
                <button onclick="verificar('${item.t}', 'v', ${index})">V</button>
                <button onclick="verificar('${item.t}', 'c', ${index})">C</button>
            </div>
        </div>
    `).join('');
}

function renderEscrito() {
    const grid = document.getElementById('grid-container');
    if (!grid) return;
    grid.className = "escrito-layout";

    const vogais = alfabeto.filter(item => item.t === 'v');
    const consoantes = alfabeto.filter(item => item.t === 'c');

    grid.innerHTML = `
        <div class="grupo-escrita">
            <h3>Vogais <span>(A, E, I...)</span></h3>
            <div class="cards-escrita">
                ${vogais.map((item, index) => renderCardEscrita(item, 'v-' + index)).join('')}
            </div>
        </div>
        <div class="grupo-escrita">
            <h3>Consoantes <span>(B, D, F...)</span></h3>
            <div class="cards-escrita">
                ${consoantes.map((item, index) => renderCardEscrita(item, 'c-' + index)).join('')}
            </div>
        </div>
    `;
}

function renderCardEscrita(item, id) {
    return `
        <div class="card-mini-escrita" id="card-esc-${id}">
            <span class="som-guia">${item.s}</span>
            <input type="text" maxlength="2" placeholder="?" 
                   oninput="validarLetra(this, '${item.l}', 'card-esc-${id}')">
        </div>
    `;
}

// 3. LÓGICA DE VALIDAÇÃO
function verificar(correto, palpite, index) {
    const card = document.getElementById(`card-${index}`);
    const botoes = card.querySelectorAll('button');
    botoes.forEach(btn => btn.classList.remove('selected'));
    const botaoClicado = [...botoes].find(btn => btn.textContent.toLowerCase() === palpite);
    if (botaoClicado) botaoClicado.classList.add('selected');

    card.classList.remove('correct', 'wrong');
    if (palpite === correto) {
        card.classList.add('correct');
    } else {
        card.classList.add('wrong');
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = 'shake 0.3s';
    }
}

function validarLetra(input, correta, cardId) {
    const card = document.getElementById(cardId);
    if (input.value.trim().toUpperCase() === correta.toUpperCase()) {
        card.classList.add('fixed-success');
        input.disabled = true;
        atualizarProgresso();
        tocarLetra(correta);
    }
}

function atualizarProgresso() {
    const totalLetras = alfabeto.length;
    const acertos = document.querySelectorAll('.fixed-success').length;
    const percentagem = Math.round((acertos / totalLetras) * 100);

    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-percent');

    if (fill && text) {
        fill.style.width = percentagem + "%";
        text.innerText = percentagem + "%";
        if (percentagem === 100) {
            fill.style.backgroundColor = "#FFD700";
            text.innerText = "⭐ Concluído!";
        }
    }
}

function tocarLetra(letra) {
    const msg = new SpeechSynthesisUtterance(letra);
    msg.lang = 'ru-RU';
    window.speechSynthesis.speak(msg);
}

// 4. BOTÃO DE RESET (Ajustado para o ID correto)
const btnReset = document.getElementById('resetBtn') || document.getElementById('resetAll'); 
if(btnReset) {
    btnReset.addEventListener('click', () => {
        const activeTab = document.querySelector('.tab.active').getAttribute('data-type');
        activeTab === 'escrita' ? renderEscrito() : renderAlfabeto();
        atualizarProgresso();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}