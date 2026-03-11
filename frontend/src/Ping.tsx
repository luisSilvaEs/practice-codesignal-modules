import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Ping = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/api/ping", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: message,
    });
    const data = await res.text();
    setResponse(data);
  };

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-screen w-full"
    >
      {/* Left panel — input form */}
      <ResizablePanel defaultSize={40} minSize={25}>
        <div className="flex flex-col gap-4 p-6">
          <h2 className="text-lg font-semibold">Ping test</h2>
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Input
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type something..."
            />
            <FieldDescription>
              This will be sent to the backend.
            </FieldDescription>
          </Field>
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Right panel — response */}
      <ResizablePanel defaultSize={60} minSize={25}>
        <div className="flex flex-col gap-2 p-6">
          <h2 className="text-lg font-semibold">Response</h2>
          {response ? (
            <p className="text-sm text-muted-foreground">{response}</p>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Response will appear here...
            </p>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Ping;
