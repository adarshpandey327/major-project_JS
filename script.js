const slider = document.querySelector('.slider');

function f(e) {
    const items = document.querySelectorAll('.item'); 
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);

    items.forEach(item => {
        item.style.backgroundSize = 'contains';
    });

    const selectedItem = document.querySelector('.item');
    selectedItem.style.backgroundSize = '150%';
}

document.addEventListener('click', f, false);
