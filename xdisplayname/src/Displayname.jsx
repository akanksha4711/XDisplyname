import { useState } from "react";

const Displayname = () => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [fullName, setFullName] = useState(""); 

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                setFullName(`${firstName} ${lastName}`)
            }}>
                <label name="firstName">First Name:</label>
                <input type="text" name="firstName" required onChange={(e) => {
                    setFirstName(e.target.value);
                }}/>
                <br/>
                <label name="lastName">Last Name:</label>
                <input type="text" name="lastName" required onChange={(e) => {
                    setLastName(e.target.value);
                }}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <p>Full Name: <span>{fullName}</span></p>
        </div>
    );
}

export default Displayname;