 // page for the extra details of a project
// preferably visual details displayed to the right of the sidebar

import type { FC } from "react"

interface Props {
    images : ImageMetadata[] ,
}

export const ProjectDetails:FC<Props> = ({ images }) => {
    return (
        <section>
            {images.map((image, i) => {
                return (
                    <img key={i} src={image.src} alt="Project Image"></img>
                )
            })}
        </section>
    )
}