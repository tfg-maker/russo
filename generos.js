const palavrasTreino = [
    // --- MASCULINOS (m) ---
    { p: "Стол", t: "m", pl: "Столы", d: "Mesa" },
    { p: "Журнал", t: "m", pl: "Журналы", d: "Revista" },
    { p: "Музей", t: "m", pl: "Музеи", d: "Museu" },
    { p: "Чай", t: "m", pl: "Чаи", d: "Chá" },
    { p: "Дом", t: "m", pl: "Дома", d: "Casa •" }, // Exceção plural em -A
    { p: "Город", t: "m", pl: "Города", d: "Cidade •" }, // Exceção plural em -A
    { p: "Брат", t: "m", pl: "Братья", d: "Irmão •" }, // Irregular
    { p: "Друг", t: "m", pl: "Друзья", d: "Amigo •" }, // Irregular
    { p: "Словарь", t: "m", pl: "Слоvari", d: "Dicionário" },
    { p: "Парк", t: "m", pl: "Парки", d: "Parque" },
    { p: "Карандаш", t: "m", pl: "Карандаши", d: "Lápis" },
    { p: "Билет", t: "m", pl: "Билеты", d: "Bilhete" },
    { p: "Учитель", t: "m", pl: "Учителя", d: "Professor" },
    { p: "Язык", t: "m", pl: "Языки", d: "Língua/Idioma" },
    { p: "Мальчик", t: "m", pl: "Мальчики", d: "Menino" },

    // --- FEMININOS (f) ---
    { p: "Мама", t: "f", pl: "Мамы", d: "Mãe" },
    { p: "Газета", t: "f", pl: "Газеты", d: "Jornal" },
    { p: "Книга", t: "f", pl: "Книги", d: "Livro" },
    { p: "Песня", t: "f", pl: "Песни", d: "Canção" },
    { p: "Работа", t: "f", pl: "Работы", d: "Trabalho" },
    { p: "Школа", t: "f", pl: "Школы", d: "Escola" },
    { p: "Машина", t: "f", pl: "Машины", d: "Carro" },
    { p: "Дверь", t: "f", pl: "Двери", d: "Porta •" }, // Irregular
    { p: "Подруга", t: "f", pl: "Подруги", d: "Amiga" },
    { p: "Страница", t: "f", pl: "Страницы", d: "Página" },
    { p: "Семья", t: "f", pl: "Семьи", d: "Família" },
    { p: "Тетрадь", t: "f", pl: "Тетради", d: "Caderno •" }, // Irregular
    { p: "Ручка", t: "f", pl: "Ручки", d: "Caneta" },
    { p: "Девочка", t: "f", pl: "Девочки", d: "Menina" },
    { p: "Карта", t: "f", pl: "Карты", d: "Mapa" },

    // --- NEUTROS (n) ---
    { p: "Окно", t: "n", pl: "Окна", d: "Janela" },
    { p: "Море", t: "n", pl: "Моря", d: "Mar" },
    { p: "Пиво", t: "n", pl: "Пива", d: "Cerveja" },
    { p: "Письмо", t: "n", pl: "Письма", d: "Carta" },
    { p: "Здание", t: "n", pl: "Здания", d: "Prédio/Edifício" },
    { p: "Место", t: "n", pl: "Места", d: "Lugar" },
    { p: "Облако", t: "n", pl: "Облака", d: "Nuvem" },
    { p: "Упражнение", t: "n", pl: "Упражнения", d: "Exercício" },
    { p: "Утро", t: "n", pl: "Утра", d: "Manhã" },
    { p: "Фото", t: "n", pl: "Фото", d: "Foto •" }, // Invariável
    { p: "Кино", t: "n", pl: "Кино", d: "Cinema •" }, // Invariável
    { p: "Метро", t: "n", pl: "Метро", d: "Metrô •" }, // Invariável
    { p: "Имя", t: "n", pl: "Имена", d: "Nome •" }, // Irregular
    { p: "Время", t: "n", pl: "Времена", d: "Tempo •" }, // Irregular
    { p: "Дело", t: "n", pl: "Дела", d: "Assunto/Negócio" }
];

let modoAtual = 'p'; // 'p' para principal (singular), 'pl' para plural

// 2. Função de Renderização Única
function renderConteudo() {
    const grid = document.getElementById('grid-container');
    if (!grid) return;

    const lista = [...palavrasTreino].sort(() => Math.random() - 0.5);

    grid.className = "generos-layout";
    // Adicione o ícone de áudio logo antes ou depois do H2
grid.innerHTML = lista.map((item, index) => {
    const palavraExibida = item[modoAtual]; 
    
    return `
        <div class="card-genero" id="gen-${index}" data-answer="${item.t}">
            <div class="audio-icon-genero" onclick="tocarPalavra('${palavraExibida}')">🔊</div>
            <div class="word-info">
                <h2>${palavraExibida}</h2> 
                <span>${modoAtual === 'p' ? item.d : 'Singular: ' + item.p + ' (' + item.d + ')'}</span>
            </div>
            <div class="btn-group-genero">
                <button onclick="verificarGenero('m', '${item.t}', ${index})">M</button>
                <button onclick="verificarGenero('f', '${item.t}', ${index})">F</button>
                <button onclick="verificarGenero('n', '${item.t}', ${index})">N</button>
            </div>
        </div>
    `;
}).join('');
}

// Tocar
window.tocarPalavra = function(texto) {
    const msg = new SpeechSynthesisUtterance(texto);
    msg.lang = 'ru-RU';
    msg.rate = 0.8; // Um tiquinho mais lento para você sacar a pronúncia
    window.speechSynthesis.speak(msg);
}

// 3. Lógica de Clique nas Abas
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Atualiza o modo baseado no data-type do HTML
            modoAtual = tab.getAttribute('data-type'); 
            renderConteudo();
        });
    });

    renderConteudo();
});

// 4. Verificação Única
window.verificarGenero = function(palpite, correto, index) {
    const card = document.getElementById(`gen-${index}`);
    const botoes = card.querySelectorAll('button');
    
    botoes.forEach(btn => btn.classList.remove('selected'));
    const botaoClicado = [...botoes].find(btn => btn.textContent.toLowerCase() === palpite);
    if (botaoClicado) botaoClicado.classList.add('selected');

    card.classList.remove('correct', 'wrong');
    if (palpite === correto) {
        card.classList.add('correct');
        card.style.backgroundColor = cores[correto];
    } else {
        card.classList.add('wrong');
        card.style.animation = 'shake 0.3s';
    }
}

// 4. BOTÃO DE RESET (Ajustado para o ID correto)
const btnReset = document.getElementById('resetBtn') || document.getElementById('resetAll'); 

if (btnReset) {
    btnReset.addEventListener('click', () => {
        // 1. Tenta pegar o modo pela aba que está com a classe 'active'
        const abaAtiva = document.querySelector('.tab.active');
        
        if (abaAtiva) {
            modoAtual = abaAtiva.getAttribute('data-type');
        } else {
            // 2. Fallback caso a aba suma por algum motivo
            modoAtual = 'p'; 
        }

        // 3. Re-renderiza e volta ao topo
        renderConteudo();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}