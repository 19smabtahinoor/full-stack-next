import VerificationEmail from "@/emails/VerificationEmail";
import { resend } from "@/lib/resend";


import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    vertifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Abtahi <smabtahinoor@gmail.com>',
            to: email,
            subject: 'Mystry Message | Verification Code',
            react: VerificationEmail({ username, otp: vertifyCode }),
        });

        return { success: true, message: 'Verification email send successfully.' };

    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return { success: false, message: 'Failed to send verification email' };
    }
}