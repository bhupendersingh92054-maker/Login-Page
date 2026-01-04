import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../hero.css";

const hero = () => {

  // const [heroes, setheroes] = useState([])

  const superheroes = [
    {
      name: "Spider Man",
      image: "src/assets/spiderman.jpg",
      description:
        "A young hero with spider-like abilities who protects New York City.",
      tagline: "With great power comes great responsibility.",
    },
    {
      name: "Iron Man",
      image: "src/assets/ironman.jpg",
      description:
        "A genius billionaire who fights evil using advanced armored technology.",
      tagline: "I am Iron Man.",
    },
    {
      name: "Batman",
      image: "src/assets/batman.jpg",
      description:
        "A skilled detective and martial artist who protects Gotham City.",
      tagline: "The Dark Knight of Gotham.",
    },
    {
      name: "Super Man",
      image: "src/assets/superman.jpg",
      description:
        "An alien from Krypton with incredible strength and the power of flight.",
      tagline: "Truth, Justice, and Hope.",
    },
    {
      name: "Wonder Woman",
      image: "src/assets/wonderwomen.jpg",
      description:
        "An Amazon warrior princess with superhuman strength and wisdom.",
      tagline: "Fighting for peace and justice.",
    },
    {
      name: "Captain America",
      image: "src/assets/captainamerica.jpg",
      description:
        "A super-soldier who stands as a symbol of courage and freedom.",
      tagline: "The First Avenger.",
    },
    {
      name: "Black Panther",
      image: "src/assets/blackpanther.jpeg",
      description:
        "The king of Wakanda who uses advanced technology and combat skills.",
      tagline: "Wakanda Forever.",
    },
    {
      name: "Flash",
      image: "src/assets/flash.jpg",
      description:
        "The fastest man alive, capable of moving at incredible speeds.",
      tagline: "Run faster than time.",
    },
    {
      name: "Thor",
      image: "src/assets/thor.jpg",
      description:
        "The Norse god of thunder who wields the powerful hammer Mjölnir.",
      tagline: "The God of Thunder.",
    },
    {
      name: "Hulk",
      image: "src/assets/hulk.jpg",
      description:
        "A scientist who transforms into a powerful green giant when angry.",
      tagline: "Hulk smash!",
    },
  ];

//     


  const [search, setSearch] = useState("");  // store input value
  const [hero, setHero] = useState(null);    // store found hero

  const handleSearch = () => {
    const found = superheroes.find(h => h.name === search); // search by exact name
    setHero(found || null); // if not found, set null
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter hero name"
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {hero ? (
        <div>
          <h1>{hero.name}</h1>
           <img src={hero.image} alt={hero.name} style={{ width: "300px" }} />
          <h2>{hero.tagline}</h2>
          <h3>{hero.description}</h3>
        </div>
      ) : search ? (
        <p>No hero found</p>
      ) : null}
    </div>
  );
};

export default hero;
