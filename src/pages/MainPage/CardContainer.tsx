import React, { FC } from "react";
import Box from "../../symply-ui/components/Box";
import Text from "../../symply-ui/components/Text";
import { Card } from "./styled";

const CardContainer: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Card mt="md">
      <Box py="md" px="md">
        <Text.H3>{title}</Text.H3>
        {children}
      </Box>
    </Card>
  );
};

export default CardContainer;
