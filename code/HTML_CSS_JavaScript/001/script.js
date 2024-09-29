const images = [
    {
        src: 'bg1.jpg',
        title: '壮丽的日出',
        content: '体验山脉上的日出美景，完美的一天开始。'
    },
    {
        src: 'bg2.jpg',
        title: '宁静的海滩',
        content: '在宁静的海滩上放松，海浪轻轻拍打沙滩。'
    },
    {
        src: 'bg3.jpg',
        title: '雄伟的森林',
        content: '沉浸在古老森林的郁郁葱葱中，自然和谐地生长。'
    },
    {
        src: 'bg4.jpg',
        title: '星空璀璨',
        content: '凝视迷人的星空，闪烁的星星与宇宙的奇观。'
    }
];

let currentIndex = 0;
const container = document.getElementById('carousel');
const titleElement = document.getElementById('title');
const contentElement = document.getElementById('content');
const descriptionPanel = document.getElementById('description');

function updateCarousel(nextIndex) {
    container.style.backgroundImage = `url(${images[nextIndex].src})`;
    titleElement.innerText = images[nextIndex].title;
    contentElement.innerText = images[nextIndex].content;

    descriptionPanel.classList.remove('visible');
    setTimeout(() => {
        descriptionPanel.classList.add('visible');
    }, 300);
    currentIndex = nextIndex;
}

document.getElementById('next').addEventListener('click', function () {
    const nextIndex = (currentIndex + 1) % images.length;
    updateCarousel(nextIndex);
});

document.getElementById('prev').addEventListener('click', function () {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(prevIndex);
});

setTimeout(() => {
    descriptionPanel.classList.add('visible');
    updateCarousel(currentIndex);
}, 100);