import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
    const email = request.nextUrl.searchParams.get('email');

    if (!email) {
        return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    try {
        const response = await fetch(
            `https://rapid-email-verifier.fly.dev/api/validate?email=${encodeURIComponent(email)}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            }
        );

        if (!response.ok) {
            // If external API fails, return a pass-through response
            return NextResponse.json({
                email,
                validations: {
                    syntax: true,
                    domain_exists: true,
                    mx_records: true,
                    mailbox_exists: true,
                    is_disposable: false,
                    is_role_based: false,
                },
                score: 100,
                status: 'VALID',
            });
        }

        const data: EmailVerificationResponse = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Email verification API error:', error);
        // Fail open - allow form submission if API is down
        return NextResponse.json({
            email,
            validations: {
                syntax: true,
                domain_exists: true,
                mx_records: true,
                mailbox_exists: true,
                is_disposable: false,
                is_role_based: false,
            },
            score: 100,
            status: 'VALID',
        });
    }
}
