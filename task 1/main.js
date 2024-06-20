document.addEventListener('keydown', function(event) {
    const square = document.getElementById('Square');
    const step = 50;

    let currentX = square.offsetLeft;
    let currentY = square.offsetTop;

    switch(event.key) {
        case 'ArrowLeft':
            currentX -= step;
            break;
        case 'ArrowRight':
            currentX += step;
            break;
        case 'ArrowUp':
            currentY -= step;
            break;
        case 'ArrowDown':
            currentY += step;
            break;
        default:
            return;
    }
   
    const maxX = window.innerWidth - square.offsetWidth;
    const maxY = window.innerHeight - square.offsetHeight;
    currentX = Math.max(0, Math.min(currentX, maxX));
    currentY = Math.max(0, Math.min(currentY, maxY));
    square.style.left = currentX + 'px';
    square.style.top = currentY + 'px';
});