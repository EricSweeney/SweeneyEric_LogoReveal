import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { MotionPathHelper } from "gsap/MotionPathHelper";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

const mainTL = gsap.timeline({delay: 0.5});

mainTL
//.from("#Ring-4", {duration: 0.4, transformOrigin: '50% 50%', scale: 0, opacity: 0, ease: "back.out(1)"})

//.from("#Planet-1", {duration: 0.3, transformOrigin: '50% 50%', scale: 0, ease: "elastic.out(1)", y: -600})

//.from("#Rectangle-right", {duration: 2, drawSVG:"0% 100%"})

function BlueCircleMove(){
    let tl = gsap.timeline();

    tl
    .from("#CircleBlue", {duration: 5, x: -100, y: -100, ease: "power2.inOut"})
    ;

    return tl;

}

function CircleBlur(){
    let tl = gsap.timeline();

    tl
    .from("#CircleBlur", {duration: 4, opacity: 0})
    .to("#CircleBlur", {duration: 0.5, scale: 1.02, transformOrigin: '100% 100%', ease: "power2.inOut"})
    .to("#CircleBlur", {duration: 0.5, scale: 1, transformOrigin: '100% 100%', ease: "power2.inOut"}, "go")
    .to("#CircleBlur", {duration: 1.5, opacity: 0}, "go")
    ;

    return tl;

}

function drawCircles(){
    let tl = gsap.timeline();

    tl
    .fromTo("#CircleOneBottom", {drawSVG:"100% 100%"}, {duration: 0.5, drawSVG: "0% 100%", ease:"none"})
    .fromTo("#CircleTwoTop", {drawSVG:"100% 100%"}, {duration: 0.25, drawSVG: "0% 100%", ease:"none"})
    .fromTo("#CircleThreeBottom", {drawSVG:"100% 100%"}, {duration: 0.375, drawSVG: "0% 100%", ease:"none"})
    .from("#CircleThreeTop", {duration: 0.375, drawSVG: 0, ease:"none"})
    .from("#CircleTwoBottom", {duration: 0.25, drawSVG: 0, ease:"none"})
    .from("#CircleOneTop", {duration: 0.5, drawSVG: 0, ease:"none"})
    ;

    return tl;

}

function circleOpacity(){
    let tl = gsap.timeline();

    tl
    .from("#CircleOne", {duration: 0.001, opacity: 0}, "go")
    .from("#CircleTwoFull", {duration: 0.001, opacity: 0}, "go")
    .from("#CircleThreeFull", {duration: 0.001, opacity: 0}, "go")

    .to("#CircleOneTop", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleTwoTop", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleThreeTop", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleOneBottom", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleTwoBottom", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleThreeBottom", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleBlue", {duration: 0.001, opacity: 0}, "now")
    .to("#CircleWhiteFill", {duration: 0.001, opacity: 0}, "now")
    ;

    return tl;

}

function circleMove(){
    let tl = gsap.timeline();

    tl
    .to("#CircleOne", {duration: 1, x: -23, ease:"power2.inOut"}, "go")
    .to("#CircleThreeFull", {duration: 1, x: 23, ease:"power2.inOut"}, "go")
    ;

    return tl;

}

function lineStretch(){
    let tl = gsap.timeline();

    tl
        //.from("#MiddleLine", {duration: 1, drawSVG: 0, ease:"power2.out"})
        .from("#MiddleLine", {duration: 1, scaleX: 0, transformOrigin: "50% 50%"})
    ;

    return tl;

}

function lineAppear(){
    let tl = gsap.timeline();

    tl
        //.from("#MiddleLine", {duration: 1, drawSVG: 0, ease:"power2.out"})
        .from("#Line1", {duration: 0.3, opacity: 0})
        .from("#Line2", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line3", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line4", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line5", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line6", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line7", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line8", {duration: 0.3, opacity: 0}, "<50%")
        .from("#Line9", {duration: 0.3, opacity: 0}, "<50%")
    ;

    return tl;

}

function wordAppear(){
    let tl = gsap.timeline();

    tl
        //.from("#MiddleLine", {duration: 1, drawSVG: 0, ease:"power2.out"})
        .to("#Line1", {duration: 0.2, opacity: 0})
        .to("#Line1", {duration: 0.2, opacity: 1})
        .to("#Line1", {duration: 0.2, opacity: 0})
        .to("#Line1", {duration: 0.2, opacity: 1})
        .from("#N", {duration: 0.01, opacity: 0})
        .to("#Line1", {duration: 0.2, opacity: 0})

        .to("#Line2", {duration: 0.2, opacity: 0})
        .to("#Line2", {duration: 0.2, opacity: 1})
        .from("#O", {duration: 0.01, opacity: 0})
        .to("#Line2", {duration: 0.2, opacity: 0})

        .to("#Line3", {duration: 0.2, opacity: 0})
        .to("#Line3", {duration: 0.2, opacity: 1})
        .from("#R", {duration: 0.01, opacity: 0})
        .to("#Line3", {duration: 0.2, opacity: 0})

        .to("#Line4", {duration: 0.2, opacity: 0})
        .to("#Line4", {duration: 0.2, opacity: 1})
        .from("#T", {duration: 0.01, opacity: 0})
        .to("#Line4", {duration: 0.2, opacity: 0})

        .to("#Line5", {duration: 0.2, opacity: 0})
        .to("#Line5", {duration: 0.2, opacity: 1})
        .from("#H", {duration: 0.01, opacity: 0})
        .to("#Line5", {duration: 0.2, opacity: 0})

        .to("#Line6", {duration: 0.2, opacity: 0})
        .to("#Line6", {duration: 0.2, opacity: 1})
        .from("#L", {duration: 0.01, opacity: 0})
        .to("#Line6", {duration: 0.2, opacity: 0})

        .to("#Line7", {duration: 0.2, opacity: 0})
        .to("#Line7", {duration: 0.2, opacity: 1})
        .from("#A", {duration: 0.01, opacity: 0})
        .to("#Line7", {duration: 0.2, opacity: 0})

        .to("#Line8", {duration: 0.2, opacity: 0})
        .to("#Line8", {duration: 0.2, opacity: 1})
        .from("#N2", {duration: 0.01, opacity: 0})
        .to("#Line8", {duration: 0.2, opacity: 0})

        .to("#Line9", {duration: 0.2, opacity: 0})
        .to("#Line9", {duration: 0.2, opacity: 1})
        .from("#E", {duration: 0.01, opacity: 0})
        .to("#Line9", {duration: 0.2, opacity: 0})
    ;

    return tl;

}

mainTL
.from("#CircleWhiteFill", {duration: 2, scale: 0, transformOrigin: "50% 50%", opacity: 0, ease:"power2.out"})
.add(BlueCircleMove(), "go")
.add(CircleBlur(), "go")
.from("#logo", {duration: 2, transformOrigin: "50% 50%", x: 50, ease:"power2.inOut"})
.add(drawCircles())
.add(circleOpacity())
.add(lineStretch(), "ok")
.add(circleMove(), "ok")
.to("#logo", {duration: 1, scale: 0.8, y: -50, transformOrigin: "50% 50%", ease:"power2.inOut"})
.add(lineAppear())
.add(wordAppear())
.to("#name", {duration: 1, scale: 0.8, transformOrigin: "50% 50%", ease:"power2.inOut"})



