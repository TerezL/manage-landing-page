import { useState } from "react";

export function useEmailValidation(initial = "") {
  const [email, setEmail] = useState(initial);
  const [error, setError] = useState("");

  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

  const onChange = (e) => {
    setEmail(e.target.value);

    // realtime cleanup erroru
    if (error) setError("");
  };

  const validate = () => {
    if (!isEmail(email)) {
      setError("Please insert a valid email");
      return false;
    }
    setError("");
    return true;
  };

  return {
    email,
    setEmail,
    onChange,
    error,
    validate,
  };
}