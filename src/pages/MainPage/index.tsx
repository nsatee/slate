import React from "react";
import styled from "styled-components";
import Box from "../../components/Box";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Col, Row } from "../../components/Layout";
import Text from "../../components/Text";
import { getColor } from "../../theme";

export const PageContent = styled.div`
  flex: 1;
`;

export const Card = styled(Box)`
  width: 100%;
  border-radius: 12px;
  background-color: ${(props) => getColor(props, "background")};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const MainPage = () => {
  return (
    <PageContent>
      <PageContent>
        <Col>
          <Row default="4" lg="2">
            <Box px="md" py="md">
              <Text.H2>Hello, Nattawod</Text.H2>
            </Box>
          </Row>
          <Row default="8" lg="10">
            <Box px="md">
              <Card my="md">
                <Box py="md" px="md">
                  <Text.H3>How are you feeling today?</Text.H3>
                  <Box mt="md">
                    <Grid col="5" gap="md">
                      <Button>
                        <Text.H4>Awesome</Text.H4>
                      </Button>
                      <Button>
                        <Text.H4>Good</Text.H4>
                      </Button>
                      <Button>
                        <Text.H4>Alright</Text.H4>
                      </Button>
                      <Button>
                        <Text.H4>Down</Text.H4>
                      </Button>
                      <Button>
                        <Text.H4>Horrible</Text.H4>
                      </Button>
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Row>
        </Col>
      </PageContent>
    </PageContent>
  );
};

export default MainPage;
