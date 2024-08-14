var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "1% 90%",
    end:"50% 50%",
    scrub: true,
    // markers : true,

}})

tl.to(".minar",{
    top: "140%",
    left: "5%"
}, 'minar')

tl.to(".flag",{
    top: "160%",
    left: "21%",
    width: "25%"
}, 'minar')

tl.to(".multan",{
    width: "70%",
    top: "190%",
    left: "80%",
    width:"10%"
}, 'minar')

tl.to(".qila",{
    width: "70%",
    top: "199%",
    left: "72%",
    width:"10%"
}, 'minar')

tl.to(".badshahi",{
    width: "70%",
    top: "198%",
    left: "63%",
    width:"10%"
}, 'minar')

tl.to(".faisal",{
    width: "70%",
    top: "196%",
    left: "56%",
    width:"10%"
}, 'minar')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 90%",
    end:"40% 50%",
    scrub: true,
    // markers : true,

}})


tl2.to(".minar",{
    // rotate:"-90deg",
    // right:"4%",
    top : "248%",
    left: '35%',
    width: "25%"

}, "ca")

tl2.to(".multan",{
    top : "243%",
    left: '8%',
    width: "23%"

}, "ca")

tl2.to(".faisal",{
    top : "257%",
    left: '65%',
    width: "21.25%"

}, "ca")

tl2.to(".qila",{
    top : "330%",
    left: '8.6%',
    width: "21.5%"

}, "ca")

tl2.to(".badshahi",{
    top : "330%",
    left: '65%',
    width: "21.25%"

}, "ca")