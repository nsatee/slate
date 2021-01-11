import styled from "styled-components";
import { getColor, getSpace } from "../theme";
import Box from "./Box";

type Props = {
  pop?: boolean;
}

const Card = styled(Box) <Props>`
  width: 100%;
  border-radius: ${p => p.theme.card.corner}px;
  border: ${p => !p.pop && `1px solid ${getColor(p, "based")}`};
  box-shadow: ${p => p.pop && p.theme.shadows.lv1};
`;

export const CardBody = styled(Box)`
  padding: ${p => getSpace(p, "md")};
`

export default Card;