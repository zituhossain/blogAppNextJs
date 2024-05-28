"use server";
import bcrypt from "bcrypt";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return {
        error: "Username already exists",
      };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to register",
    };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (error) {
    console.log(error);
    if (error.message.inclueds("CredentialsSignin")) {
      return {
        error: "Invalid username or password",
      };
    }
    throw error;
  }
};
