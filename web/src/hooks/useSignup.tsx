import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { API_URL } from "@/constant";

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  accountType?: string;
};

type SignupData = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  accountType: string;
};

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const router = useRouter();

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Enter a valid email address.";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    if (!confirmPassword) return "Confirm password is required.";
    if (confirmPassword !== password) return "Passwords do not match.";
    return "";
  };

  const validateName = (name: string) => {
    if (!name) return "Name is required.";
    return "";
  };

  const validateAccountType = (accountType: string) => {
    if (!accountType) return "Account type is required.";
    return "";
  };

  const handleSubmit = async () => {
    // Validate fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    const nameError = validateName(name);
    const accountTypeError = validateAccountType(accountType);

    if (
      emailError ||
      passwordError ||
      confirmPasswordError ||
      nameError ||
      accountTypeError
    ) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        name: nameError,
        accountType: accountTypeError,
      });
      return;
    }

    setErrors({});
    try {
      setLoading(true);
      const res: any = await fetch(`${API_URL}/api/user/sign_up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name,
          accountType,
        }),
      });

      const response = await res.json();

      if (response.statusCode === 201) {
        toast.success(response.message);
        router.push("/signin");
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    name,
    setName,
    accountType,
    setAccountType,
    loading,
    errors,
    handleSubmit,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateName,
    validateAccountType,
  };
};

export default useSignup;
