function openGift() {
    const gift = document.querySelector('.gift');
    const surprise = document.querySelector('.surprise');
    gift.classList.remove('hidden');
    setTimeout(() => {
        gift.firstElementChild.style.animation = 'explode 1s forwards';
        setTimeout(() => {
            gift.classList.add('hidden');
            surprise.classList.remove('hidden');
        }, 1000);
    }, 500);
}
