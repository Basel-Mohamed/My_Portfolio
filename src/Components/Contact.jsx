import React from "react";
import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <div id="contact" className="pb-1.5 ">
      <h2 className="mx-10 text-center text-4xl py-3">Get in Touch</h2>
      <div className="flex flex-col text-center lg:justify-center lg:gap-2 lg:flex-row">
        <p className="my-3">{CONTACT.address}</p>

        <a className="my-3" href="tel:201007337686">
          {CONTACT.phoneNo}
        </a>

        <a className="my-3" href="mailto:baselmohamed937@gmail.com">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
