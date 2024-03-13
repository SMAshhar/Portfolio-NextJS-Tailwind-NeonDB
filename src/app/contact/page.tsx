import ContactComponent from "@/components/Contact/Contact";
import Form from "@/components/Contact/Contact2";
import { Metadata } from 'next'

// The contactUs page will take in data from user and save it in the database. 
// See the file "/api/contact" for more API details
// See the file "@/components/contactUs/Form" for more details on page's functionality.

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact Us and we will definitely get back to you.',
}

export default function Contact () {
    return (
        <div className="w-full h-screen py-16 lg:flex items-center justify-center fixed bg-slate-900/80 bg-blend-color-dodge">
            <ContactComponent />
            {/* <Form /> */}
        </div>
    )
}