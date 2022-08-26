import React, { useState } from 'react'

function handle() {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")


    const handleName = async (e) => {
        setUserName(e.target.value)
    }
    const handlePassword = async (e) => {
        setUserPassword(e.target.value)
    }
    const handleEmail = async (e) => {
        setUserEmail(e.target.value)
    }
    const handleSubmit = async () => {

        console.log("hi")
        console.log(userName, userPassword, userEmail)

        const res = await fetch('http://localhost:3000/api/main', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: userName, password: userPassword, email: userEmail })
        })
    }

    return (
        <>
            <div>
                <input type="text" name="name" value={userName} onChange={handleName} />
                <input type="text" name="name" value={userPassword} onChange={handlePassword} />
                <input type="text" name="name" value={userEmail} onChange={handleEmail} />
                <button type="submit" onClick={handleSubmit}>Submit</button>

            </div>
        </>
    )
}

export default handle
