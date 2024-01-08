// exit and next and previous buttons

import type { FC } from "react"

export const NavButtons:FC = () => {
    const exit = () => {

    }

    const next = () => {

    }

    const previous = () => {

    }


    return (
        <>
            <div className="nav-container">
                <ExitButton func={exit} />

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
    return (
        <div className="exit-button">
            <button onClick={()=>{func(false)}}>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <h4>{"Text"}</h4>
        </div>
    )
}




const NextButton : FC<buttonProps> = ({func}) => {
    const icon = "fa-solid fa-share"
    return (
        <div className="exit-button">
            <button onClick={()=>{func(false)}}>
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
            <button onClick={()=>{func(false)}}>
                <i className={icon}></i>
            </button>
            <h4>{"Previous"}</h4>
        </div>
    )
}