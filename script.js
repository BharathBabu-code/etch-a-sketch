const container = document.querySelector('#grid-container');
const resizeBtn = document.querySelector('#resize-btn');

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = 100 / size;

    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        let interactionCount = 0;

        square.addEventListener('mouseenter', () => {
            if (interactionCount === 0) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }

            if (interactionCount < 10) {
                interactionCount++;
                square.style.opacity = interactionCount * 0.1;
            }
        });

        container.appendChild(square);
    }
}

resizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (maximum 100):');
    
    if (newSize !== null) {
        newSize = parseInt(newSize);
        // Validate user input to prevent browser freezing
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert('Please enter a valid number between 1 and 100.');
        } else {
            createGrid(newSize);
        }
    }
});
createGrid(16);