import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap/all'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {SlowMo} from 'gsap/EasePack' 




gsap.registerPlugin(SlowMo);


gsap.registerPlugin(ScrollTrigger);
    

function Rando() {

    let dinsee = useRef(null);
    let dindu = useRef(null);

    useEffect(() => {
 
        const tu= gsap.timeline( {

            scrollTrigger: {
                trigger: dindu,
                start: "+=100 80%",
                end: "+= 200 40%",
                scrub: true,
                markers: true,
                toggleActions: "play reverse play reverse",
            }


        });

        const tl = gsap.timeline( {

            scrollTrigger: {
                trigger: dinsee,
                start: "+=100 80%",
                end: "+= 200 10%",
                scrub:true,
                markers: true,
                toggleActions: "play reverse play reverse",
            }


        });

       

        tu.to(dindu, {y: 10, duration:1, opacity:1, ease:"none"});
        tu.to(dindu, {duration:1, opacity:0, ease:"slow(0.5,0.3)"});

        

        tl.to(dinsee, {y: 50, duration:1, opacity:1, ease:"slow(0.3,0.3)"})
        tl.to(dinsee, {duration:1, opacity:0, ease:"slow(0.5,0.3)"});


    });

    
    return (
        <div className="test">
            <div className="what" >
                <div className="jax" ref={el=>dindu= el}> 
                    About Me
                </div>
            </div>
            <div className="inner">
                <div className="aboutit" >
                <p id="split" class="split-text" ref={el=>dinsee= el}>
                    Hello, I'm Ray. A <span id="tobold">Front End/Full-Stack/Software Developer </span> based in Kitchener-Waterloo. I <span id="tobold">specialize</span><br></br> in creating <span id="tobold">interactive experiences</span> and <span id="tobold">functional interfaces</span> using <span id="tobold">React</span>. 
                    Beyond that, I'm also an avid <span id="tobold"> NFT/Digital Artist.</span> Come check out my work.
                </p>
                </div>
            </div>
            
          
        </div>
    )
}


export default Rando