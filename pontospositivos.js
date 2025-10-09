document.addEventListener('DOMContentLoaded', () => {
    const contentCard = document.getElementById('content-card');

    // Função para adicionar animação de saída e navegar
    const navigateWithAnimation = (event) => {
        // Previne o comportamento padrão do link para dar tempo para a animação
        event.preventDefault(); 
        
        const destination = event.currentTarget.href;

        // Adiciona a classe da animação de saída
        contentCard.classList.remove('fade-in-up');
        contentCard.classList.add('fade-out-down');
        
        // Redireciona para a página de destino após a animação
        setTimeout(() => {
            window.location.href = destination;
        }, 600); // Duração da animação
    };

    // Seleciona os botões de navegação
    const prevButton = document.getElementById('prev-btn');
    const homeButton = document.getElementById('home-btn');

    // Adiciona os eventos de clique
    if (prevButton) {
        prevButton.addEventListener('click', navigateWithAnimation);
    }
    if (homeButton) {
        homeButton.addEventListener('click', navigateWithAnimation);
    }
});

