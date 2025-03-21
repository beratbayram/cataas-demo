"use client";

import { useEffect, useState } from "react";

async function fetchCatNew() {
  const response = await fetch("https://cataas.com/cat");
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

/*
function fetchCatOld() {
  return fetch("https://cataas.com/cat")
    .then((res) => res.blob())
    .then((blob) => URL.createObjectURL(blob));
}
*/

export default function Home() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchCatNew().then((url) => setUrl(url));
    // fetchCatOld().then((url) => setUrl(url));
  }, []);

  /*
  useEffect(() => {
    fetch("https://cataas.com/cat")
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setUrl(url);
      });
  }, []);
  */

  return (
    <main>
      <h1>Random Cat</h1>
      {url ? <img src={url} alt="Random Cat" /> : <p>Loading...</p>}
    </main>
  );
}
