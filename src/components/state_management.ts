
import { atom } from "nanostores";

export const first_time = atom(true) // first time user landing on the page

export const velocityX = atom(0)
export const velocityY = atom(0)

export const flying = atom(false)

// Project position in space
const initPositions = {
    0 : [0, 500], // anime site
    1 : [500, 4000], // deep learning
    2 : [-550, -1000], // recommender
    3 : [-5000, -3000], // RL
    4 : [1000, 2000], // unity ml
    5 : [0, -2000] // discord
}
export const Positions = atom<{[key : number] : number[]}>(initPositions) 
// Project position in space


// main state
type StateDict = {[key : string] : boolean | number}

const windowState : StateDict = {
    "information" : true,
    "exploration" : false,
    "accessibility" : false,
    "project" : -1,
}
export const GeneralState = atom(windowState)

export const useGeneralState:Function = (state:string | null, index:number = -1) : void => {
    // changing the general state
    if (state){
        const newState : {[key : string] : boolean | number} = {}

        Object.keys(windowState).forEach(key => {
            newState[key] = false
        });

        // set the selected state to true
        newState[state] = true
        newState["project"] = -1

        GeneralState.set(newState)
    }

    // changing the selected project
    else if(index >= 0){
        const newState = {
            ...GeneralState.get()
        }
        newState["project"] = index
        GeneralState.set(newState)
    }
}

// main state


