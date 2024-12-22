import { useRef } from "react";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Form, { type FormHandle } from "./components/UI/Form";

// ! If I am using the ref from my custom component without using forwardRef() function then i got the error
// * Waring -> Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  // const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <main>
        <Form onSave={handleSave} ref={customForm}>
          <Input label="Name" type="text" id="name" />
          <Input label="Age" type="number" id="age" />
          <p>
            <Button>Save</Button>
          </p>
        </Form>
      </main>
    </>
  );
}

export default App;
