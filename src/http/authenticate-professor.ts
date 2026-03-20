import { api } from "./api-client";

interface AuthenticateProfessorRequest {
  email: string;
  password: string;
}

interface AuthenticateProfessorResponse {
  token: string;
}

export async function authenticateProfessor({
  email,
  password,
}: AuthenticateProfessorRequest) {
  const result = await api
    .post("professors/sessions", {
      json: {
        email,
        password,
      },
    })
    .json<AuthenticateProfessorResponse>();

  return result;
}
