import moon from "../assets/3D-texture/moon.jpg";
import mars from "../assets/3D-texture/mars.jpg";
import europa from "../assets/3D-texture/europa.jpg";
import titan from "../assets/3D-texture/titan.jpg";

const Data = [
  {
    id: 0,
    image: [moon, mars, europa, titan],
    title: ["moon", "mars", "europa", "titan"],
    des: [
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    ],
    distence: ["384,400 km", "225 MIL. km", "628 MIL. km", "1.6 BIL. km"],
    time: ["3 days", "9 months", "3 years", "7 years"]
  }
];

export default Data;
