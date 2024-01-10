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
    planetImage : ImageMetadata,
    description  : string,
    techStack : string[],
    details : any[],
    gitLink : string,
    webLink? : string,
}

import BuushidoPage from "../../assets/projects/buushido_website.png"
import BuushidoView from "../../assets/projects/buushido_view_page.png"
import BuushidoFilm from "../../assets/projects/buushido_film_page.png"

import JapanPlanet from "../../assets/planets/japan_planet.webp"

const BuushidoStreaming : projectStruct = {
    index : 0,
    name : "Media Nexus", // name
    shortDescription : "Explore my streaming website project, where innovation converges with a seamless user experience.", // description
    image : JapanFutur, // image
    planetImage : JapanPlanet,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : ["img", BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "JavaScript", "Django", "MySQL", "ReactJs", "RESTApi"],
}


import NumpyInit from "../../assets/projects/numpy_init.png"
import NUmpyTrain from "../../assets/projects/numpy_training.png"

import Jupiter from "../../assets/planets/jupiter.webp"
const DeepLNumpy : projectStruct = {
    index : 1,
    name : "Numpy Planet",
    shortDescription : "Come observe the internal function of a deep learning network down to the mathematical operation on numpy planet.",
    image : Nebula,
    planetImage : Jupiter,
    description : `Introducing the numpy-based deep learning library, a powerful tool that facilitates the creation or importation of deep learning models into lightweight numpy arrays. This unique design enables the models to operate efficiently across a broad spectrum of devices using the cpu processing power.

    Provided a comprehensive insights into all internal mathematical functions, this library allows easy exploration and experimentation with diverse processes beyond conventional deep learning thus equiping you with the essential tools to push the boundaries and explore the expansion of deep learning itself.
    `, 
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : ["img", NumpyInit, NUmpyTrain],
    techStack : ["Python", "Numpy"],
}


import RHome from "../../assets/projects/recommendation_home.png"
import RFeat from "../../assets/projects/recommendation_features.png"
import Rrated from "../../assets/projects/recommendation_rated.png"

import NeonPlanet from "../../assets/planets/neon_planet.webp"

const RecommenderInfos : projectStruct = {
    index : 2,
    name : "Animetropolis", // planetName
    shortDescription : "Navigate Animetropolis, a realm of precision recommendations powered by my robust recommender system, elevating the anime viewing experience.", // description
    image : Akira, // image
    planetImage : NeonPlanet,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : ["img", RHome, RFeat, Rrated],
    techStack : ["Python", "Numpy", "Pandas", "SQL", "Pytorch", "Tensorflow", "Scikit"],
}

import SnakeGif from "../../assets/projects/snake_gif.mp4"
import LunarLanderGif from "../../assets/projects/lunar_lander.mp4"
import CartPoleGif from "../../assets/projects/cart_pole.mp4"

import CyberPlanet from "../../assets/planets/big_city.webp"
const ReinforcementLearning : projectStruct = {
    index : 3,
    name : "Reinforcera",
    shortDescription : "Experience Reinforceara, where my reinforcement learning project transforms Numpy into a powerful tool for mastering strategic challenges.",
    image : RobotExploration,
    planetImage : CyberPlanet ,
    description : `Explore the frontier of reinforcement learning through our project, showcasing some of the most popular RL algorithms meticulously crafted for seamless integration with diverse environments. Designed for researchers and developers alike, this platform offers an intuitive interface for experimenting with intelligent agents.

    The introduction of a numpy deep learning interface, allows the exploration of uncharted avenue in order to experiment in creative ways.`,

    gitLink : "https://github.com/Bouscout/Reinforcement_Learning",
    details : ["video", SnakeGif, LunarLanderGif, CartPoleGif],
    techStack : ["Python", "Numpy", "Pytorch", "Tensorflow", "Pygame", "Gymnasium(openai)"],
}



import SaturnNebula from "../../assets/planets/saturne_green_nebula.webp"

const UnityMl : projectStruct = {
    index : 4,
    name : "MarioLand",
    shortDescription : "Comes see the hord of mario learning to play the baril dodger game perfectly in Unity.",
    image : BigCIty,
    planetImage : SaturnNebula,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : ["img", BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["C#", "Unity", "Unity MLAgents", "Pytorch"],
}


import Discordcloud from "../../assets/planets/cloud_discord.webp"

const DiscordBot : projectStruct = {
    index : 5,
    name : "Discordia", // name
    shortDescription : "Explore Discordia where my programmed bot would animate your vocal sessions.", // description
    image : DiscordPlanet, // image
    planetImage : Discordcloud,
    description : `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`,
    gitLink : "https://github.com/Bouscout/Buushido_Frontend",
    webLink : "https://buushido.com",
    details : ["img", BuushidoPage, BuushidoView, BuushidoFilm],
    techStack : ["Python", "Discord"],
}


export const All_Projects = [
    BuushidoStreaming, DeepLNumpy, RecommenderInfos, ReinforcementLearning,  UnityMl, DiscordBot
]