import Box from "../../symply-ui/components/Box";
import { Grid } from "../../symply-ui/components/Grid";
import { Col, Row } from "../../symply-ui/components/Layout";
import * as Styled from "./styled";
import Goals from "./Goals";
import Mood from "./Mood";
import Todo from "./Todo";
import Diary from "./Diary";

const MainPage = () => {
  return (
    <Styled.PageContent>
      <Styled.PageContent>
        <Col>
          <Row default="12">
            <Box px="md">
              <Goals />
              <Mood />
              <Grid
                col="2"
                screen={{ col: { md: "1" }, gap: { md: "none" } }}
                gap="md"
                align="start"
              >
                <Todo />
                <Diary />
              </Grid>
            </Box>
          </Row>
        </Col>
      </Styled.PageContent>
    </Styled.PageContent>
  );
};

export default MainPage;
