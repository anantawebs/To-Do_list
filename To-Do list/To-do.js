document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.todo_chk');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const todoItem = this.closest('.todo');
            const todoContainer = todoItem.parentNode;

            if (this.checked) {
                todoItem.classList.add('completed');
                todoContainer.appendChild(todoItem);
            } else {
                todoItem.classList.remove('completed');
                todoContainer.insertBefore(todoItem, todoContainer.firstChild);
            }
        });
    });
});
