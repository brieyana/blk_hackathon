import CSS from "./SignUpForm.module.css";

const SignUpForm = () => {
    return (
        <div className={CSS.container}>
            <form>
                <div id={CSS.formContent}>
                    <h2 id={CSS.heading}>Sign Up</h2>
                    <div className={CSS.inputBlock}>
                        <label htmlFor="school-email">School email<span>*</span></label>
                        <input type="text" id="school-email" name="school-email" />
                    </div>

                    <div className={CSS.inputBlock}>
                        <label htmlFor="first-name">First name<span>*</span></label>
                        <input type="text" id="first-name" name="first-name" />
                    </div>

                    <div className={CSS.inputBlock}>
                        <label htmlFor="last-name">Last name<span>*</span></label>
                        <input type="text" id="last-name" name="last-name" />
                    </div>

                    <div className={CSS.inputBlock}>
                        <label htmlFor="password">Password<span>*</span></label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div id={CSS.buttonContainer}>
                        <button className={CSS.submitButton}>Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;