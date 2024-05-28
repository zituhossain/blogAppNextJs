import { register } from "@/lib/action";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const Registration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Registration;
