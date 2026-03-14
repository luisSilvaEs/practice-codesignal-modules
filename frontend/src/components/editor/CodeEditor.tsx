import { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8080/api/review", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: code,
    });
    const data = await res.text();
    setReview(data);
    setLoading(false);
  };

  return (
    <div>
      <h2>Code Review</h2>
      <Editor
        height="400px"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value ?? "")}
        theme="vs-dark"
      />
      <button onClick={handleReview} disabled={loading}>
        {loading ? "Reviewing..." : "Review my code"}
      </button>
      {review && (
        <div>
          <h3>AI Review:</h3>
          <p>{review}</p>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
