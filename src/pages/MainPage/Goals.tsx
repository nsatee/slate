import { Plus } from "@styled-icons/bootstrap";
import React from "react";
import { Flex } from "../../components/Flex";
import Text from "../../components/Text";
import { useTheme } from "../../theme";
import CardContainer from "./CardContainer";
import * as Styled from "./styled";

const Goals = () => {
  const theme = useTheme();
  return (
    <CardContainer title="Goals">
      <Flex wrapped mt="md">
        <Styled.GoalSection>
          <Text.Small bold>Weight</Text.Small>
          <Flex align="end" justify="end">
            <Text.H1 align="right">30</Text.H1>
            <Text.Small>pound</Text.Small>
          </Flex>
        </Styled.GoalSection>
        <Styled.GoalSection>
          <Text.Small bold>Exercise</Text.Small>
          <Flex align="end" justify="end">
            <Text.H1 align="right">30</Text.H1>
            <Text.Small>mins/day</Text.Small>
          </Flex>
        </Styled.GoalSection>
        <Styled.GoalSection>
          <Text.Small bold>Sleep</Text.Small>
          <Flex align="end" justify="end">
            <Text.H1 align="right">7</Text.H1>
            <Text.Small>hrs/night</Text.Small>
          </Flex>
        </Styled.GoalSection>
        <Styled.GoalSection>
          <Text.Small bold>Calories</Text.Small>
          <Flex align="end" justify="end">
            <Text.H1 align="right">3000</Text.H1>
            <Text.Small>per day</Text.Small>
          </Flex>
        </Styled.GoalSection>
        <Styled.GoalSection>
          <Text.Small bold>Sodium</Text.Small>
          <Flex align="end" justify="end">
            <Text.H1 align="right">150</Text.H1>
            <Text.Small>mg/day</Text.Small>
          </Flex>
        </Styled.GoalSection>
        <Styled.GoalSection>
          <Text.Small bold>Vitals targets</Text.Small>
          <Text.H2 align="right">132/83/92</Text.H2>
        </Styled.GoalSection>
        <Styled.AddGoal as="button">
          <Plus size={48} color={theme.activeTheme.colors.brand} />
        </Styled.AddGoal>
      </Flex>
    </CardContainer>
  );
};

export default Goals;
