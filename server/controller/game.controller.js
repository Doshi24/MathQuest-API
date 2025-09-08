import Session from "../utils/Sessionconfig.js";
    
const PlayGame = (req, res)=> {
// console.log("do addition")
const { userAnswer } = req.body;
    if(Session.step == "Addition"){
    if (userAnswer === undefined || userAnswer === "") {
        const num1 = Math.floor(Math.random() * 50) + 1;
        const num2 = Math.floor(Math.random() * 50) + 1;
        Session.correctAnswer = num1 + num2;

        return res.json({status: "pending", message: "Solve this addition",data: { num1, num2 }});
    }

    if (Number(userAnswer) === Session.correctAnswer) {
        Session.step = "subtraction";
        Session.num1 = Math.floor(Math.random()* 50)+1;
        Session.num2 = Math.floor(Math.random()* 50)+1;

        Session.correctAnswer = Session.num1 - Session.num2 
        return res.status(200).json({status: "success",message: "Correct Answer"});
    }
  return res.status(401).json({status: "unsuccess", message: "Wrong Answer, try again"});
}
    if(Session.step == "subtraction"){
        // subraction logic
        if (userAnswer === undefined || userAnswer === ""){

            let num1 = Math.floor(Math.random() * 50);
            let num2 = Math.floor(Math.random() * 50);

            if(num1 < num2 ){
                [num1, num2] = [num2, num1];
            }

            Session.num1 = num1
            Session.num2 = num2
            Session.correctAnswer = num1 - num2
            return res.json({status: "pending", message: "Solve this subtraction",data: { num1: Session.num1, num2: Session.num2 }, step: "subtraction"});
        }
        if(Number(userAnswer) === Session.correctAnswer){
            Session.step = "GuessNumber";
            Session.hiddenNumber = Math.floor(Math.random() * 10) + 1;
            
            return res.status(200).json({status : "success", message : "Correct Now guess hidden Number", step : "GuessNumber"})
        }
        return res.status(400).json({status : "unsuccess", message: "Wrong Subraction", step: "subraction"})   
    } 
}  

export { PlayGame}