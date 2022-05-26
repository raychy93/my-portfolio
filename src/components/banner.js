import React, {useRef, useEffect} from "react"
import {gsap} from 'gsap/all'
import InstagramLogo from "../svg/instagram.svg"
import GithubLogo from "../svg/github.svg"
import TwitterLogo from "../svg/twitter.svg"
import { Link } from "gatsby"

import {
    sentence,
    alternative

  } from './layout.module.css'










const Banner = () => {

    const data = [
        {
            sentence: "Rayhan Chowdhury",
            alternative: "Designer, Developer, Digital Artist"
        }
    ];
    


    let refs = [];
    let timelineArr =[];

    const mouseIn = (e, i) => {
        if(timelineArr[i]) {
            timelineArr[i].play();
        }
    };
        
    const mouseOut =(e, i) => {
        if(timelineArr[i]) {
            timelineArr[i].reverse();
        }
    };





 
    
  

    
    

    useEffect(() => {



        refs.map((e, i) => {
          console.log(e);
          gsap.to(e, {duration:1, opacity: 1, scale:.9, ease:"none"});
          const tl = gsap.timeline({ paused: true });
          tl.to(
            e.children[0].children[0].children[1],
            {
              ease: "none",
              attr: { values: "1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 18 -8" }
            },
            "blur"
          )
            .to(
              e.children[0].children[0].children[0],
              {
                ease: "none",
                attr: { stdDeviation: 1.5 }
              },
              "blur"
            )
            .to(
              e.children[1].children[0],
              {
                ease: "none",
                opacity: 0
              },
              0.4
            )
            .to(
              e.children[1].children[1],
              {
                ease: "none",
                opacity: 1
              },
              0
            )
            .to(
              e.children[0].children[0].children[0],
              {
                ease: "none",
                attr: { stdDeviation: 0 }
              },
              0.5
            )
            .to(
              e.children[0].children[0].children[1],
              {
                ease: "none",
                attr: { values: "1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 1 0" }
              },
              0.5
            );
          timelineArr.push(tl);
        });
      }, []);
    
    
    const addRef = (e) => {
        if (e && !refs.includes(e)) {
            refs.push(e);
          }
        };
    
      
    

    return (
        
        <div className="banner">
          
            <div className="container">
                <div className="row">
               
                <div className="side-image-left">
                  

                    </div>
                    <div className="main-text"> 
                    {" "}
                {data.map((data, index) => {
                return (
                   <svg
                    viewBox="0 -1 100 20"
                    preserveAspectRatio="xMinYMid meet"
                    ref={addRef}
                    >
                   <defs>
                      <filter id={`goo-${index}`}>
                        <feGaussianBlur
                          className="feGau"
                          in="SourceGraphic"
                          stdDeviation={0}
                          result="blur"
                        ></feGaussianBlur>
                          <feColorMatrix
                              className="feCol"
                              in="blur"
                              mode="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                              result="goo"
                        ></feColorMatrix>
                        <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                        ></feComposite>
                      </filter>
                    </defs>
                      <g
                          onMouseEnter={(e) => mouseIn(e, index)}
                          onMouseLeave={(e) => mouseOut(e, index)}
                          style={{ filter: `url(#goo-${index})` }}
                        >
                          <text className={sentence} x="0" y="5">
                              {" "}
                            <tspan>{data.sentence}</tspan>
                          </text>
                          <text
                          className={alternative}
                          x="0"
                          y="5"
                          >
                            {" "}
                            <tspan>{data.alternative}</tspan>
                          </text>
                      </g>
                </svg>
                );
              })}{" "}
                          
                          
                          </div>
                          
                      
                          <div className="main-image">
                          
                          </div>
                          <div className="side-image-right">
                        

                          </div>
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            
            </div>
            <div className="fixed-misc">
            <Link to="https://www.instagram.com/" className="ig"><img src={InstagramLogo}></img></Link>
            <br></br>
            <br></br>

            <Link to="https://github.com/raychy93/" className= "gitlogo"><img src={GithubLogo}></img></Link> 
            <br></br>
            <br></br>
            <Link to="https://twitter.com/" className= "twitt"><img src={TwitterLogo}></img></Link>   
            </div>
       
        </div>
    )
}


export default Banner
