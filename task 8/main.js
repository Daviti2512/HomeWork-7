const field = document.getElementById('divi');
        const ball = document.getElementById('divi1');
        const step = 10;

        document.addEventListener('keydown', function(event) {
            const ballRect = ball.getBoundingClientRect();
            const fieldRect = field.getBoundingClientRect();

            switch(event.key) {
                case 'ArrowLeft':
                    if (ballRect.left > fieldRect.left) {
                        ball.style.left = ball.offsetLeft - step + 'px';
                    }
                    break;
                case 'ArrowRight':
                    if (ballRect.right < fieldRect.right) {
                        ball.style.left = ball.offsetLeft + step + 'px';
                    }
                    break;
                case 'ArrowUp':
                    if (ballRect.top > fieldRect.top) {
                        ball.style.top = ball.offsetTop - step + 'px';
                    }
                    break;
                case 'ArrowDown':
                    if (ballRect.bottom < fieldRect.bottom) {
                        ball.style.top = ball.offsetTop + step + 'px';
                    }
                    break;
            }
        });