function Square() {
    const square = document.getElementById('Square');
    const containerWidth = document.querySelector('.container').clientWidth;
    const containerHeight = document.querySelector('.container').clientHeight;

    const randomX = Math.random() * (containerWidth - square.offsetWidth);
    const randomY = Math.random() * (containerHeight - square.offsetHeight);

    square.style.left = randomX + 'px';
    square.style.top = randomY + 'px';
}

setInterval(Square, 2000);