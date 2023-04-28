import React from "react";
import { racing_sans_one } from "@/data";
import {
  MdWhatsapp,
  MdLocationOn,
  MdEmail,
  MdStoreMallDirectory,
  MdSend,
} from "react-icons/md";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section
      id="contactus"
      className="mx-2 md:container md:mx-auto md:max-w-screen-xl md:py-20"
    >
      <div className="rounded-3xl bg-neutral-400 pb-2 pt-10 shadow-xl md:px-10 md:pb-10">
        <h3
          className={`${racing_sans_one.className} mb-10 text-center text-3xl font-bold text-neutral-800`}
        >
          Contact Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-10 flex flex-col justify-center gap-y-4 px-5 md:mb-0 md:px-20">
            <h4 className="text-left font-semibold text-neutral-800">
              Any question, write us.
            </h4>
            <p className="text-neutral-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              excepturi ex iusto deserunt nesciunt sequi. Ad, odit aliquid!
            </p>
            <div className="flex items-center text-white">
              <MdWhatsapp className="mr-2 h-5 w-5 fill-white" />
              <span>725-450-8814 x814</span>
            </div>
            <div className="flex items-center text-white">
              <MdEmail className="mr-2 h-5 w-5 fill-white" />
              <span>company@email.com</span>
            </div>
            <div className="flex items-center text-white">
              <MdLocationOn className="mr-2 h-5 w-5 fill-white" />
              <span>Cambridgeshire, Belgium</span>
            </div>
            <div className="flex items-center text-white">
              <MdStoreMallDirectory className="mr-2 h-5 w-5 fill-white" />
              <span>Champlin Group</span>
            </div>
            {/* <MdSend /> */}
          </div>
          <div className="mx-2 rounded-3xl bg-white px-10 py-5 md:mx-0 ">
            <div>
              <form action="" className="flex flex-col gap-y-4">
                <div>
                  <label htmlFor="" className="text-xs">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                    className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-neutral-300 focus:ring-2 focus:ring-neutral-600"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xs">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address"
                    className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-neutral-300 focus:ring-2 focus:ring-neutral-600"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols={1}
                    placeholder="Message"
                    className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-neutral-300 focus:ring-2 focus:ring-neutral-600"
                    rows={4}
                  ></textarea>
                </div>
                <button className="inline-block self-end rounded-full bg-orange-500 px-5 py-2 text-sm text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
