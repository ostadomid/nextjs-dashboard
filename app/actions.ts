"use server";

export async function subscribe(prevState: unknown, formData: FormData) {
    await new Promise((res) => setTimeout(res, 1000));
    const email = formData.get("email") as string;
    if (!email.includes("@")) {
        return {
            fieldValues: { email },
            fieldErrors: { email: "Invalid Email" },
        };
    }
    return { fieldValues: { email }, fieldErrors: {} };
}
