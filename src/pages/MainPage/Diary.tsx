import React from "react";
import Box from "../../components/Box";
import ListGroup, { List } from "../../components/ListGroup";
import Text from "../../components/Text";
import CardContainer from "./CardContainer";

const Diary = () => {
  return (
    <CardContainer title="Diary">
      <ListGroup mt="md">
        <List>
          <Box px="md" py="sm">
            <Text.H4>Diary name is here</Text.H4>
            <Text.Small sub>Jan 1, 2021</Text.Small>
          </Box>
        </List>
        <List>
          <Box px="md" py="sm">
            <Text.H4>Diary name is here</Text.H4>
            <Text.Small sub>Jan 1, 2021</Text.Small>
          </Box>
        </List>
        <List>
          <Box px="md" py="sm">
            <Text.H4>Diary name is here</Text.H4>
            <Text.Small sub>Jan 1, 2021</Text.Small>
          </Box>
        </List>
      </ListGroup>
    </CardContainer>
  );
};

export default Diary;
