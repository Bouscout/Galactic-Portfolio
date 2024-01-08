// organize all the components of the sidebar
// navbutton
// title
// description
// links

import type { FC, ReactNode } from "react"

interface Props {
    title : string,
    description : string,
    techStack : string[],
    gitLinks : string,
    webLinks : string,
    children : ReactNode
}

export const SideBar:FC<Props> = ({title, description, techStack, gitLinks, webLinks, children}) => {
    return (
        <section className="side-bar">

            {children}

            <h2>{title}</h2>
            
            <div className="tech-stack">
            {techStack.map((tech, i) => {
                return (
                    <h3 key={i}>{tech}</h3>
                    )
            })}
            </div>


            <h4>{description}</h4>

            
            <div className="link-button">
                {webLinks &&
                <VisitButton link={webLinks} name="Website"/>
                }

                {gitLinks &&
                <VisitButton link={gitLinks} name="GitHub"/>
                }
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