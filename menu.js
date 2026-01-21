async function loadMenu() {
    try {
        const response = await fetch('menu.html');
        const html = await response.text();
        document.getElementById('menu-container').innerHTML = html;

        // Após carregar o HTML, inicializamos os eventos
        initMenuEvents();
    } catch (err) {
        console.error("Erro ao carregar o menu:", err);
    }
}

function initMenuEvents() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (!menuToggle || !sidebar || !overlay) return;

    const toggleMenu = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Fecha ao clicar nos links
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
}

// Inicia o processo
loadMenu();