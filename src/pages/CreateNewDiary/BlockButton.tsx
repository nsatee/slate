import { Editor, Transforms, Element } from "slate";
import { useSlate } from "slate-react";
import {
  TypeH1,
  TypeH2,
  TypeH3,
  BlockquoteLeft,
  ListUl,
  ListOl,
} from "@styled-icons/bootstrap";
import { FC } from "react";
import { Button } from "../../components/Button";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const IconSet = {
  looks_one: <TypeH1 size="18" color="white" />,
  looks_two: <TypeH2 size="18" color="white" />,
  looks_three: <TypeH3 size="18" color="white" />,
  format_quote: <BlockquoteLeft size="18" color="white" />,
  format_list_numbered: <ListOl size="18" color="white" />,
  format_list_bulleted: <ListUl size="18" color="white" />,
};

export const isBlockActive = (editor: Editor, format: any) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
  });

  return !!match;
};

export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => {
      return LIST_TYPES.includes(
        //@ts-ignore
        !Editor.isEditor(n) && Element.isElement(n) && n.type
      );
    },
    split: true,
  });

  const newProperties: Partial<Element> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const BlockButton: FC<{ format: string; icon: keyof typeof IconSet }> = ({
  format,
  icon,
}) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {IconSet[icon]}
    </Button>
  );
};

export default BlockButton;
