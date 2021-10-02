import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./newsletter-form";



export default function NewsLetterFooter() {

    return (
        <footer>
            <MailchimpSubscribe
                url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
                render={({ subscribe, status, message, onValidated }) => (
                    <NewsLetterForm 
                        { ...{subscribe, status, message} } 
                        onValidated={data => subscribe(data)}
                        />
                )}
            
            />
        </footer>
    );
}
