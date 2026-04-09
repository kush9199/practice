import type { LoginInput } from "../types";

async function LoginHandler(data: LoginInput) {
    const response = await fetch("http://localhost:5500/api/v1/public/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: data.username,
            password: data.password
        })
    });
    return response.json();
}

async function SignupHandler(data: LoginInput) {
    const response = await fetch("http://localhost:5500/api/v1/public/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: data.username,
            password: data.password
        })
    });
    return response.json();

}

export { LoginHandler, SignupHandler };