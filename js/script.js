document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tile').forEach(tile => {
        tile.style.opacity = '0';
        setTimeout(() => {
            tile.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
            tile.style.opacity = '1';
        }, 100);
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
        
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

    // Обработка кликов по плиткам
    document.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('click', () => {
            // Добавить свою логику обработки кликов
            /*alert('Раздел в разработке!');*/
        });
    });

        document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.tile').forEach(tile => {
            const rect = tile.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            tile.style.setProperty('--x', `${x}px`);
            tile.style.setProperty('--y', `${y}px`);
        });
    });

    window.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.server-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateY = Math.min(20, Math.max(-20, (x - rect.width/1.5)/30));
            const rotateX = Math.min(20, Math.max(-20, (y - rect.height/1.5)/30));
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
        });
    });
});

