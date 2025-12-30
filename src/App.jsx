import React from "react";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const superheroes = [
    {
      name: "Spider-Man",
      image: "https://example.com/images/spiderman.jpg",
      description:
        "A young hero with spider-like abilities who protects New York City.",
      tagline: "With great power comes great responsibility.",
    },
    {
      name: "Iron Man",
      image: "https://example.com/images/ironman.jpg",
      description:
        "A genius billionaire who fights evil using advanced armored technology.",
      tagline: "I am Iron Man.",
    },
    {
      name: "Batman",
      image: "https://example.com/images/batman.jpg",
      description:
        "A skilled detective and martial artist who protects Gotham City.",
      tagline: "The Dark Knight of Gotham.",
    },
    {
      name: "Superman",
      image: "https://example.com/images/superman.jpg",
      description:
        "An alien from Krypton with incredible strength and the power of flight.",
      tagline: "Truth, Justice, and Hope.",
    },
    {
      name: "Wonder Woman",
      image: "https://example.com/images/wonderwoman.jpg",
      description:
        "An Amazon warrior princess with superhuman strength and wisdom.",
      tagline: "Fighting for peace and justice.",
    },
    {
      name: "Captain America",
      image: "https://example.com/images/captainamerica.jpg",
      description:
        "A super-soldier who stands as a symbol of courage and freedom.",
      tagline: "The First Avenger.",
    },
    {
      name: "Black Panther",
      image: "https://example.com/images/blackpanther.jpg",
      description:
        "The king of Wakanda who uses advanced technology and combat skills.",
      tagline: "Wakanda Forever.",
    },
    {
      name: "Flash",
      image: "https://example.com/images/flash.jpg",
      description:
        "The fastest man alive, capable of moving at incredible speeds.",
      tagline: "Run faster than time.",
    },
    {
      name: "Thor",
      image: "https://example.com/images/thor.jpg",
      description:
        "The Norse god of thunder who wields the powerful hammer Mjölnir.",
      tagline: "The God of Thunder.",
    },
    {
      name: "Hulk",
      image: "https://example.com/images/hulk.jpg",
      description:
        "A scientist who transforms into a powerful green giant when angry.",
      tagline: "Hulk smash!",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
