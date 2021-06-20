const body = document.querySelector('body');

body.addEventListener('mousemove', (event) => {
    const xCoordinate = event.clientX;
    const yCoordinate = event.clientY;
    const dot = document.createElement('div');

    dot.classList.add('dot');
    dot.style.left = `${xCoordinate}px`;
    dot.style.top = `${yCoordinate}px`;

    body.appendChild(dot);
});



