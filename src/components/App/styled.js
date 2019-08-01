import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: grey;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  border: 10px solid black;
  border-radius: 50%;
  .selected {
    opacity: 0.5;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media only screen and (max-width: 600px) {
    width: 300px;  
    height: 300px;  
  }
}
`;
export const Red = styled.div`
  border-top-left-radius: 100%;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  flex: 1 1 calc(50% - 10px);
  background-color: red;
  z-index: 5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    opacity: 0.5;
  }
`;
export const Blue = styled.div`
  border-top-right-radius: 100%;
  border-bottom: 5px solid black;
  border-left: 5px solid black;
  z-index: 5;
  flex: 1 1 calc(50% - 10px);
  background-color: blue;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    opacity: 0.5;
  }
`;
export const Yellow = styled.div`
  border-bottom-left-radius: 100%;
  border-top: 5px solid black;
  border-right: 5px solid black;
  flex: 1 1 calc(50% - 10px);
  background-color: yellow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    opacity: 0.5;
  }
`;
export const Green = styled.div`
  border-bottom-right-radius: 100%;
  border-top: 5px solid black;
  border-left: 5px solid black;
  flex: 1 1 calc(50% - 10px);
  background-color: green;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    opacity: 0.5;
  }
`;
export const StartButton = styled.button`
  font-family: Lato;
  margin-top: 24px;
  font-size: 36px;
  border: 10px solid black;
  background-color: white;
`;
export const SoundIcon = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 36px;
  color: white;
`;
export const PlayerMoves = styled.ul`
  list-style: none;
  position: absolute;
  right: 24px;
  font-size: 36px;
`;
export const SimonMoves = styled.ul`
  list-style: none;
  position: absolute;
  left: 24px;
  font-size: 36px;
`;
export const Counter = styled.h2`
  font-size: 64px;
  position: absolute;
  top: -24px;
  left: 48px;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 48px;
    left: 24px;
  }
`;
