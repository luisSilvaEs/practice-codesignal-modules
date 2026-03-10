import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useState } from "react";

const Ping = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8080/api/ping", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: message,
    });

    const data = await response.text();
    setResponse(data);
  };

  return (
    <div>
      <h2>Ping test</h2>
      <Field>
        <FieldLabel>Message</FieldLabel>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type something..."
        />
      </Field>

      <Button onClick={handleSubmit} type="submit">
        Send
      </Button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default Ping;
