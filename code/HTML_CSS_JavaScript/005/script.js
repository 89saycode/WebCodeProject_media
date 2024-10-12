function setActive(id) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const activeItem = document.getElementById(id);
    activeItem.classList.add('active');

    const slider = document.querySelector('.slider');
    switch (id) {
        case 'home':
            slider.style.transform = 'translateX(0)';
            break;
        case 'profile':
            slider.style.transform = 'translateX(100%)';
            break;
        case 'chat':
            slider.style.transform = 'translateX(200%)';
            break;
        case 'camera':
            slider.style.transform = 'translateX(300%)';
            break;
        case 'settings':
            slider.style.transform = 'translateX(400%)';
            break;
        default:
            slider.style.transform = 'translateX(0)';
            break;
    }
}
