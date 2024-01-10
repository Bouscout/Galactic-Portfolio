// exit and next and previous buttons

import type { FC } from "react"

interface Props {
    exit : Function,
    next : Function,
    previous : Function,
    position : string,
}

export const NavButtons:FC<Props> = ({ exit, next, previous, position}) => {

    return (
        <>
            <div className="nav-container" >
                <ExitButton func={exit} />

                <h2>{position}</h2>

                <div className="move-button">
                    <PreviousButton func={previous}/>
                    <NextButton func={next}/>
                </div>

            </div>
        </>
    )
}




interface buttonProps {
    func : Function,
}
const ExitButton :FC<buttonProps> = ({func}) => {
    const icon = "fa-solid fa-arrow-left-long"
    return (
        <div className="exit-button">
            <button onClick={()=>{func()}}>
                <i className={icon}></i>
            </button>
            <h4>{"Exit"}</h4>
        </div>
    )
}




const NextButton : FC<buttonProps> = ({func}) => {
    const icon = "fa-solid fa-share"
    return (
        <div className="exit-button">
            <button onClick={()=>{func()}}>
                <i className={icon}></i>
            </button>
            <h4>{"Next"}</h4>
        </div>
    )
}

const PreviousButton : FC<buttonProps> = ({func}) => {
    const icon = "fa-solid fa-reply"
    return (
        <div className="exit-button">
            <button onClick={()=>{func()}}>
                <i className={icon}></i>
            </button>
            <h4>{"Previous"}</h4>
        </div>
    )
}