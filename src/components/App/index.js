import React, { useState } from "react";
import {
  Container,
  SoundIcon,
  Wrapper,
  Red,
  Blue,
  Yellow,
  Green,
  StartButton,
  PlayerMoves,
  SimonMoves
} from "./styled";
import redAudioSource from "../../assets/audios/sound1.mp3";
import blueAudioSource from "../../assets/audios/sound2.mp3";
import yellowAudioSource from "../../assets/audios/sound3.mp3";
import greenAudioSource from "../../assets/audios/sound4.mp3";
function App() {
  const [muted, setMuted] = useState(false);
  const [simon, setSimon] = useState([]);
  const [player, setPlayer] = useState([]);
  const [lose, setLose] = useState(false);
  const [button, setButton] = useState("Start");
  const simonSays = () => {
    if (button === "Start") {
      setButton("Next");
    }
    const randomNumber = Math.floor(Math.random() * 4);
    setSimon(simon.concat(randomNumber));
    setPlayer([]);
  };
  const onColorClick = (name, number) => {
    setPlayer(player.concat(number));
    if (!muted) {
      new Audio(name).play();
    }
    player.map((move, index) => {
      if (move !== simon[index]) {
        setPlayer([]);
        setSimon([]);
        setLose(true);
        setButton("Start");
      }
    });
  };
  return (
    <Container>
      <SoundIcon onClick={() => setMuted(!muted)}>
        <i className={`fas fa-volume-${muted ? "mute" : "up"}`} />
      </SoundIcon>
      <Wrapper>
        <Red onClick={() => onColorClick(redAudioSource, 0)} />
        <Blue onClick={() => onColorClick(blueAudioSource, 1)} />
        <Yellow onClick={() => onColorClick(yellowAudioSource, 2)} />
        <Green onClick={() => onColorClick(greenAudioSource, 3)} />
      </Wrapper>
      <SimonMoves>
        {simon.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </SimonMoves>
      <PlayerMoves>
        {player.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </PlayerMoves>
      <StartButton onClick={simonSays}>{button}</StartButton>
    </Container>
  );
}

export default App;
