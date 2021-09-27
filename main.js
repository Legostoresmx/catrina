document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        // y: -100,
        x: -400,
        ease: Power3.easeInOut
    })
    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);
    
    let timeline2 = new TimelineMax();
    timeline2
    .to('.section_2_01', 4, {
        y:0,
        ease: Power3.easeInOut
    })
    .to('.section_2_02', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

    
    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 4, {
        y:0,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);

   
})