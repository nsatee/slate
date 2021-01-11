import styled from "styled-components";
import Box from "../../components/Box";
import { getColor } from "../../theme";

export const PageContent = styled.div`
  flex: 1;
`;

export const Card = styled(Box)`
  width: 100%;
  border-radius: 12px;
  background-color: ${(props) => getColor(props, "background")};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const RatingLine = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${(props) => getColor(props, "based")};
`;

export const RatingDots = styled.div<{ color?: string; originColor: string }>`
  width: 24px;
  height: 24px;
  background: ${(props) => getColor(props, "based")};
  justify-self: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  transform: scale(${(props) => (props.color ? 1.2 : 1)});
  display: grid;
  place-items: center;

  &:after {
    transition: 0.2s;
    content: "";
    display: block;
    width: ${(props) => (props.color ? 24 : 10)}px;
    height: ${(props) => (props.color ? 24 : 10)}px;
    background-color: #${(props) => props.originColor};
    border-radius: 50%;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const GoalSection = styled.div`
  border: 1px solid ${(props) => getColor(props, "text", ["alpha", "0.2"])};
  padding: 8px;
  border-radius: 12px;
  min-width: 120px;
  min-height: 80px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 8px;
`;

export const AddGoal = styled(GoalSection)`
  width: 120px;
  background: transparent;
  justify-content: center;
  align-items: center;
`;