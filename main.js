document.addEventListener('DOMContentLoaded', function () {
    // Elemets DOM
    const addButton = document.getElementById('addItem');
    const placeholders = document.querySelectorAll('.placeholder');

    // Initialization drag
    function initializeDragAndDrop() {
        const items = document.querySelectorAll('.item');

        items.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('dragend', dragEnd);
        });

        placeholders.forEach(placeholder => {
            placeholder.addEventListener('dragover', dragOver);
            placeholder.addEventListener('dragenter', dragEnter);
            placeholder.addEventListener('dragleave', dragLeave);
            placeholder.addEventListener('drop', dragDrop);
        });
    }

    // Function fro drag
    function dragStart(event) {
        event.target.classList.add('hold');
        setTimeout(() => event.target.classList.add('hide'), 0);
    }

    function dragEnd(event) {
        event.target.className = 'item';
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragEnter(event) {
        event.target.classList.add('hovered');
    }

    function dragLeave(event) {
        event.target.classList.remove('hovered');
    }

    function dragDrop(event) {
        event.target.classList.remove('hovered');
        const draggedItem = document.querySelector('.hold');
        if (draggedItem) {
            event.target.appendChild(draggedItem);
        }
    }

    // Create new elemet
    function createNewItem() {
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.setAttribute('draggable', 'true');
        newItem.textContent = '';

        // Adding the print text feature
        newItem.contentEditable = true;
        newItem.focus();

        // Add in firs column by default
        placeholders[0].appendChild(newItem);

        // Initialization drag for new element
        newItem.addEventListener('dragstart', dragStart);
        newItem.addEventListener('dragend', dragEnd);
    }

    // Initialization by upload
    initializeDragAndDrop();

    // The button handler
    addButton.addEventListener('click', createNewItem);
});