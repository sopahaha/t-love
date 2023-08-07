import { useState } from "react";
import "../styles/components/QuestionContainer.sass";

const QuestionContainer = ({ question, ChangeScene }) => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
    console.log(name)
  };


  return (
    <div className={question ? "question-container" : "hide"}>
      <div className="question">
        <h2>{question}</h2>
        <input type="text" onChange={handleInputChange} />
        <button onClick={()=>{ChangeScene(name)}}>Confirmar</button>
      </div>
    </div>
  );
};

export default QuestionContainer;
