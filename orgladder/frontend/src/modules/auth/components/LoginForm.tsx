import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type { LoginInput, LoginResponse } from "../types";
import { LoginHandler } from "../services/AuthService";
import { useAuthStore } from "@/store/AuthStore";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginInput>();
  const mutation = useMutation({
    mutationFn: LoginHandler,
    onSuccess: (resp: LoginResponse) => OnSuccessfulLogin(resp),
  });
  const authstore = useAuthStore();

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    mutation.mutate(data);
  };

  const OnSuccessfulLogin = (resp: LoginResponse) => {
    if (
      resp.data.tokenType === "Bearer" &&
      (resp.data.token != null || resp.data.token != "")
    ) {
      authstore.setToken(resp.data.token);
    }
    // navigate to the boards page
  };

  const onCancel = () => {
    setValue("username", "");
    setValue("password", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet className="w-full   max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              type="text"
              placeholder="jhon_34"
              {...register("username", {
                required: true,
                maxLength: 64,
                minLength: 8,
              })}
            />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
            {errors.username && (
              <FieldDescription>This field is required</FieldDescription>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: true,
                maxLength: 64,
                minLength: 8,
              })}
            />
            {errors.password && (
              <FieldDescription>This field is required</FieldDescription>
            )}
          </Field>
          <Field orientation="horizontal">
            {mutation.isPending ? (
              <Button variant={"ghost"}>Signing in...</Button>
            ) : (
              <Button type="submit">Login</Button>
            )}
            <Button variant="outline" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
