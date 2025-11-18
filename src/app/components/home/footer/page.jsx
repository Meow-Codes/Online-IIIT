import callicon from '../../../assets/home/footer/callnew.png'
import emailicon from '../../../assets/home/footer/emailnew.png'
import Image from 'next/image';

export default function Footer() {

    return (
        <div className="md:pb-10 lg:pb-0" id='contact'>
            <footer className="relative py-6 bg-[#000] text-center" data-scroll-index="4">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-6 items-center justify-center text-white">
                        <div className="flex items-center gap-2 text-lg">
                            <Image src={callicon} alt="Call Icon" width="40" />
                            <a href="tel:919240013641" className="hover:underline">+91-9240013641</a>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <Image src={emailicon} alt="Email Icon" width="40" />
                            <a href="mailto:support.dsai@iiitdwd.ac.in" className="hover:underline">
                                support.dsai@iiitdwd.ac.in
                            </a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-b-1 border-gray-50" ></div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 text-white text-center text-lg">
                        <p>Copyright © IIIT Dharwad 2025, All Rights Reserved</p>
                        <a
                            href="/refund-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Refund Policy
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
