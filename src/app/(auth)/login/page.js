import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import Styles from "./login.module.css";

const Login = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={Styles.github}>Login with github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
