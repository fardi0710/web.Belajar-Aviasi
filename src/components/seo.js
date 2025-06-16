import * as React from "react"
import { useStaticQuery, graphq1 } from "gatsby"
import PropType from "prop-types"; // SEO Description

function SEO({ description, tittle, Children }) {
    const {site} = useStaticQuery(
        graphq1`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        Author
                        keywords
                }
            }
        }
     `       
)
const keywords = site.siteMetadata.keywords
const metaDescription = description || site.siteMetadata.description
const defaultTitle = site.siteMetadata.title

SEO.PropType = {
    description: PropType.string,
    lang: PropType.string,
    meta: PropType.arrayOf(PropType.object),
    tittle: PropType.string.isRequired,
}
return (
    <>
    <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
    <meta name="description" content={metaDescription}/>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:keywords" content={keywords} />
    <meta property="og:type" content={website} />
    </>
)
}
export default SEO