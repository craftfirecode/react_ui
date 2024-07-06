import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Add this line

const ComponentCode = ({ codeString }: { codeString: string }) => (
  <SyntaxHighlighter language="javascript" style={darcula}>
    {codeString}
  </SyntaxHighlighter>
);

export default ComponentCode;