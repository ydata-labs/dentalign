interface EmailValidation {
    syntax: boolean;
    domain_exists: boolean;
    mx_records: boolean;
    mailbox_exists: boolean;
    is_disposable: boolean;
    is_role_based: boolean;
}

interface EmailVerificationResponse {
    email: string;
    validations: EmailValidation;
    score: number;
    status: string;
}

export interface EmailVerificationResult {
    isValid: boolean;
    errorMessage: string;
}

export async function verifyEmail(email: string): Promise<EmailVerificationResult> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(
            `/api/verify-email?email=${encodeURIComponent(email)}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                },
                signal: controller.signal,
            }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
            // If API fails, allow form submission (fail open)
            return { isValid: true, errorMessage: "" };
        }

        const data: EmailVerificationResponse = await response.json();

        // Check validation results and return appropriate error messages
        if (!data.validations.syntax) {
            return {
                isValid: false,
                errorMessage: "Het e-mailadres is niet correct opgemaakt. Controleer het formaat.",
            };
        }

        if (!data.validations.domain_exists) {
            return {
                isValid: false,
                errorMessage: "Het e-maildomein bestaat niet. Controleer of u het juiste domein heeft ingevoerd.",
            };
        }

        if (!data.validations.mx_records) {
            return {
                isValid: false,
                errorMessage: "Dit e-maildomein kan geen berichten ontvangen. Gebruik een ander e-mailadres.",
            };
        }

        if (!data.validations.mailbox_exists) {
            return {
                isValid: false,
                errorMessage: "Dit e-mailadres lijkt niet te bestaan. Controleer of u het juiste adres heeft ingevoerd.",
            };
        }

        if (data.validations.is_disposable) {
            return {
                isValid: false,
                errorMessage: "Tijdelijke e-mailadressen zijn niet toegestaan. Gebruik een permanent e-mailadres.",
            };
        }

        if (data.status !== "VALID" || data.score < 50) {
            return {
                isValid: false,
                errorMessage: "Dit e-mailadres kon niet worden geverifieerd. Controleer het adres of gebruik een ander.",
            };
        }

        return { isValid: true, errorMessage: "" };
    } catch (error) {
        // If verification fails due to network issues, allow form submission (fail open)
        console.error("Email verification error:", error);
        return { isValid: true, errorMessage: "" };
    }
}
