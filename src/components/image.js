const Image =()=> {

    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `)

        return <Img fluid={data.placeholderImage.childImageSharp.fluid} />


}
export default Image