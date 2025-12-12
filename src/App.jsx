import { useState } from "react";
import { languages } from "./languages";
import "./App.css";

export function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");

  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: Using index is safe because the characters are static and the list will never reorder or update independently.
    <span key={index}>{letter.toUpperCase()}</span>
  ));

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet.split("").map((letter) => (
    <button type="button" key={letter}>
      {letter.toUpperCase()}
    </button>
  ));

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button type="button" className="new-game">
        New Game
      </button>
    </main>
  );
}
