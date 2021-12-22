import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from "gatsby"
import {
    navLinks
  } from './layout.module.css'

const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
        flower: file(relativePath: { eq: "flower-mouth.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        fist: file(relativePath: { eq: "fist.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
       
    }
    `)

    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                   <div className="content">
                       <h3>About Me</h3>
                       <p>
                           
                       </p>
                       <div className="btn-row">
                           <Link to ="/work" className={navLinks}>View Series</Link>
                       </div>
                   </div>

                   <div className="images"> 
                        <div className="top-right">
                        <Img fluid={data.fist.childImageSharp.fluid} />
                            </div>   
                        <div className="top-left">
                        <Img fluid={data.flower.childImageSharp.fluid} />
                        </div>
                
                   </div>
                </div>

               
            </div>
            <div className="blackbox"></div>
            <div className="overlay"></div>

           
        </div>
    )
}


export default AboutBlurb