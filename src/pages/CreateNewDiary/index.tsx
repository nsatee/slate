import React, { useCallback, useMemo, useState } from "react";
import isHotkey from "is-hotkey";

import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Editor, Node } from "slate";
import { withHistory } from "slate-history";
import MarkButton, { toggleMark } from "./MarkButton";
import BlockButton from "./BlockButton";
import styled from "styled-components";
import { getSpace } from "../../theme/theme";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { MoreVertical } from "react-feather";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
} as { [key: string]: string };

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
const ToolContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${(props) => getSpace(props, "1", true)};
`;

const ToolsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => getSpace(props, "1", true)};
`;

const ToolDivider = styled.div`
  height: 24px;
  width: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 ${(props) => getSpace(props, "1", true)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => getSpace(props, "2", true)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const EditorContainer = styled.div`
  padding: ${(props) => props.theme.spaces.md}px;
`;

const CreateNewDiary = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <div>
      <Header>
        <h1>Example title</h1>
        <Grid col="md">
          <Button color="success">Save</Button>
          <Button color="based">
            <MoreVertical />
          </Button>
        </Grid>
      </Header>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <ToolContainer>
          <ToolsWrapper>
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
            <MarkButton format="code" icon="code" />
          </ToolsWrapper>
          <ToolDivider />
          <ToolsWrapper>
            <BlockButton format="heading-one" icon="looks_one" />
            <BlockButton format="heading-two" icon="looks_two" />
            <BlockButton format="heading-three" icon="looks_three" />
            <BlockButton format="block-quote" icon="format_quote" />
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          </ToolsWrapper>
        </ToolContainer>
        <EditorContainer>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text..."
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              if (event.key === "Tab") {
                event.preventDefault();
                Editor.insertText(editor, "\t");
              }
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event as any)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          />
        </EditorContainer>
      </Slate>
    </div>
  );
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const Element = ({ attributes, children, element }: any) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "heading-three":
      return <h3 {...attributes}>{children}</h3>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default CreateNewDiary;
