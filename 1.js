function init(){
const scroller = new LocomotiveScroll({
  el: document.querySelector('#full'),
  smooth: true
})
gsap.registerPlugin(ScrollTrigger);
scroller.on('scroll', ScrollTrigger.update)
ScrollTrigger.scrollerProxy(
  '#full', {
      scrollTop(value) {
          return arguments.length ?
          scroller.scrollTo(value, 0, 0) :
          scroller.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
          return {
              left: 0, top: 0, 
              width: window.innerWidth,
              height: window.innerHeight
          };
      },
      pinType:
      document.querySelector("#full").style.transform ? "transform":"fixed"
  });

ScrollTrigger.addEventListener('refresh', () => scroller.update())
ScrollTrigger.refresh();
}
init();

 




// gsap.to("#second img",{
//     ScrollTrigger:{
//         trigger:"#second",
//         scroller:".smooth-scroll",
//         markers:true,

//         start:"top 60%",
//         stop:"bottom 0%",
//         pin:true,
//         scrub:2
//     },
//     y:"-300%",
//     duration:5,
//     ease: Expo.easeInOut
// })



gsap.to("#second img",{
  ScrollTrigger:{
    trigger:"#second",
    scroller:"#full",
    start: "top top",
    markers:true,
    scrub:2,
    pin:true  
  },
  top:"-50%",
  duration:3,
  ease:Power2.easeInOut,
  onUpdate : ()=>{
    let img = document.querySelector("#second img");
    let imgRect = document.querySelector("#second img").getBoundingClientRect().top;
    let val =Math.floor(imgRect*.07);
    let scrollRange = gsap.utils.mapRange(-9,9,1,2,val);
    img.style.transform = `translate(-50%,0%) scale(${scrollRange} rotate3d(1,1,1,${imgRect*.08}deg))`;
  }
});



gsap.to("#mid .one h2",{
  x:"-100%",
  repeat:-1,
  ease:Linear,
  duration:2
})
gsap.to("#mid .two h2",{
  x:"-100%",
  repeat:-1,
  ease:Linear,
  duration:2
})






var h1=document.querySelector("#thirdpart h1");
h1.addEventListener("click",function(){
  h1.style.color="red";
})

var img1=document.querySelector("#elems #imgx");
img1.addEventListener("mousemove",function(){
  img1.style.opacity=1;
})
var img1=document.querySelector("#elems #imgx");
  img1.addEventListener("mouseout",function(){
    img1.style.opacity=0;
  })


  var img2=document.querySelector("#elems #imgy");
img2.addEventListener("mousemove",function(){
  img2.style.opacity=1;
})
var img2=document.querySelector("#elems #imgy");
  img2.addEventListener("mouseout",function(){
    img2.style.opacity=0;
  })



  var img3=document.querySelector("#elems #imgz");
  img3.addEventListener("mousemove",function(){
    img3.style.opacity=1;
  })
  var img3=document.querySelector("#elems #imgz");
    img3.addEventListener("mouseout",function(){
      img3.style.opacity=0;
    })


    // $('.txt h1').textillate({ in: { effect: 'fadeInUp' } });
    // $('.photu h2').textillate({ in: { effect: 'fadeInUp' } });
    // $('.txt h4').textillate({ in: { effect: 'fadeInUp' } });






  //   var val=document.querySelector("#main").getBoundingClientRect().left;
  //   document.querySelector("#main").addEventListener("scroll",function(){
  //   var newval=document.querySelector("#main").getBoundingClientRect().left;
  //   var skewedval=Math.floor((newval-val)*0.04);
  //   newval=val;
  //   document.querySelectorAll(".photu").forEach(photu=>{
  //     photu.style.transform=`skew(${skewedval}deg)`;
  //   })
  //  })


  //  gsap.to("#fourth h1",{
  //       ScrollTrigger:{
  //           trigger:"#fourth",
  //           scroller:".smooth-scroll",
  //           start:"top 0%",
  //           stop:"bottom 0%",
  //           markers:true,
  //           pin:true,
  //           scrub:2
  //       },
  // textillate({ in: { effect: 'fadeInUp' } });
  //        })



  gsap.to(".texta",{
    ScrollTrigger:{
      trigger:"#fourth",
      scroller:"#full",
      start:"top 60%",
      stop:"bottom 0%",
      markers:true,
      pin:true,
      scrub:2
    },
    opacity:1,
    onStart:function(){
         $('.texta').textillate({ in: { effect: 'fadeInUp' } });
    }
  })



  










