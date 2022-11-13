import CSS from "./LoginPage.module.css";
import LoginForm from "../LoginForm";

const LoginPage = () => {
    return (
        <div>
            <div id={CSS.header}>
                <div id={CSS.headerContent}>
                    <h1 id={CSS.heading}>UTD Study</h1>
                    <div>
                        <a href="/" className={CSS.link}>Sign Up</a>
                        <a href="#" className={CSS.link}>Home</a>
                    </div>
                </div>
            </div>
            <LoginForm />
        </div>
    );
}

export default LoginPage;