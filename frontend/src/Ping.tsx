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
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />

      <button onClick={handleSubmit}>Send</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default Ping;
