const scale = document.getElementById('divi');
const marker = document.getElementById('divi1');
let isDragging = false;

marker.addEventListener('mousedown', function(event) {
    is = true;
    document.body.style.cursor = 'pointer';
});

document.addEventListener('mousemove', function(event) {
    if (is) {
        const scaleRect = scale.getBoundingClientRect();
        let newLeft = event.clientX - scaleRect.left - marker.offsetWidth / 2;
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > scaleRect.width - marker.offsetWidth) {
            newLeft = scaleRect.width - marker.offsetWidth;
        }
        marker.style.left = newLeft + 'px';
    }
});

document.addEventListener('mouseup', function() {
    is = false;
    document.body.style.cursor = 'default';
});
marker.style.left = '200px';