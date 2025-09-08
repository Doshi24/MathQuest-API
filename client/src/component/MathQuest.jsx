import { useState } from "react";
import { url } from "../config";

function MathQuest(){

    const [Question, SetQuestion] = useState("")
    const [UserAnswer, SetUserAnswer] = useState("");
    const [Message, SetMessage] = useState("");


    const getQuestion = async () => {
    const res = await fetch(`${url}game`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });

    const data = await res.json();
    SetQuestion(data.data);
    SetMessage(data.message);
  };

  const submitAnswer = async () => {
    const res = await fetch(`${url}game`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userAnswer: Number(UserAnswer) })
    });

    const data = await res.json();
    
    SetMessage(data.message);

    if (data.status === "success") {
      SetQuestion(null);
      SetUserAnswer("");
    }
  };

    return(
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Addition Game</h1>

      {!Question ? (
        <button
          onClick={getQuestion}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Get Question
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-lg">
            {Question.num1} + {Question.num2} = ?
          </p>
          <input
            type="number"
            value={UserAnswer}
            onChange={(e) => SetUserAnswer(e.target.value)}
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

      {Message && <p className="mt-4 text-lg">{Message}</p>}
    </div>
  );
}


export default MathQuest