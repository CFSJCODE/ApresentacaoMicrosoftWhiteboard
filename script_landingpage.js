document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const presentationCard = document.getElementById('presentation-card');
    
    startButton.addEventListener('click', () => {
        // Adiciona a classe para a animação de saída do card
        presentationCard.classList.remove('fade-in-up');
        presentationCard.classList.add('fade-out-down');

        // Após a animação do card, redireciona para a nova página
        setTimeout(() => {
            // Corrigido para o caminho relativo correto entre pastas irmãs
            window.location.href = '../OQueE/OQueE.html';
        }, 600); // Tempo igual à duração da animação de saída
    });
});

