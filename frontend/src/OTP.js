import React,{useState} from "react";
import { verifyOTP } from "./api";

function OTP({email}){

const [otp,setOtp] = useState("");

const submit = async (e)=>{
e.preventDefault();

const res = await verifyOTP({
email,
otp
});

alert(res.data.message);

localStorage.setItem("token",res.data.token);

};

return(

<div className="container">

<h2>Email Verification</h2>

<form onSubmit={submit}>

<div className="inputBox">
<input required onChange={(e)=>setOtp(e.target.value)}/>
<label>Enter OTP</label>
</div>

<button>Verify OTP</button>

</form>

</div>

);
}

export default OTP;