import React from "react";
import { StateProvider } from "../../context/MemeContext";
import { AppWrapper, Container, MainContent } from "../layout";
import { Title, Icon } from "../global";
import logo from "../../assets/app-icon.svg";
import UploadImage from "./UploadImage";
import TextImage from "./TextImage";
import GenerateImage from "./GenerateImage";

const App = () => {
  return (
    <AppWrapper>
      <Container>
        <Title primary fsize="2" margin="0 0 2rem">
          <Icon src={logo} alt="The MEME Generator" />
          The MEME Generator
        </Title>

        {/* Shared global state from here on */}
        <StateProvider>
          <MainContent>
            <UploadImage />
            <TextImage />
          </MainContent>
          <GenerateImage />
        </StateProvider>
      </Container>
    </AppWrapper>
  );
};

export default App;
