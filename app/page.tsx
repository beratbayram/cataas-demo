"use client";

import { FormEvent, useState } from "react";

// import styles from "./page.module.css";

type Filter = "mono" | "negate" | null;

export default function Home() {
  const [says, setSays] = useState("");
  const [filter, setFilter] = useState<Filter>(null);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const saysValue = formData.get("says-basic") as string;

    setSays(saysValue);
  }

  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    setSays(e.currentTarget.value);
  }

  function handleSelectChange(e: FormEvent<HTMLSelectElement>) {
    const newValue = e.currentTarget.value;

    switch (newValue) {
      case "normal":
        setFilter(null);
        break;
      case "mono":
      case "negate":
        setFilter(newValue);
        break;
      default:
        throw new Error("Invalid filter");
    }
  }

  const url = says
    ? `https://cataas.com/cat/says/${says}`
    : "https://cataas.com/cat";

  const src = new URL(url);
  if (filter) {
    src.searchParams.set("filter", filter);
  }

  return (
    <main>
      <h1>Random Cat</h1>

      <h2>Features</h2>
      <label>
        Filter: <br />
        <select onChange={handleSelectChange}>
          <option>normal</option>
          <option>mono</option>
          <option>negate</option>
        </select>
      </label>

      <fieldset>
        <legend>Says</legend>
        <form onSubmit={handleFormSubmit}>
          <label>
            Basic: <br />
            <input
              type="text"
              name="says-basic"
              placeholder="Enter something..."
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <label>
          Advanced: <br />
          <input
            type="text"
            onChange={handleInputChange}
            name="says-advanced"
            placeholder="Enter something..."
          />{" "}
        </label>{" "}
        <br />
        <strong>Says:</strong> {says}
      </fieldset>

      <h2>Result</h2>
      <img src={src.toString()} alt="Some random cat" width="300" />
    </main>
  );
}
