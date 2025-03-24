document.addEventListener('DOMContentLoaded', function() {
    const albumImg = document.getElementById('album-img');
    const listItems = document.querySelectorAll('.list-group-item');

    listItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const albumSrc = item.getAttribute('data-album');

            albumImg.src = `./imagens/${albumSrc}`;

            document.body.style.backgroundImage = `url(./imagens/${albumSrc})`;

            listItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
