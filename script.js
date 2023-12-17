function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

loco();

function navBlur(){
    document.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector(".main nav");
        var scrollThreshold = 100; // Adjust this value based on when you want the blur to start
    
        function checkScroll() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add("blur");
            } else {
                header.classList.remove("blur");
            }
        }
    
        window.addEventListener("scroll", checkScroll);
    });
}

navBlur();

function hoverAnimation(){
    document.querySelector('.nav-link-1').addEventListener('mouseenter',()=>{
        document.querySelector('.hov-div-1').style.top = '0%';
    })
    document.querySelector('.nav-link-1').addEventListener('mouseleave',()=>{
        document.querySelector('.hov-div-1').style.top = '100%';
    })
    
    document.querySelector('.nav-link-2').addEventListener('mouseenter',()=>{
        document.querySelector('.hov-div-2').style.top = '0%';
    })
    document.querySelector('.nav-link-2').addEventListener('mouseleave',()=>{
        document.querySelector('.hov-div-2').style.top = '100%';
    })
    
    document.querySelector('.nav-link-3').addEventListener('mouseenter',()=>{
        document.querySelector('.hov-div-3').style.top = '0%';
    })
    document.querySelector('.nav-link-3').addEventListener('mouseleave',()=>{
        document.querySelector('.hov-div-3').style.top = '100%';
    })
    
    document.querySelector('.nav-link-4').addEventListener('mouseenter',()=>{
        document.querySelector('.hov-div-4').style.top = '0%';
    })
    document.querySelector('.nav-link-4').addEventListener('mouseleave',()=>{
        document.querySelector('.hov-div-4').style.top = '100%';
    })
    
}

hoverAnimation();

