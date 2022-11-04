$(document).ready(function () {
    console.log('yayy')
    jQuery($ => {
        // The speed of the scroll in milliseconds
        const speed = 1000;

        $('a[href*="#"]')
            .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
            .unbind('click.smoothScroll')
            .bind('click.smoothScroll', event => {
                const targetId = event.currentTarget.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    event.preventDefault();
                    $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
                }
            });
    });

    // scroll proposal left - right
    const container = document.querySelector('.proposalPicsContainer')
    const buttonRight = document.querySelector('.slide-right');
    const buttonLeft = document.querySelector('.slide-left');
    let width = document.querySelector('.proposalPicsContainer img').offsetWidth

    buttonRight.onclick = function () {
        container.scrollLeft += width;
    };
    buttonLeft.onclick = function () {
        container.scrollLeft -= width;
    };

    /*
        const imgs = document.querySelector('.proposalPicsContainer')
       
        const img = document.querySelectorAll('.imgs img')
    
        let idx = 0
        let interval = setInterval(run, 2000);
    
        function run() {
            idx++
            changeImage()
        }
    
        function changeImage() {
            if (idx > img.length - 1) {
                idx = 0
            } else if (idx < 0) {
                idx = img.length - 1
            }
    
            imgs.style.transform = `translateX(${-idx * 500}px)`
        }
    
        function resetInterval() {
            clearInterval(interval)
            interval = setInterval(run, 2000)
        }
    
         rightBtn.addEventListener('click', () => {
            idx++
            changeImage()
            resetInterval()
        })
    
        leftBtn.addEventListener('click', () => {
            idx--
            changeImage()
            resetInterval()
        })
     */










});