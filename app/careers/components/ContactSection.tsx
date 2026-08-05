import Image from "next/image";

import mailIcon from "@/public/home/mail.png";
import openMapIcon from "@/public/home/open-map.png";
import phoneIcon from "@/public/home/phone.png";
import reachOutImage from "@/public/home/reach-out.png";
import streetIcon from "@/public/home/street.png";
import ConsultationForm from "./ConsultationForm";
import { CheckCircleIcon } from "./icons";

const reasons = [
  "Book time with our support or advisory team at your convenience.",
  "Contact the right team across tech, telecom, finance, or legal services.",
  "Get tailored solutions or pricing for your business needs.",
  "Interested in collaboration? Reach our enterprise and channel partnerships team.",
];

const PHONE = "(800) 484-9374";
const EMAIL = "info@zoikogroup.com";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1401+21st+Street+Sacramento+CA+95811";

export default function ContactSection() {
  return (
    <section className="bg-brand-skybg py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy lg:text-3xl">
            Reach out to our global team
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-muted">
            For general enquiries, partnership discussions or platform support—
            our global teams are ready to assist you.
          </p>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                <span className="text-sm text-brand-muted">{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-start">
            <Image
              src={reachOutImage}
              alt="A Zoiko Group support advisor at their desk"
              sizes="(max-width: 640px) 100vw, 340px"
              className="h-auto w-full rounded-2xl object-cover"
            />

            <ul className="grid grid-cols-2 gap-4">
              <li className="flex flex-col items-center gap-2 rounded-xl bg-white px-3 py-5 text-center">
                <Image
                  src={phoneIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
                <a
                  href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                  className="text-xs text-brand-muted hover:text-brand-teal"
                >
                  {PHONE}
                </a>
              </li>

              <li className="flex flex-col items-center gap-2 rounded-xl bg-white px-3 py-5 text-center">
                <Image
                  src={mailIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xs break-all text-brand-muted hover:text-brand-teal"
                >
                  {EMAIL}
                </a>
              </li>

              <li className="flex flex-col items-center gap-2 rounded-xl bg-white px-3 py-5 text-center">
                <Image
                  src={streetIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
                <address className="text-xs not-italic text-brand-muted">
                  1401 21st Street, Ste R, Sacramento, CA 95811
                </address>
              </li>

              <li className="flex flex-col items-center gap-2 rounded-xl bg-white px-3 py-5 text-center">
                <Image
                  src={openMapIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto"
                />
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-muted hover:text-brand-teal"
                >
                  Open Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}