function navAnimation(){
    document.querySelector('.nav-link-1').addEventListener('mouseenter',()=>{
        var menu =  document.querySelector('.dropdown-menu');
        document.querySelector('nav').style.backgroundColor = "white";
        document.querySelector('.nav-link-2').style.color = 'black';
        document.querySelector('.nav-link-3').style.color = 'black';
        document.querySelector('.nav-link-4').style.color = 'black';
        document.querySelector('.nav-part2 h3').style.color = 'black';
        document.querySelector('.nav-part3 h3').style.color = "black";
        document.querySelector('.login').style.color = "black";
        gsap.to(menu,{
            height: "250px",
            duration: 0.4,
            ease: "power1.inOut",
        })
    
        menu.addEventListener('mouseover',()=>{
            gsap.to(menu,{
                height: "250px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })
        menu.addEventListener('mouseleave',()=>{
            gsap.to(menu,{
                height: "0px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })  
    })
    
    document.querySelector('.nav-link-1').addEventListener('mouseleave',()=>{
        var menu =  document.querySelector('.dropdown-menu');
        document.querySelector('nav').style.backgroundColor = "transparent";
        document.querySelector('.nav-link-2').style.color = 'white';
        document.querySelector('.nav-link-3').style.color = 'white';
        document.querySelector('.nav-link-4').style.color = 'white';
        document.querySelector('.nav-part2 h3').style.color = 'white';
        document.querySelector('.nav-part3 h3').style.color = "white";
        document.querySelector('.login').style.color = "white";
        gsap.to(menu,{
            height: "0px",
            duration: 0.3,
            ease: "power1.inOut",
        });
    })
    
    document.querySelector('.nav-link-2').addEventListener('mouseenter',()=>{
        var menu =  document.querySelector('.dropdown-menu2');
        document.querySelector('nav').style.backgroundColor = "white";
        document.querySelector('.nav-link-1').style.color = 'black';
        document.querySelector('.nav-link-3').style.color = 'black';
        document.querySelector('.nav-link-4').style.color = 'black';
        document.querySelector('.nav-part2 h3').style.color = 'black';
        document.querySelector('.nav-part3 h3').style.color = "black";
        document.querySelector('.login').style.color = "black";
        gsap.to(menu,{
            height: "250px",
            duration: 0.4,
            ease: "power1.inOut",
        })
    
        menu.addEventListener('mouseover',()=>{
            gsap.to(menu,{
                height: "250px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })
        menu.addEventListener('mouseleave',()=>{
            gsap.to(menu,{
                height: "0px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })  
    })
    
    document.querySelector('.nav-link-2').addEventListener('mouseleave',()=>{
        var menu =  document.querySelector('.dropdown-menu2');
        document.querySelector('nav').style.backgroundColor = "transparent";
        document.querySelector('.nav-link-1').style.color = 'white';
        document.querySelector('.nav-link-3').style.color = 'white';
        document.querySelector('.nav-link-4').style.color = 'white';
        document.querySelector('.nav-part2 h3').style.color = 'white';
        document.querySelector('.nav-part3 h3').style.color = "white";
        document.querySelector('.login').style.color = "white";
        gsap.to(menu,{
            height: "0px",
            duration: 0.3,
            ease: "power1.inOut",
        });
    })
    
    document.querySelector('.nav-link-3').addEventListener('mouseenter',()=>{
        var menu =  document.querySelector('.dropdown-menu3');
        document.querySelector('nav').style.backgroundColor = "white";
        document.querySelector('.nav-link-1').style.color = 'black';
        document.querySelector('.nav-link-2').style.color = 'black';
        document.querySelector('.nav-link-4').style.color = 'black';
        document.querySelector('.nav-part2 h3').style.color = 'black';
        document.querySelector('.nav-part3 h3').style.color = "black";
        document.querySelector('.login').style.color = "black";
        gsap.to(menu,{
            height: "250px",
            duration: 0.4,
            ease: "power1.inOut",
        })
    
        menu.addEventListener('mouseover',()=>{
            gsap.to(menu,{
                height: "250px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })
        menu.addEventListener('mouseleave',()=>{
            gsap.to(menu,{
                height: "0px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })  
    })
    
    document.querySelector('.nav-link-3').addEventListener('mouseleave',()=>{
        var menu =  document.querySelector('.dropdown-menu3');
        document.querySelector('nav').style.backgroundColor = "transparent";
        document.querySelector('.nav-link-1').style.color = 'white';
        document.querySelector('.nav-link-2').style.color = 'white';
        document.querySelector('.nav-link-4').style.color = 'white';
        document.querySelector('.nav-part2 h3').style.color = 'white';
        document.querySelector('.nav-part3 h3').style.color = "white";
        document.querySelector('.login').style.color = "white";
        gsap.to(menu,{
            height: "0px",
            duration: 0.3,
            ease: "power1.inOut",
        });
    })

    document.querySelector('.nav-link-4').addEventListener('mouseenter',()=>{
        var menu =  document.querySelector('.dropdown-menu4');
        document.querySelector('nav').style.backgroundColor = "white";
        document.querySelector('.nav-link-1').style.color = 'black';
        document.querySelector('.nav-link-2').style.color = 'black';
        document.querySelector('.nav-link-3').style.color = 'black';
        document.querySelector('.nav-part2 h3').style.color = 'black';
        document.querySelector('.nav-part3 h3').style.color = "black";
        document.querySelector('.login').style.color = "black";
        gsap.to(menu,{
            height: "250px",
            duration: 0.4,
            ease: "power1.inOut",
        })
    
        menu.addEventListener('mouseover',()=>{
            gsap.to(menu,{
                height: "250px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })
        menu.addEventListener('mouseleave',()=>{
            gsap.to(menu,{
                height: "0px",
                duration: 0.4,
                ease: "power1.inOut",
            }); 
        })  
    })
    
    document.querySelector('.nav-link-4').addEventListener('mouseleave',()=>{
        var menu =  document.querySelector('.dropdown-menu4');
        document.querySelector('nav').style.backgroundColor = "transparent";
        document.querySelector('.nav-link-1').style.color = 'white';
        document.querySelector('.nav-link-2').style.color = 'white';
        document.querySelector('.nav-link-3').style.color = 'white';
        document.querySelector('.nav-part2 h3').style.color = 'white';
        document.querySelector('.nav-part3 h3').style.color = "white";
        document.querySelector('.login').style.color = "white";
        gsap.to(menu,{
            height: "0px",
            duration: 0.3,
            ease: "power1.inOut",
        });
    })
}

navAnimation();

function scrollAnimation(){
    gsap.to('.scroll-icon i',{
        y: "100%",
        delay: 2,
        duration: 0.6,
        repeat:-1,
        yoyo:true,
    })
}

scrollAnimation();

function entireAnimation(){
    var tl = gsap.timeline();

    tl.to('.main nav',{
        opacity: 1,
        duration: 1,
    },"start")
    tl.to('.page1',{
        opacity: 1,
        duration: 0.5,
    },"start")
    tl.to('.top-left-1 span',{
        y:"0",
        opacity: 1,
        stagger: 0.17,
    },"up")
    tl.to('.top-left-2 p',{
        y:"0",
        opacity: 1,
        stagger: 0.17,
    },"up")
    tl.to('.box',{
        opacity: 1,
    })
    tl.to('.box-text span',{
        y:"0",
        opacity: 1,
        stagger: 0.17,
    })
    tl.to('.bottom-right span',{
        y:"0",
        opacity: 1,
        stagger: 0.17, 
    },"up")
    tl.to('.bottom-left p',{
        y:"0",
        opacity: 1,
        stagger: 0.17, 
    },"up")
}

entireAnimation();

function addAnimation() {
    const scroller = document.querySelector('.img-container');
    const scrollerContent = Array.from(scroller.children);
    
    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scroller.appendChild(duplicatedItem);
    })
}

// addAnimation();


