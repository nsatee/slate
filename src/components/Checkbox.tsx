import { createContext, FC, HTMLAttributes, useContext, useState } from "react";
import styled from "styled-components";
import { getColor } from "../theme";

type Props = {
  active?: boolean;
  onCheck?: (value: boolean) => void;
};

const Check = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(p) => getColor(p, "background")};
  border-radius: 3px;
  transition: 0.1s;
`;

const CheckboxContainer = styled.div<Props>`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  background-color: ${(p) => getColor(p, p.active ? "success" : "based")};
  border-radius: 6px;
  cursor: pointer;

  ${Check} {
    transform: scale(${(p) => (p.active ? 1 : 0)});
  }
`;

const CheckboxWrapper = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 0;
  background: ${(p) => getColor(p, "background", ["alpha", "0"])};
  display: block;
  width: 100%;
  outline: 0;
`;

const Context = createContext(false);

export const CheckboxElement: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  onCheck,
  active,
  ...props
}) => {
  const [state, setState] = useState(active);
  return (
    <Context.Provider value={state || false}>
      <CheckboxWrapper
        onClick={() => {
          setState((p) => {
            onCheck && onCheck(!p);
            return !p;
          });
        }}
        {...props}
      >
        {children}
      </CheckboxWrapper>
    </Context.Provider>
  );
};

const Checkbox: FC = () => {
  const selected = useContext(Context);
  return (
    <CheckboxContainer active={selected}>
      <Check />
    </CheckboxContainer>
  );
};

export default Checkbox;
