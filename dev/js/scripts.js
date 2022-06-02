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
function loadingIn(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .from("#Loading-1", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"})
    .from("#Loading-2", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#Loading-3", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    
    .to("#Loading-1", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"})
    .to("#Loading-2", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .to("#Loading-3", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    ;

    return tl;
}

function loadingScale(){
    let tl = gsap.timeline();

    tl
    .from("#LoadingText", {duration: 1, scale: 0, transformOrigin: '50% 50%', opacity: 0, y: 200, ease: "back.out"})
    ;

    return tl;
}

function planetScale(){
    let tl = gsap.timeline();

    tl
    .from("#Sun", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"})
    .from("#SunOrbit", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#SunOrbitTwo", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#SunOrbitThree", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#Planet", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#PlanetTwo", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#PlanetThree", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#Orbit", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#Moon", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#OrbitTwo", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#OrbitTwoTwo", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#MoonTwo", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#MoonTwoTwo", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#OrbitThree", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#OrbitThreeThree", {duration: 0.5, opacity: 0, ease: "back.out"}, "<50%")
    .from("#MoonThree", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#MoonThreeThree", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    ;

    return tl;
}

function moonOrbit(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#Moon", {duration: 2, ease:"none", motionPath:{path:"#Orbit", align: "#Orbit", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    
    ;

    return tl;

}

function moonOrbitTwo(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#MoonTwo", {duration: 2, ease:"none", motionPath:{path:"#OrbitTwo", align: "#OrbitTwo", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

function moonOrbitTwoTwo(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#MoonTwoTwo", {duration: 3, ease:"none", motionPath:{path:"#OrbitTwoTwo", align: "#OrbitTwoTwo", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

function moonOrbitThree(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#MoonThree", {duration: 3, ease:"none", motionPath:{path:"#OrbitThree", align: "#OrbitThree", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

function moonOrbitThreeThree(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#MoonThreeThree", {duration: 4, ease:"none", motionPath:{path:"#OrbitThreeThree", align: "#OrbitThreeThree", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

function sunOrbit(){
    let tl = gsap.timeline({repeat:-1});

    tl
    //.to("SunOrbit", {duration: 4, drawSVG:"0% 100%"})
    .to("#FullPlanet", {duration: 4, ease:"none", motionPath:{path:"#SunOrbit", align: "#SunOrbit", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

function sunOrbitTwo(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#FullPlanetTwo", {duration: 7, ease:"none", motionPath:{path:"#SunOrbitTwo", align: "#SunOrbitTwo", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

function sunOrbitThree(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .to("#FullPlanetThree", {duration: 9, ease:"none", motionPath:{path:"#SunOrbitThree", align: "#SunOrbitThree", start: 0, end:1, alignOrigin:[0.5, 0.5]}}, "begin")
    ;

    return tl;

}

mainTL
.add(loadingScale(), "go")
.add(planetScale(), "go")
.add(loadingIn(), "go")
.add(moonOrbit(), "go")
.add(moonOrbitTwo(), "go")
.add(moonOrbitTwoTwo(), "go")
.add(moonOrbitThree(), "go")
.add(moonOrbitThreeThree(), "go")
.add(sunOrbit(), "go")
.add(sunOrbitTwo(), "go")
.add(sunOrbitThree(), "go")


