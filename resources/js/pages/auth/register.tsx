import { Head } from '@inertiajs/react';
import TextLink from '@/components/text-link';
import { login } from '@/routes';

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <div className="flex flex-col gap-6 text-center">
                <p className="text-sm text-muted-foreground">
                    New user registration is currently disabled.
                </p>
                <TextLink href={login()}>Log in with an existing account</TextLink>
            </div>
        </>
    );
}

Register.layout = {
    title: 'Registration disabled',
    description: 'Please log in with an existing account',
};
