const addButton = document.querySelector('.addButton');
const modal = document.querySelector('.modal');









addButton.addEventListener('click', () => {
    if (modal.style.display === 'none') {
        modal.style.display = 'grid';
    } else {
        modal.style.display = 'none';
    }
})