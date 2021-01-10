import styled from "styled-components";
import { getSpace, Spaces } from "../theme";


type Props = {
  mx?: Spaces,
  my?: Spaces,
  ml?: Spaces,
  mr?: Spaces,
  mt?: Spaces,
  mb?: Spaces,
  px?: Spaces,
  py?: Spaces,
  pl?: Spaces,
  pr?: Spaces,
  pt?: Spaces,
  pb?: Spaces,
}

const Box = styled.div<Props>`
  position: relative;
  padding: ${(props) => (props.px || props.py) && `${getSpace(props, props.py)} ${getSpace(props, props.px)}`};
  padding-left: ${props => props.pl && getSpace(props, props.pl)};
  padding-right: ${props => props.pr && getSpace(props, props.pr)};
  padding-top: ${props => props.pt && getSpace(props, props.pt)};
  padding-bottom: ${props => props.pb && getSpace(props, props.pb)};

  margin: ${(props) => (props.mx || props.my) && `${getSpace(props, props.my)} ${getSpace(props, props.mx)}`};
  margin-left: ${props => props.ml && getSpace(props, props.ml)};
  margin-right: ${props => props.mr && getSpace(props, props.mr)};
  margin-top: ${props => props.mt && getSpace(props, props.mt)};
  margin-bottom: ${props => props.mb && getSpace(props, props.mb)};
`;

export default Box;