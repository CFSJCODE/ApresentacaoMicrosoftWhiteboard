document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-btn');
    const aboutCard = document.getElementById('about-card');

    backButton.addEventListener('click', (e) => {
        // Previne o comportamento padrão do link para dar tempo para a animação
        e.preventDefault(); 
        
        const destination = backButton.href;

        // Adiciona a classe da animação de saída
        aboutCard.classList.remove('fade-in-up');
        aboutCard.classList.add('fade-out-down');
        
        // Redireciona para a página inicial após a animação
        setTimeout(() => {
            window.location.href = destination;
        }, 600); // Duração da animação
    });
});
