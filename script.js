// Adiciona um listener que executa o código quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {

    // 1. Exibir mensagem de boas-vindas na página inicial [cite: 31]
    // Verifica se estamos na página inicial (index.html)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert('Bem-vindo à minha página inicial!');
    }

    // 2. Exibir data e hora atual [cite: 34]
    const datetimeElement = document.getElementById('datetime');
    
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        datetimeElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
    // Atualiza a cada segundo
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Chama uma vez para não esperar 1s


    // 3. Botão que altera o tema do site (claro/escuro) [cite: 33]
    const themeToggle = document.getElementById('theme-toggle');
    
    // Verifica se já existe um tema salvo no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Salva a preferência de tema do usuário
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });


    // 4. Validar o formulário de contato [cite: 32]
    const contactForm = document.getElementById('contact-form');
    
    // Verifica se o formulário existe na página atual
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Previne o envio padrão do formulário
            event.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Trim remove espaços em branco do início e fim
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, preencha todos os campos do formulário.');
            } else {
                alert('Formulário enviado com sucesso!');
                contactForm.reset(); // Limpa o formulário após o envio
            }
        });
    }
});