import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [cheats, setCheats] = useState(false);
  const simonSays = () => {
    if (button === "Start") {
      setButton("Next");
    }
    const randomNumber = Math.floor(Math.random() * 4);
    setSimon(simon.concat(randomNumber));
    setPlayer([]);
  };
  function delay() {
    return new Promise(resolve => setTimeout(resolve, 1500));
  }
  function delayLess() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  async function delayedChanged() {
    await delayLess();
    setSelected(null);
  }
  async function delayedSound(move) {
    await delay();
    switch (move) {
      case 0:
        setSelected(move);
        if (!muted) new Audio(redAudioSource).play();
        break;
      case 1:
        setSelected(move);
        if (!muted) new Audio(blueAudioSource).play();
        break;
      case 2:
        setSelected(move);
        if (!muted) new Audio(yellowAudioSource).play();
        break;
      case 3:
        setSelected(move);
        if (!muted) new Audio(greenAudioSource).play();
        break;
      default:
        break;
    }
    delayedChanged();
  }
  const displaySimon = async () => {
    setLoading(true);
    setDisabled(true);
    for (const move of simon) {
      await delayedSound(move);
    }
    setDisabled(false);
    delayedChanged();
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
  useEffect(() => {
    displaySimon();
  }, [simon]);
  useEffect(() => {
    if (player.length === simon.length) {
      setLoading(false);
    }
  }, [player]);
  return (
    <Container>
      <SoundIcon onClick={() => setMuted(!muted)}>
        <i className={`fas fa-volume-${muted ? "mute" : "up"}`} />
      </SoundIcon>
      <Wrapper>
        <Red
          className={selected === 0 ? "selected" : ""}
          onClick={disabled ? null : () => onColorClick(redAudioSource, 0)}
        />
        <Blue
          className={selected === 1 ? "selected" : ""}
          onClick={disabled ? null : () => onColorClick(blueAudioSource, 1)}
        />
        <Yellow
          className={selected === 2 ? "selected" : ""}
          onClick={disabled ? null : () => onColorClick(yellowAudioSource, 2)}
        />
        <Green
          className={selected === 3 ? "selected" : ""}
          onClick={disabled ? null : () => onColorClick(greenAudioSource, 3)}
        />
      </Wrapper>
      {cheats ? (
        <>
          <SimonMoves>
            {simon.map((move, index) => {
              let color = "";
              switch (move) {
                case 0:
                  color = "red";
                  break;
                case 1:
                  color = "blue";
                  break;
                case 2:
                  color = "yellow";
                  break;
                case 3:
                  color = "green";
                  break;
                default:
                  break;
              }
              return <li key={index}>{color}</li>;
            })}
          </SimonMoves>
          <PlayerMoves>
            {player.map((move, index) => {
              let color = "";
              switch (move) {
                case 0:
                  color = "red";
                  break;
                case 1:
                  color = "blue";
                  break;
                case 2:
                  color = "yellow";
                  break;
                case 3:
                  color = "green";
                  break;
                default:
                  break;
              }
              return <li key={index}>{color}</li>;
            })}
          </PlayerMoves>
        </>
      ) : null}
      {loading ? null : <StartButton onClick={simonSays}>{button}</StartButton>}
      <StartButton onClick={() => setCheats(!cheats)}>
        {!cheats ? "Enable Cheats" : "Disable Cheats"}
      </StartButton>
    </Container>
  );
}

export default App;
