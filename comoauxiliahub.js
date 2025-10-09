document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('hub-card');
    const backButton = document.getElementById('back-btn');
    const nextButton = document.getElementById('next-btn');

    const handleNavigation = (event, destination) => {
        // Previne o comportamento padrão do link para dar tempo para a animação
        event.preventDefault(); 
        
        // Adiciona a classe da animação de saída
        card.classList.remove('fade-in-up');
        card.classList.add('fade-out-down');
        
        // Redireciona para a página após a animação
        setTimeout(() => {
            window.location.href = destination;
        }, 600); // Duração da animação
    };

    backButton.addEventListener('click', (e) => {
        handleNavigation(e, backButton.href);
    });

    nextButton.addEventListener('click', (e) => {
        // Se o botão não tiver um link real, apenas previne a ação padrão
        // sem exibir um alerta.
        if (nextButton.getAttribute('href') === '#') {
            e.preventDefault();
            // Opcional: Adicionar um feedback visual de que o botão está desabilitado.
            // Ex: nextButton.style.cursor = 'not-allowed';
        } else {
            handleNavigation(e, nextButton.href);
        }
    });
});
