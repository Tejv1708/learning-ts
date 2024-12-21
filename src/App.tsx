import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

// ! If I am using the ref from my custom component without using forwardRef() function then i got the error
// * Waring -> Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <main>
        <Input label="Text" id="text" ref={inputRef} />
      </main>
    </>
  );
}

export default App;
