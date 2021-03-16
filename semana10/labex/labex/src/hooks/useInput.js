import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");
  const onChangeInput = (event) => {
    setInput(event.target.value);
  };
  return [input, onChangeInput];
}

export default useInput;
