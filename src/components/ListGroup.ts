import styled from "styled-components";
import { getColor } from "../theme";
import Box from "./Box";

export const List = styled(Box)`
  width: 100%;
  border-bottom: 1px solid ${p => getColor(p, "based")};

  &:hover {
    background-color: ${p => getColor(p, "based", ["alpha", "0.2"])};
  }
`;

const ListGroup = styled(Box)`
  border: 1px solid ${p => getColor(p, "based")};
  border-radius: ${p => p.theme.card.corner}px;

  ${List} {
    &:last-child {
      border-bottom: 0;
    }
  }
`;


export default ListGroup;