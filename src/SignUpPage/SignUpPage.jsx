import SignUpForm from "../SignUpForm";
import CSS from "./SignUpPage.module.css";

const SignUpPage = () => {
    return (
        <div>
            <div id={CSS.header}>
                <h1 id={CSS.heading}>We Study</h1>
                <a href="https://google.com" className={CSS.link}>Log in</a>
            </div>
            <SignUpForm />
        </div>
    );
}

export default SignUpPage;