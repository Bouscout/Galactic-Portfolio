
// small information for the buushido streaming project

import JapanFutur from "../../../assets/panoramas/japan2.webp"
import Nebula from "../../../assets/panoramas/green_nebula.webp"
import DiscordPlanet from "../../../assets/panoramas/discord_planet.webp"
import Akira from "../../../assets/panoramas/akira3.webp"
import RobotExploration from "../../../assets/panoramas/rl_3.webp"
import BigCIty from "../../../assets/panoramas/ai_city_2.webp"

type projectStruct = [string, string, ImageMetadata]

export const BuushidoStreaming : projectStruct = [
    "Media Nexus", // name
    "Explore my streaming website project, where innovation converges with a seamless user experience.", // description
    JapanFutur, // image
]



export const DeepLNumpy : projectStruct = [
    "Numpy Planet",
    "Come observe the internal function of a deep learning network down to the mathematical operation on numpy planet.",
    Nebula
]


export const DiscordBot : projectStruct = [
    "Discordia", // name
    "Explore Discordia where my programmed bot would animate your vocal sessions.", // description
    DiscordPlanet // image
]



export const RecommenderInfos : projectStruct = [
    "Animetropolis", // planetName
    "Navigate Animetropolis, a realm of precision recommendations powered by my robust recommender system, elevating the anime viewing experience.", // description
    Akira, // image
]


export const ReinforcementLearning : projectStruct = [
    "Reinforcera",
    "Experience Reinforceara, where my reinforcement learning project transforms Numpy into a powerful tool for mastering strategic challenges.",
    RobotExploration
]


export const UnityMl : projectStruct = [
    "MarioLand",
    "Comes see the hord of mario learning to play the baril dodger game perfectly in Unity.",
    BigCIty,
]