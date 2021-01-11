import React, { FC } from "react";
import Box from "../../components/Box";
import Card, { CardBody } from "../../components/Card";
import Checkbox, { CheckboxElement } from "../../components/Checkbox";
import { Flex } from "../../components/Flex";
import Text from "../../components/Text";
import CardContainer from "./CardContainer";

const Task: FC<{ onCheck?: (e: boolean) => void }> = ({
  children,
  onCheck,
}) => {
  return (
    <CheckboxElement onCheck={onCheck}>
      <Card mb="sm">
        <CardBody>
          <Flex align="center">
            <Box mr="sm">
              <Checkbox />
            </Box>
            <Text.Display>{children}</Text.Display>
          </Flex>
        </CardBody>
      </Card>
    </CheckboxElement>
  );
};

const Todo = () => {
  return (
    <CardContainer title="Todo">
      <Box mt="md">
        <Task onCheck={(e) => console.log(e)}>It's about something cool</Task>
        <Task>It's about something cool</Task>
      </Box>
    </CardContainer>
  );
};

export default Todo;
