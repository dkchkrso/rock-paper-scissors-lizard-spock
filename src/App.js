
import lizard from "./images/icon-lizard.svg";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import spock from "./images/icon-spock.svg";

import "./styles.scss";

function App() {
  return (
    <div className="container">
      <img src={lizard} alt="lizard" />
      <img src={paper} alt="paper" />
      <img src={rock} alt="rock" />
      <img src={scissors} alt="scissors" />
      <img src={spock} alt="spock" />
      <h1>, TE, ST</h1>
      <p>P-tag TEXT</p>
    </div>
  );
}

export default App;
