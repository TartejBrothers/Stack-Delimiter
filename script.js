function delimitAndDisplay() {
  const formValue = document.getElementById("formValue").value;
  const delimitedValue = createBracketDelimiter(formValue);
  document.getElementById("output").innerHTML = delimitedValue;
}

function createBracketDelimiter(formValue) {
  const stack = [];
  let result = "";
  let inBracket = false;

  for (const char of formValue) {
    if (char === "[" || char === "{" || char === "(" || char === "<") {
      stack.push(char);
      inBracket = true;
    } else if (char === "]" || char === "}" || char === ")" || char === ">") {
      if (stack.length === 0) {
        alert("The brackets are not balanced.");
        return;
      }
      const openingBracket = stack.pop();
      if (areBracketsMatching(openingBracket, char)) {
        inBracket = false;
      } else {
        alert("The brackets are not balanced.");
        return;
      }
    }
    if (
      inBracket &&
      char !== "[" &&
      char !== "{" &&
      char !== "(" &&
      char !== "<" &&
      char !== "]" &&
      char !== "}" &&
      char !== ")" &&
      char !== ">"
    ) {
      result += char;
    }
  }

  if (stack.length > 0) {
    alert("The brackets are not balanced.");
    return;
  }

  return result;
}

function areBracketsMatching(openingBracket, closingBracket) {
  return (
    (openingBracket === "[" && closingBracket === "]") ||
    (openingBracket === "{" && closingBracket === "}") ||
    (openingBracket === "(" && closingBracket === ")") ||
    (openingBracket === "<" && closingBracket === ">")
  );
}
