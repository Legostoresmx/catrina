document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        // y: -100,
        x: -400,  
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        autoAlpha: 0
    }, '-=2')
    .from('.section_1_03', 4, {
        autoAlpha: 0
    }, '-=8')
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
    .from('.section_2_03', 4, {
        // y: -100,
        x: -400,  
        ease: Power3.easeInOut
    }, '-=2')
    .from('.section_2_04', 4, {
        autoAlpha: 0
    }, )
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
    .from('.section_3_03', 4, {
        // y: -100,
        x: -400,  
        ease: Power3.easeInOut
    }, '-=2')
    .from('.section_3_04', 4, {
        autoAlpha: 0
    }, )
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);

    
    let timeline4 = new TimelineMax();
    timeline4
    .to('.section_4_01', 4, {
        y:0,
        ease: Power3.easeInOut
    })
    .to('.section_4_02', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_4_03', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_4_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_4_05', 4, {
        // y: -100,
        x: -400,  
        ease: Power3.easeInOut
    }, '-=2')
    .from('.section_4_06', 4, {
        autoAlpha: 0
    }, )
    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);

   
})