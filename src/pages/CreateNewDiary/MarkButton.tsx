import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Button } from "../../symply-ui/components/Button";
import {
  TypeBold,
  TypeItalic,
  TypeUnderline,
  Code,
} from "@styled-icons/bootstrap";
import { FC } from "react";
const IconSet = {
  format_bold: <TypeBold size="18" color="white" />,
  format_italic: <TypeItalic size="18" color="white" />,
  format_underlined: <TypeUnderline size="18" color="white" />,
  code: <Code size="18" color="white" />,
};

export const isMarkActive = (editor: Editor, format: any) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: any) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const MarkButton: FC<{ format: string; icon: keyof typeof IconSet }> = ({
  format,
  icon,
}) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {IconSet[icon]}
    </Button>
  );
};

export default MarkButton;
