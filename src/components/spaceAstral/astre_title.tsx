// title for the astral object
import {type FC, useState, useEffect} from "react"

interface Props{
    title : string
}

export const CriptedTitle : FC<Props> = ({title}) => {
    const size = title.length
    const duration = 1500 // in ms
    const [text, setText] = useState("")

    const getRandomCharacter = () => {
        const characters = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
      };    

    const getRandomText = () => {
        let randomText = ""
        for (let index = 0; index < size; index++) {
            randomText += getRandomCharacter()
        }
        return randomText
    };
    
    useEffect(() => {
        setTimeout(() => {
          setText(title);
        }, duration);
        
        const delay = duration / size

        let currentIndex = 0;
        const intervalId = setInterval(() => {
          let randomText = getRandomText();
          setText((prevText) => {
            // Keep characters that are already revealed
            const revealedText = title.slice(0, currentIndex);
            currentIndex += 1;
            return revealedText + randomText.slice(currentIndex);
          });
    
          if (currentIndex === size) {
            clearInterval(intervalId);
          }
        }, delay);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [title]);
  
    return (
        <>
        <h2 className="crypted-title">{text}</h2>
        </>
    )
}