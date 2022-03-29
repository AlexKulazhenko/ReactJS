import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";


const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <MyInput type='text' placeholder='Login'/>
                <MyInput type='password' placeholder='password'/>
                <MyButton>log in</MyButton>
            </form>
        </div>
    )
}

export default Login;