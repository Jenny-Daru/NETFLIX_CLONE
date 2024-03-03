import React from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api";

export default function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return (
    <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}>Home</div>
  );
}
