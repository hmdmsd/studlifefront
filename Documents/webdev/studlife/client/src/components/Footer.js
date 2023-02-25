import React from "react";

import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <div className="w-full bg-violet-700">
      <div className="container mx-auto px-8">
        <div className="mt-8 flex w-full flex-row flex-wrap justify-between py-6">
          <div className="mx-4 my-4 flex flex-col md:my-0">
            <div className="text-grey-200 mb-1 font-semibold">Company</div>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="Privacy"
            >
              Privacy
            </a>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="Terms"
            >
              Terms
            </a>
            <a
              href="aaa"
              target="_blank"
              className="my-1 text-white no-underline"
              title="Roadmap"
            >
              Roadmap
            </a>
            <a
              href="aaa"
              className="my-1 text-white no-underline"
              title="Status"
            >
              Status
            </a>
          </div>
          <div className="mx-4 my-4 flex flex-col md:my-0">
            <div className="text-grey-200 mb-1 font-semibold">Services</div>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="Security"
            >
              Apartments Rental
            </a>
            <a
              href="aaa"
              className="mt-1 text-white no-underline"
              title="Terms"
            >
              Used Furnitures sale
            </a>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="Self-hosting"
            >
              Room-mate Finder
            </a>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="Donate"
            >
              Others
            </a>
          </div>
          <div className="mx-4 my-4 flex flex-col md:my-0">
            <div className="text-grey-200 mb-1 font-semibold">Support</div>
            <a href="aaa" className="my-1 text-white no-underline " title="FAQ">
              FAQ
            </a>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="Help Centre"
            >
              Help Centre
            </a>
            <a
              href="aaa"
              className="my-1 text-white no-underline "
              title="contact"
            >
              Contact
            </a>
          </div>
          <div className="mx-4 my-4 flex items-center md:my-0">
            <a
              href="aaa"
              target="_blank"
              className="mr-4 text-white no-underline"
              title="Facebook"
            >
              <img src={facebookIcon} alt="" className="h-6 w-6" />
            </a>
            <a
              href="aaa"
              target="_blank"
              className="mr-4 text-white no-underline"
              title="Instagram"
            >
              <img src={instagramIcon} alt="" className="h-6 w-6" />
            </a>
            <a
              href="aaa"
              target="_blank"
              className="text-white no-underline"
              title="Youtube"
            >
              <img src={youtubeIcon} alt="" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
