// all projects informations

import JapanFutur from "../../assets/panoramas/japan2.webp"
import Nebula from "../../assets/panoramas/green_nebula.webp"
import DiscordPlanet from "../../assets/panoramas/discord_planet.webp"
import Akira from "../../assets/panoramas/akira3.webp"
import RobotExploration from "../../assets/panoramas/rl_3.webp"
import BigCIty from "../../assets/panoramas/ai_city_2.webp"


interface projectStruct {
    index : number,
    name : string,
    shortDescription : string,
    image : ImageMetadata,
    description  : string,
    techStack : string[],
    details : any[],
    gitLink : string,
    webLink? : string,
}

import BuushidoPage from "../../assets/projects/buushido_website.png"
import BuushidoView from "../../assets/projects/buushido_view_page.png"
import BuushidoFilm from "../../assets/projects/buushido_film_page.png"

const BuushidoStreaming : projectStruct = {
    index : 0,
    name : "Media Nexus", // name
    shortDescription : "Explore my streaming website project, where innovation converges with a seamless user experience.", // description
    image : JapanFutur, // image
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : [BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}



const DeepLNumpy : projectStruct = {
    index : 1,
    name : "Numpy Planet",
    shortDescription : "Come observe the internal function of a deep learning network down to the mathematical operation on numpy planet.",
    image : Nebula,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : [BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}


const RecommenderInfos : projectStruct = {
    index : 2,
    name : "Animetropolis", // planetName
    shortDescription : "Navigate Animetropolis, a realm of precision recommendations powered by my robust recommender system, elevating the anime viewing experience.", // description
    image : Akira, // image
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : [BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}


const ReinforcementLearning : projectStruct = {
    index : 3,
    name : "Reinforcera",
    shortDescription : "Experience Reinforceara, where my reinforcement learning project transforms Numpy into a powerful tool for mastering strategic challenges.",
    image : RobotExploration,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : [BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}




const UnityMl : projectStruct = {
    index : 4,
    name : "MarioLand",
    shortDescription : "Comes see the hord of mario learning to play the baril dodger game perfectly in Unity.",
    image : BigCIty,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : [BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}



const DiscordBot : projectStruct = {
    index : 5,
    name : "Discordia", // name
    shortDescription : "Explore Discordia where my programmed bot would animate your vocal sessions.", // description
    image : DiscordPlanet, // image
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : [BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}


export const All_Projects = [
    BuushidoStreaming, DeepLNumpy, RecommenderInfos, ReinforcementLearning,  UnityMl, DiscordBot
]