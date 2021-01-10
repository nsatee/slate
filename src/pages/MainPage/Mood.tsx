import React, { useState } from "react";
import tinycolor from "tinycolor2";
import Box from "../../components/Box";
import { Button } from "../../components/Button";
import { Flex } from "../../components/Flex";
import Text from "../../components/Text";
import CardContainer from "./CardContainer";
import * as Styled from "./styled";

const Mood = () => {
  const [moodScale, setMoodScale] = useState(0);
  const arrColor = Array.from(Array(5), (_, i) =>
    tinycolor("#ff3300")
      .spin(16 * i)
      .desaturate(24)
      .toHex()
  );
  const feelings = [
    "Happy",
    "Sad",
    "Blessed",
    "Excited",
    "Motivate",
    "Anxious",
    "Depressed",
    "Lonely",
    "Confidence",
    "Scare",
    "Paranoid",
  ];
  return (
    <CardContainer title="How are you doing today?">
      <Box mt="xl">
        <Styled.RatingLine />
        <Flex justify="between">
          {arrColor.map((color, index) => (
            <Styled.RatingDots
              key={color}
              originColor={color}
              color={moodScale === index + 1 ? color : undefined}
              onClick={() =>
                setMoodScale(moodScale === index + 1 ? 0 : index + 1)
              }
            />
          ))}
        </Flex>
      </Box>
      <Flex justify="between" mt="sm">
        <Text.Small>Horrible</Text.Small>
        <Text.Small>Wonderful</Text.Small>
      </Flex>

      <Box mt="lg">
        <Text.H3>Feelings?</Text.H3>
        <Flex wrapped>
          {feelings.map((feel) => (
            <Box mr="sm" mt="sm" key={feel}>
              <Button>
                <Text.Display bold color="background">
                  {feel}
                </Text.Display>
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </CardContainer>
  );
};

export default Mood;
