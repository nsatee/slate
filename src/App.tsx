import styled from "styled-components";
import MainPage from "./pages/MainPage";
import { getColor, Theme, getSpace, useTheme } from "./theme";
import Box from "./components/Box";
import { Flex } from "./components/Flex";
import Text from "./components/Text";
import { Button } from "./components/Button";

const MainContainer = styled.div`
  background: ${(props) => getColor(props, "based")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => getColor(props, "background")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const NavWrapper = styled.div`
  max-width: 1200px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => getSpace(props, "sm")};
`;

export const Content = styled(Flex)`
  max-width: 1200px;
`;

const Navigation = () => {
  const theme = useTheme();
  return (
    <NavContainer>
      <NavWrapper>
        <Text.H3>Logo</Text.H3>
        <Flex align="center">
          <Box px="sm" py="sm">
            Home
          </Box>
          <Box px="sm" py="sm">
            Create
          </Box>
          <Button onClick={() => theme.toggle(["light", "dark"])}>
            <Text.H4>{theme.active}</Text.H4>
          </Button>
        </Flex>
      </NavWrapper>
    </NavContainer>
  );
};

function App() {
  return (
    <Theme>
      <MainContainer>
        <Navigation />
        <Content alignSelf="center">
          <MainPage />
        </Content>
      </MainContainer>
    </Theme>
  );
}

export default App;
