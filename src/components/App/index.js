import React, { useState } from "react";
import {
  Container,
  SoundIcon,
  Wrapper,
  Red,
  Blue,
  Yellow,
  Green,
  StartButton
} from "./styled";
import redAudioSource from "../../assets/audios/sound1.mp3";
import blueAudioSource from "../../assets/audios/sound2.mp3";
import yellowAudioSource from "../../assets/audios/sound3.mp3";
import greenAudioSource from "../../assets/audios/sound4.mp3";
function App() {
  const [muted, setMuted] = useState(false);
  const [simon, setSimon] = useState([]);
  const [player, setPlayer] = useState([]);
  const simonSays = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setSimon(simon.concat(randomNumber));
    setPlayer([]);
    simon.forEach(value => {
      setTimeout(() => {
        console.log(value);
        switch (value) {
          case 0:
            new Audio(redAudioSource).play();
            break;
          case 1:
            new Audio(blueAudioSource).play();
            break;
          case 2:
            new Audio(yellowAudioSource).play();
            break;
          case 3:
            new Audio(greenAudioSource).play();
            break;
          default:
            break;
        }
      }, 1500);
    });
  };
  const onColorClick = (name, number) => {
    if (!muted) {
      return new Audio(name).play();
    }
    setPlayer(player.concat(number));
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
      <StartButton onClick={simonSays}>Start</StartButton>
    </Container>
  );
}

export default App;
