document.addEventListener('DOMContentLoaded', function () {
    const btnsArr = document.querySelectorAll('.row-team__team svg');
    btnsArr.forEach(e => {
        e.addEventListener('click', (el) => {
            el.target.closest('svg').classList.toggle('active');
            const info = el.target.closest('.team-item').querySelector('.info');
            if (info.classList.contains('info_active')) {
                info.classList.remove('info_active');
            }
            else {
                info.classList.add('info_active');
            }
        })
    })
});