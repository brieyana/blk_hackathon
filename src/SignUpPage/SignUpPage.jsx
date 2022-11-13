import SignUpForm from "../SignUpForm";
import CSS from "./SignUpPage.module.css";

const SignUpPage = () => {
    return (
        <div>
            <div id={CSS.header}>
                <div id={CSS.headerContent}>
                    <h1 id={CSS.heading}>UTD Study</h1>
                    <a href="/login" className={CSS.link}>Log in</a>
                </div>
            </div>
            <SignUpForm />
        </div>
    );
}

export default SignUpPage;