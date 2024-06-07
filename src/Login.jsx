import React,{useState} from "react";
import './Login.css';

function Login(){
    const [uname, setuname] = useState("");
    const [password, setpassword] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${uname}`)
        alert(`The name you entered was: ${password}`)   

        setResult( 
            // "Form has been submitted with with Input: " + 
            //     uname 
           <a href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Dlogin%2Bamazon%2Baccount%26adgrpid%3D59671903835%26ext_vrnc%3Dhi%26hvadid%3D590652406969%26hvdev%3Dc%26hvlocphy%3D9062044%26hvnetw%3Dg%26hvqmt%3De%26hvrand%3D13444726518157373423%26hvtargid%3Dkwd-837441119212%26hydadcr%3D24542_2265395%26tag%3Dgooginhydr1-21%26ref%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">Welcome to Amazon</a>
        );
      }

    return(     
        
        <div className="Login">            
        <form onSubmit={handleSubmit}>   
        <h1>Login Page</h1>     
            <label>Enter your name:
                <input type="text" value={uname} onChange={(e) => setuname(e.target.value)}/>
            </label><br/>
            <label>Enter Password:
                <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} required/>
            </label><br/>
            <div className="result">{result}
            </div> 
            {/* <div className="result">{result}</div> */}
            <button type="Submit">Submit</button>
              </form><br/>
              </div>
    )
}

export default Login;