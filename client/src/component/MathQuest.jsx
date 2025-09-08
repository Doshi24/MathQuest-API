import { useState } from "react";
import { url } from "../config";

function MathQuest() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState("Addition");

  // Fetch question from backend
  const getQuestion = async () => {
    const res = await fetch(`${url}game`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });

    const data = await res.json();
    setQuestion(data.data || null);
    setMessage(data.message);
    if (data.step) setStep(data.step);
  };

  // Submit answer
  const submitAnswer = async () => {
    const res = await fetch(`${url}game`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userAnswer: Number(userAnswer) })
    });

    const data = await res.json();
    setMessage(data.message);
    if (data.data) setQuestion(data.data);
    if (data.step) setStep(data.step);

    // Reset input on correct
    if (data.status === "success") {
      setUserAnswer("");
    }
  };

  // Render expression dynamically
  const renderExpression = () => {
    if (!question) return null;

    if (step === "Addition") {
      return (
        <p className="text-lg">
          {question.num1} + {question.num2} = ?
        </p>
      );
    }

    if (step === "subtraction") {
      return (
        <p className="text-lg">
          {question.num1} - {question.num2} = ?
        </p>
      );
    }

    if (step === "GuessNumber") {
      return <p className="text-lg">Guess the hidden number (1–10)</p>;
    }

    return null;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Math Quest Game</h1>

      {!question ? (
        <button
          onClick={getQuestion}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Get Question
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          {renderExpression()}
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <button
            onClick={submitAnswer}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit Answer
          </button>
        </div>
      )}

      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}

export default MathQuest;