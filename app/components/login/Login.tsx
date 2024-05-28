"use client";
import { login, logout, selectLoginState } from "@/lib/features/auth/authSlice";
import Button from "@/app/modules/Button";
import Input from "@/app/modules/Input";
import { withPublic } from "@/app/components/hocs/routers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

function Login() {
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector(selectLoginState);
  const schema = yup.object({
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const {
    // register,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const processLogin = async (data: { email: string; password: string }) => {
    console.log(data, "dkdk");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (
      data.email == "mudassirzahoor14@gmail.com" &&
      data.password == "Abcd@1234"
    ) {
      dispatch(login());
      return;
    }
    setError("root.serverError", {
      message: "Wrong Email / Password",
    });
  };
  console.log(errors, isSubmitting, "sksk");
  return (
    <form onSubmit={handleSubmit(processLogin)}>
      {errors?.root?.serverError?.message && (
        <p style={{ color: "white", backgroundColor: "red", padding: "5px" }}>
          {errors?.root?.serverError?.message}
        </p>
      )}
      <Input
        control={control}
        error={errors?.email?.message}
        label="Email"
        type="email"
        name="email"
        id="email"
      />
      <Input
        control={control}
        error={errors?.password?.message}
        label="Password"
        type="password"
        name="password"
        id="password"
      />
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Logging In" : "Login"}
      </Button>
    </form>
  );
}

export default withPublic(Login);
