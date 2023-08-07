import { useState } from "react";
import BackgroundImg from "./components/BackgroundImg";
import CharacterImg from "./components/CharacterImg";
import TextContainer from "./components/TextContainer";
import QuestionContainer from "./components/QuestionContainer";

import dialogues from "./dialogues.json";

const App = () => {
  const [name, setName] = useState("");
  const [gameState, setGameState] = useState(0);

  function ChangeScene(name) {
    setGameState((gameState) => (gameState += 1));
    setName(name)
   }


  return (
    <div>
      <div onClick={()=>{ChangeScene(name)}}>
        <BackgroundImg img={dialogues[gameState].bg} />
        <CharacterImg img={dialogues[gameState].characterImg} />
        <TextContainer
          text={dialogues[gameState].dialogue}
          character={dialogues[gameState].character}
          name={name}
        />
      </div>
      <QuestionContainer question={dialogues[gameState].question} ChangeScene={ChangeScene}/>
    </div>
  );
};

export default App;
