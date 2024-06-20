document.addEventListener('DOMContentLoaded', () => {
    const computer = document.getElementById('computer');
    const browserIcons = document.querySelectorAll('.divi-icon');

    browserIcons.forEach(icon => {
        icon.addEventListener('dragstart', Start);
    });

    computer.addEventListener('dragover', Over);
    computer.addEventListener('drop', drop);

    function Start(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function Over(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const icon = document.getElementById(data);
        
        const clone = icon.cloneNode(true);
        clone.id = 'swallowing-icon';
        computer.appendChild(clone);

        setTimeout(() => {
            clone.style.top = '50%';
            clone.style.left = '50%';
            clone.style.transform = 'translate(-50%, -50%) scale(0.1)';
        }, 10);
        setTimeout(() => {
            clone.remove();
            icon.remove(); 
        }, 2000);
    }
});
