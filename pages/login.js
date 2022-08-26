import { useRouter } from 'next/router'


function login() {

    // router query 
    const router = useRouter()

    // end router query 

    // checking login info and redirecting to home page
    const findingData = async () => {
        router.push('/')
    }

    return (
        <>
            <input type="text" name="name" id="" />
            <input type="text" name="password" id="" />
            <button type="submit" onClick={findingData}>Login</button>
        </>
    )
}

export default login