import { Bar } from "./Bar";
import { Scatter } from "./Scatter";
import { useState } from "react";
import styles from "./Charts.module.css";

export const Main = () => {
  const [option, setOption] = useState("scatter");

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <h3 onClick={() => setOption("scatter")}>Scatter Plot</h3>
        <h3 onClick={() => setOption("bar")}>Bar Chart</h3>
      </div>

      {option == "scatter" ? <Scatter /> : <Bar />}
    </div>
  );
};
