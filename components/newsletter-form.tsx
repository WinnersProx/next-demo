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
    const [formTags, setTags] = useState([]);

    const tags = ['Weekly', 'Daily', 'Minutely'];


    const handleFormSubmission = (event: SyntheticEvent) => {
        event.preventDefault();

        if (!email) return;

        return onValidated({
            EMAIL: email,
            // NAME: name
            group: {
                "29862" : [
                    2
                ]
            }
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
                <div className="tags-list">
                    {
                        tags.map((tag, index) => (
                            <div key={index}>
                                <input type="checkbox" value="8" name="group[01245][8]" id={`tag-${index}`} onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                    if(!e.currentTarget.checked) {
                                        if(formTags.includes(tag)) setTags(formTags.filter(t => tag !== t));
                                        return;
                                    };
                            
                                    setTags([ ...formTags, tag]);
                                    console.log('tags', formTags);

                                }} />
                                <label htmlFor={`tag-${index}`} >{tag}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="form-group">
                <button>Subscribe</button>
            </div>
        </form>
    );
}

