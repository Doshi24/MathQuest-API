import Session from "../utils/Sessionconfig.js";
    
const DoAddition = (req, res)=> {
// console.log("do addition")

    const { userAnswer } = req.body;
    if (userAnswer === undefined || userAnswer === "") {
        const num1 = Math.floor(Math.random() * 50) + 1;
        const num2 = Math.floor(Math.random() * 50) + 1;
        Session.correctAnswer = num1 + num2;

        return res.json({status: "pending", message: "Solve this addition",data: { num1, num2 }});
    }

    if (Number(userAnswer) === Session.correctAnswer) {
        return res.status(200).json({status: "success",message: "Correct Answer"});
    }
  return res.status(401).json({status: "unsuccess", message: "Wrong Answer, try again"});
};


export { DoAddition}