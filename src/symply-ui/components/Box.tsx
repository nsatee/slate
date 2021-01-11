import styled from "styled-components";
import { Spaces } from "../theme";
import { getSpace } from "../theme/util/getSpace";

type Props = {
  mx?: Spaces;
  my?: Spaces;
  ml?: Spaces;
  mr?: Spaces;
  mt?: Spaces;
  mb?: Spaces;
  px?: Spaces;
  py?: Spaces;
  pl?: Spaces;
  pr?: Spaces;
  pt?: Spaces;
  pb?: Spaces;
};

const Box = styled.div<Props>`
  position: relative;
  padding: ${(props) =>
    (props.px || props.py) &&
    `${getSpace(props, props.py)} ${getSpace(props, props.px)} !important`};
  padding-left: ${(props) =>
    props.pl && `${getSpace(props, props.pl)} !important`};
  padding-right: ${(props) =>
    props.pr && `${getSpace(props, props.pr)} !important`};
  padding-top: ${(props) =>
    props.pt && `${getSpace(props, props.pt)} !important`};
  padding-bottom: ${(props) =>
    props.pb && `${getSpace(props, props.pb)} !important`};

  margin: ${(props) =>
    (props.mx || props.my) &&
    `${getSpace(props, props.my)} ${getSpace(props, props.mx)} !important`};
  margin-left: ${(props) =>
    props.ml && `${getSpace(props, props.ml)} !important`};
  margin-right: ${(props) =>
    props.mr && `${getSpace(props, props.mr)} !important`};
  margin-top: ${(props) =>
    props.mt && `${getSpace(props, props.mt)} !important`};
  margin-bottom: ${(props) =>
    props.mb && `${getSpace(props, props.mb)} !important`};
`;

export default Box;
