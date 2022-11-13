import CSS from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <div className={CSS.container}>
            <form>
                <div id={CSS.formContent}>
                    <h2 id={CSS.heading}>Log In</h2>
                    <div className={CSS.inputBlock}>
                        <label htmlFor="school-email">School email</label>
                        <input type="text" id="school-email" name="school-email" />
                    </div>

                    <div className={CSS.inputBlock}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div id={CSS.buttonContainer}>
                        <button className={CSS.submitButton}>Log in</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;