const container = document.getElementById('divi');
        const square = document.getElementById('divi1');

        container.addEventListener('mousemove', (event) => {
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left - square.offsetWidth / 2;
            const y = event.clientY - rect.top - square.offsetHeight / 2;

            square.style.left = `${x}px`;
            square.style.top = `${y}px`;
            square.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            square.style.display = 'none';
        });