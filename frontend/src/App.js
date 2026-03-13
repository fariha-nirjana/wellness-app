import React,{useState} from "react";
import Login from "./Login";
import OTP from "./OTP";

function App(){

const [step,setStep] = useState(1);
const [email,setEmail] = useState("");

return(

<div>

{step===1 &&
<Login setStep={setStep} setEmail={setEmail}/>
}

{step===2 &&
<OTP email={email}/>
}

</div>

);
}

export default App;