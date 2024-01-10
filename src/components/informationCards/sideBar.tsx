// organize all the components of the sidebar
// navbutton
// title
// description
// links

import type {  FC, ReactNode } from "react"

interface Props {
    title : string,
    description : string,
    techStack : string[],
    gitLinks : string,
    webLinks? : string,
    children : ReactNode,
    image : ImageMetadata,
}

export const SideBar:FC<Props> = ({title, description, techStack, gitLinks, webLinks=null, children, image}) => {

    const inStyle : React.CSSProperties = {
        backgroundImage : `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)) ,url("${image.src}")`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        backgroundRepeat : 'no-repeat', 
    }


    return (
        <section className="side-bar" style={inStyle}>

            {children}

            <h2>{title}</h2>
            
            <div className="tech-stack">
            {techStack.map((tech, i) => {
                const tag = "#"
                return (
                    <h3 key={i}>{tag + tech}</h3>
                    )
            })}
            </div>


            <h4>{description}</h4>

            
            <div className="link-button">
                {webLinks &&
                <VisitButton link={webLinks} name="Website"/>
                }

                <VisitButton link={gitLinks} name="GitHub"/>
                
            </div>
            


        </section>
    )
}

interface Button {
    link : string,
    name : string
}

const VisitButton :FC<Button> = ({link, name}) => {
    return <a href={link}><button role="button">{name}</button></a>
}