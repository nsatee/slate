import styled, { css } from "styled-components";
import { ColorName, getSpace } from "../theme";

type Props =  {  
  color?: ColorName,
  bold?: boolean,
  underline?: boolean,
}

const CommonText = css<Props>`
  font-weight: ${(props) => props.bold && "bold"};
  text-decoration: ${(props) => props.underline && "underline"};
  color: ${props => props.theme.colors[props.color || "text"]};
`;

const Text = {
  H1: styled.h1<Props>`
    ${CommonText}
    font-size: 32px;
    line-height: 48px;
  `,
  H2: styled.h2<Props>`
    ${CommonText}
    font-size: 24px;
    line-height: 40px;
  `,
  H3: styled.h3<Props>`
    ${CommonText}
    font-size: 18px;
    line-height: 32px;
  `,
  H4 : styled.h4<Props>`
    ${CommonText}
    font-size: 16px;
    line-height: 24px;
  `,
  Body: styled.p<Props>`
    ${CommonText}
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${props => getSpace(props, "md")};
  `,
   Display: styled.span<Props>`
    ${CommonText}
    font-size: 16px;
    line-height: 24px;
  `,
   Small: styled.p<Props>`
    ${CommonText}
    font-size: 12px;
    line-height: 20px;
  `
}

export default Text;

