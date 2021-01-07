import styled from "styled-components";

enum JustifyValue {
  end = "flex-end",
  start = "flex-start",
  center = "center",
  between = "space-between",
  around = "space-around"
}

type JustifyName = "end" | "start" | "center" | "between" | "around"

type Props = {
  justify?: JustifyName;
  align?: JustifyName;
  alignSelf?: JustifyName;
  justifySelf?: JustifyName;
  flex?: number;
}

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${props => props.justify &&JustifyValue[props.justify]};
  align-items: ${props => props.align &&  JustifyValue[props.align]};
  justify-self: ${props => props.justifySelf && JustifyValue[props.justifySelf]};
  align-self: ${props => props.alignSelf &&JustifyValue[props.alignSelf]};
  flex: number;
`;