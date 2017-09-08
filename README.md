See https://github.com/Microsoft/vscode/issues/30290

This is a simple React project (created with "create-react-app"), to demonstrate
the issue described in VSCode issue #30290. It defines and imports four very simple
React components, which differ only in whether their file extension is "js" or "jsx",
and whether the component is a default or non-default export.

Test instructions:

1. Open this directory in VS Code
2. Navigate to src/App.js
3. On each of the JSX tags on lines 18-21 of the file ("JsNotDefault", "JsDefault",
"JsxNotDefault", and "JsxDefault"), right-click and select "Go to Definition"

Expected result: VS Code will navigate to the corresponding source code file where
the component is defined.

Actual result: VS Code navigates to the correct source code file for "JsNotDefault"
and "JsDefault", but fails to do so for "JsxNotDefault" and "JsxDefault".


Workaround: "Go to Definition" works correctly for all four cases if "jsx: preserve"
is added to the compiler options in jsconfig.js.