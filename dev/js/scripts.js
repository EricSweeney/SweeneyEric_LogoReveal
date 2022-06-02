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
    .from("#CircleBlue", {duration: 4, x: -100, y: -100, ease: "power2.inOut"})
    ;

    return tl;

}

function CircleBlur(){
    let tl = gsap.timeline();

    tl
    .from("#CircleBlur", {duration: 3, opacity: 0})
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

mainTL
.add(BlueCircleMove(), "go")
.add(CircleBlur(), "go")
.add(drawCircles())
.add(circleOpacity())
.add(lineStretch(), "ok")
.add(circleMove(), "ok")



