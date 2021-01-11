import styled, { css } from "styled-components";
import { ColorName } from "../theme";
import { getSpace } from "../theme/util/getSpace";

type Props = {
  color?: ColorName;
  bold?: boolean;
  normal?: boolean;
  light?: boolean;
  underline?: boolean;
  align?: "left" | "center" | "right";
  sub?: boolean;
};

const CommonText = css<Props>`
  font-weight: ${(props) =>
    props.bold ? "bolder" : props.normal ? "normal" : props.light && "lighter"};
  text-decoration: ${(props) => props.underline && "underline"};
  color: ${(props) => props.color && props.theme.colors[props.color]};
  text-align: ${(props) => props.align};
  opacity: ${(p) => p.sub && 0.4};
`;

const Text = {
  H1: styled.h1<Props>`
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    ${CommonText}
  `,
  H2: styled.h2<Props>`
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    ${CommonText}
  `,
  H3: styled.h3<Props>`
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    ${CommonText}
  `,
  H4: styled.h4<Props>`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    ${CommonText}
  `,
  Body: styled.p<Props>`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${(props) => getSpace(props, "md")};
    ${CommonText}
  `,
  Display: styled.span<Props>`
    font-size: 16px;
    line-height: 24px;
    ${CommonText}
  `,
  Small: styled.p<Props>`
    font-size: 12px;
    line-height: 20px;
    ${CommonText}
  `,
};

export default Text;
