import React, { useState } from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
// import hero from '../../assets/a-war-of-whispers-bg.jpg';

function Page() {
  const strings = {
    headingGlobal: "Holic Collective",
    subheadingGlobal: "Hello world",
  };

  const [sequence, setSequence] = useState([]);
  const [lastSequence, setLastSequence] = useState("");

  const generateRandomSequence = () => {
    const players = ["blue", "red", "green", "yellow", "brown"];
    let newSequence;

    // To prevent having the same first player consecutively
    do {
      newSequence = [...players].sort(() => Math.random() - 0.5);
    } while (newSequence[0] === (sequence.length > 0 ? sequence[0] : null));

    setLastSequence(JSON.stringify(newSequence));
    setSequence(newSequence);
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.overlay} style={{backgroundImage: `url('dist/${hero}')`}}> */}
      <div className={styles.overlay}>
        <header className={styles.titles}>
          <h1 className={styles["heading--titles"]}>{strings.headingGlobal}</h1>
          <h3 className={styles["subheading--titles"]}>
            {strings.subheadingGlobal}
          </h3>
        </header>
      </div>
      <div className={styles["container--contents"]}>
        <div className={styles.randomizer}>
          <button className={styles.button} onClick={generateRandomSequence}>
            Generate Random Sequence
          </button>
          <ul>
            {sequence.map((player, index) => (
              <h2 key={index}>{player}</h2>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
