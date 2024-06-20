function Color() {
    const colors = ['#4CAF50', '#0000FF', '#FF0000', '#FFFF00'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function create() {
    const container = document.getElementById('divi');
    const rows = container.clientHeight / 50;
    const cols = container.clientWidth / 50;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = Color();
        container.appendChild(square);
    }
}

create();