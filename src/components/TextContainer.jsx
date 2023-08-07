import "../styles/components/TextContainer.sass";

const TextContainer = ({ text, character, name }) => {


  return (
    <div className="text-container">
      <div
        className={character === "narrador" ? "hide" : "text-container-name"}
      >
        <h2>{character}</h2>
      </div>
      <div className="text-container-content">
        {text == "É um prazer, " ? <p>{text + name + "."}</p> : <p>{text}</p>}
      </div>
    </div>
  );
};

export default TextContainer;
