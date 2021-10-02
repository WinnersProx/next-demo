import { SyntheticEvent, useState } from "react";


type NewsLetterStatus = "sending" | "error" | "success";

export interface INewsLetterFormProps {
    subscribe: (...params: any) => any,
    status: NewsLetterStatus;
    message: string;
    onValidated: (...params) => any
}

export default function NewsLetterForm({ subscribe, status, message, onValidated }: INewsLetterFormProps) {

    const [email, setEmail] = useState("");


    const handleFormSubmission = (event: SyntheticEvent) => {
        event.preventDefault();

        if (!email) return;

        return onValidated({
            EMAIL: email,
            // NAME: name
        });
    };

    return (
        <form method="POST" onSubmit={handleFormSubmission}>
            <div className="errors">
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && (
                    <div
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{ __html: 'Something went wrong, try again' }}
                    />
                )}
                {status === "success" && (
                    <div
                        style={{ color: "green" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control" name="email"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                />
            </div>
            <div className="form-group">
                <button>Subscribe</button>
            </div>
        </form>
    );
}

