"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircleIcon, ShieldUserIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod/v3";
import { signInAction } from "./actions";

const signInFormSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail institucional válido" }),
  password: z.string().min(6, { message: "Digite uma senha válida" }),
});

type SignInFormSchema = z.infer<typeof signInFormSchema>;

type SignInResponse = {
  success: boolean;
  message: string;
  isError: boolean;
};

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  const router = useRouter();

  const { isPending, mutateAsync, data } = useMutation<
    SignInResponse,
    Error,
    SignInFormSchema
  >({
    mutationKey: ["sign-in"],
    mutationFn: signInAction,
  });

  async function handleSubmitForm({ email, password }: SignInFormSchema) {
    const { success } = await mutateAsync({
      email,
      password,
    });

    if (success) {
      router.push("/");
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {data?.isError && (
        <Alert variant="destructive">
          <ShieldUserIcon />
          <AlertTitle>Erro ao acessar a conta</AlertTitle>
          <AlertDescription>{data.message}</AlertDescription>
        </Alert>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Acesse sua conta</CardTitle>
          <CardDescription>
            Entre com seu de e-mail e senha abaixo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao.silva@cps.sp.gov.br"
                  {...register("email")}
                />
                {errors?.email && (
                  <span className="text-xs text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                />
                {errors?.password && (
                  <span className="text-xs text-destructive">
                    {errors.password.message}
                  </span>
                )}
              </Field>
              <Field>
                <Button type="submit" disabled={isPending}>
                  {isPending ? <LoaderCircleIcon /> : "Entrar na conta"}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;Não tem uma conta?{" "}
                  <Link href="/sign-up">Cadastre-se</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
