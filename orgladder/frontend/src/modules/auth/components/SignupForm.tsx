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
import type { SignupInput, SignupResponse } from "../types";
import { LoginHandler } from "../services/AuthService";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignupInput>();
  const mutation = useMutation({
    mutationFn: LoginHandler,
    onSuccess: (resp: SignupResponse) => OnSuccessSignup(resp),
  });

  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    mutation.mutate(data);
  };

  const OnSuccessSignup = (resp: SignupResponse) => {
    // navigate to the login page after displaying the message
  };

  const onCancel = () => {
    setValue("username", "");
    setValue("password", "");
    setValue("email", "");
    setValue("firstName", "");
    setValue("lastName", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet className="w-full max-w-xs">
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
              <FieldDescription>password is invalid</FieldDescription>
            )}
            {mutation.isError ? <FieldDescription>{mutation.data}</FieldDescription>: ""}
          </Field>
          <Field orientation="horizontal">
            {mutation.isPending ? (
              <Button variant={"ghost"}>Signing in...</Button>
            ) : (
              <Button type="submit">Signup</Button>
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
