import { FaFacebookF, FaTwitter } from "react-icons/fa";
import westernuion from "../assets/westernunion.png";
import mastercardImg from "../assets/mastercardImg.png";
import paypallImg from "../assets/paypalImg.png";
import visaImg from "../assets/visaImg.png";
import LogoImg from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#BCDDFE] text-gray-800 py-10 px-6 pt-25 pb-25">
      <div className="max-w-full lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 md:ml-40">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <img src={LogoImg} className="w-10" alt="Logo" />
            <h2 className="text-xl font-semibold">E-Comm</h2>
          </div>
          <p className="text-xs leading-[1.4]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

      
        <div className="ml-25">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p className="text-xs leading-[1.4] mb-2">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="ml-30">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm leading-6">
            E-Comm, 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>

       
        <div></div>
      </div>

     
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:ml-40">
        {["Information", "Service", "My Account", "Our Offers"].map((section) => (
          <div key={section}>
            <h4 className="font-semibold mb-3">{section}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Information</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
            </ul>
          </div>
        ))}
      </div>

    
      <div className="border-t border-white mt-10 ml-40 mr-50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-xs text-gray-600 text-center md:text-left">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <img src={westernuion} alt="Western Union" className="h-10" />
          <img src={mastercardImg} alt="Mastercard" className="h-10" />
          <img src={paypallImg} alt="PayPal" className="h-10" />
          <img src={visaImg} alt="Visa" className="h-10" />
        </div>
      </div>
    </footer>
  );
}
