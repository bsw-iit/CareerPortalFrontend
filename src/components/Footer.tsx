import { useNavigate } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, School, Phone, BookOpen, Building2 } from "lucide-react"
export default function Footer() {
    const navigate = useNavigate();
    const BSWClick=()=>{
        navigate('/');
    }
    return (
        <footer className="bg-[#0B2937] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Section */}
                    <div >
                        <h2 onClick={BSWClick} className="text-3xl hover:cursor-pointer font-bold mb-4 text-white">BSW Career Portal</h2>
                        <div className="flex gap-4 mb-2">
                            <a
                                href="https://x.com/bswiitd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="https://www.facebook.com/boardforstudentwelfare/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="https://instagram.com/bsw_iitd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/bsw-iitd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                        <p className="mb-4">
                            Conceptualized by{" "}
                            <a href="https://www.linkedin.com/in/tanisi-mishra/" target="_blank" className="text-teal-400 hover:text-teal-300">
                            Tanisi Mishra
                            </a>{" "}
                        </p> 
                        <p className="mb-4">
                            Co-Created by{" "}
                                <a href="https://www.linkedin.com/in/vanshika-tripathi-0b8b1a24b/" target="_blank" className="text-teal-400 hover:text-teal-300">
                            Vanshika Tripathi 
                            </a>{" "}
                            and{" "}
                                <a href="https://www.linkedin.com/in/advik-gupta/" target="_blank" className="text-teal-400 hover:text-teal-300">
                            Advik Gupta
                            </a>
                        </p>                           
                    </div>

                    {/* Middle Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-teal-400">Useful Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://bsw.iitd.ac.in/mental_health.php" target="_blank" className="flex items-center gap-2 hover:text-teal-400">
                                    <School className="w-4 h-4" />
                                    YourDOST & SCS
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-teal-400">
                                    <Phone className="w-4 h-4" />
                                    Emergency Contacts
                                </a>
                            </li>
                            <li>
                                <a href="https://eacademics.iitd.ac.in/sportal/login" target="_blank" className="flex items-center gap-2 hover:text-teal-400">
                                    <BookOpen className="w-4 h-4" />
                                    eAcademics
                                </a>
                            </li>
                            <li>
                                <a href="https://webmail.iitd.ernet.in/roundcube/" target="_blank" className="flex items-center gap-2 hover:text-teal-400">
                                    <Mail className="w-4 h-4" />
                                    Webmail
                                </a>
                            </li>
                            <li>
                                <a href="https://moodle.iitd.ac.in/login/index.php" target="_blank" className="flex items-center gap-2 hover:text-teal-400">
                                    <Globe className="w-4 h-4" />
                                    Moodle
                                </a>
                            </li>
                            <li>
                                <a href="https://ngu.iitd.ac.in/index" target="_blank" className="flex items-center gap-2 hover:text-teal-400">
                                    <Building2 className="w-4 h-4" />
                                    NGU
                                </a>
                            </li>
                            <li>
                                <a href="https://helpline.iitd.ac.in/" target="_blank" className="flex items-center gap-2 hover:text-teal-400">
                                    <Phone className="w-4 h-4" />
                                    IITD Helpline
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-teal-400">Feedback</h3>
                        <p className="mb-2">Please give us your suggestions and feedback.</p>
                        <p className="mb-4">Constructive Criticism will be appreciated.</p>
                        <a href="https://docs.google.com/forms/u/0/d/1_QZNApfKMbt6IW34kROkuoYN-hf4XRWArD_l2J0xQMw/viewform?edit_requested=true" target="_blank" className="text-teal-400 hover:text-teal-300">
                            Click here
                        </a>
                        <span className="text-gray-300"> for the feedback form</span>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-2 text-white">BSW Constitution</h3>
                            <p>
                                <a href="https://bsw.iitd.ac.in/stuff/Constitution.pdf" target="_blank" className="text-teal-400 hover:text-teal-300">
                                    Read
                                </a>{" "}
                                our Constitution
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                    <p className="mb-2">
                        © Copyright <span className="font-semibold">BSW 2025</span> All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}