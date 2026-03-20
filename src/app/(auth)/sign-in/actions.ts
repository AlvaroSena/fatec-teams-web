"use server";

import { authenticateProfessor } from "@/http/authenticate-professor";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

interface SignInActionParams {
  email: string;
  password: string;
}

export async function signInAction({ email, password }: SignInActionParams) {
  try {
    const { token } = await authenticateProfessor({
      email,
      password,
    });

    (await cookies()).set("token", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { error } = await err.response.json();

      return {
        success: false,
        message: error,
        isError: true,
      };
    }

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      isError: true,
    };
  }

  return {
    success: true,
    message: null,
    isError: false,
  };
}
