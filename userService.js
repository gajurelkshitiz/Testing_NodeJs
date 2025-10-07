import { sendEmail } from "./mailer.js";

export function registerUser (user, mailerDep = mailer) {
    if (!user.email) throw new Error("Email Required!");

    mailerDep.sendEmail(user.email, "Welcome!");
    return {status: true}
}