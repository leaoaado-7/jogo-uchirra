const videos = document.querySelectorAll('.video-item video');
const overlay = document.getElementById('overlay');

videos.forEach(video => {
    video.addEventListener('click', () => {
        // Adiciona a animação de inflar
        video.classList.add('enlarged');
        video.classList.add('blinking');
        
        // Exibe o overlay escuro
        overlay.style.display = 'block';

        // Remove a animação após 2 segundos para não ficar piscando infinitamente
        setTimeout(() => {
            video.classList.remove('blinking');
        }, 2000);

        // Fecha o overlay quando clicar no fundo escuro
        overlay.addEventListener('click', () => {
            video.classList.remove('enlarged');
            overlay.style.display = 'none';
        });
    });
});
