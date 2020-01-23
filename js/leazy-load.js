const leazyLoad = target => {
    const options = {
        rootMargin: '50px 0px',
        threshold: 0.01
    };
    const io = new IntersectionObserver((entris, observer) => {
        entris.forEach(entry => {
            // console.log(entry.target);
            if(entry.isIntersecting) {
                const img = entry.target;
                const imgUrl = img.dataset.leazy;

                img.setAttribute('src', imgUrl);

                observer.disconnect();
            }
        })
    }, options);

    io.observe(target);
};

const images = document.querySelectorAll('.section-js img');

images.forEach(image => {
    leazyLoad(image);
})
