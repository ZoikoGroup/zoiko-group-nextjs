import Image from "next/image";

import ConsultationForm from "@/components/consultation/ConsultationForm";
import mailIcon from "@/public/contact-us/mail.png";
import openMapIcon from "@/public/contact-us/open-map.png";
import phoneIcon from "@/public/contact-us/phone.png";
import streetIcon from "@/public/contact-us/street.png";
import advisorImage from "@/public/home/reach-out.png";

const reasons = [
  "Book time with our support or advisory team at your convenience.",
  "Contact the right team across tech, telecom, finance, or legal services.",
  "Get tailored solutions or pricing for your business needs",
  "Interested in collaboration? Reach our enterprise and channel partnerships team",
];

const PHONE = "(800)484-5574";
const EMAIL = "info@zoikogroup.com";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1401+21st+Street+Sacramento+CA+95811";

const cardClass =
  "flex h-[126px] flex-col items-center justify-center gap-2 rounded-2xl border border-brand-border bg-white px-2 text-center";

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-deep">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function PortfolioContact() {
  return (
    <section className="bg-brand-skybg py-16 lg:py-20">
      {/* Figma: 1200px content (120px margins at 1440) = 754px copy + 46px gap
          + 400px form. The form is the fixed track so it never gets starved. */}
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 lg:grid-cols-[1fr_400px] lg:gap-[46px]">
        <div>
          <h2 className="text-3xl font-semibold text-brand-deep capitalize lg:text-[40px] lg:leading-13">
            Reach Out to Our Global Team
          </h2>
          <p className="mt-2 max-w-[470px] text-base leading-7 font-normal text-brand-deep/60">
            Thank you for your interest in Zoiko Group. Complete the form and
            some will reach out shortly to you.
          </p>

          <ul className="mt-5 flex flex-col gap-6">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-base leading-8 font-normal text-brand-deep lg:text-lg">
                  {reason}
                </span>
              </li>
            ))}
          </ul>

          {/* Side by side needs 350 + 27 + ~380 of cards ≈ 757px, which the copy
              column only reaches once the container hits its 1200px cap — so it
              stacks below xl and matches Figma exactly from xl up. */}
          <div className="mt-12 grid gap-8 xl:grid-cols-[350px_1fr] xl:items-start xl:gap-[27px]">
            <Image
              src={advisorImage}
              alt="A Zoiko Group advisor taking a call at their desk"
              sizes="(max-width: 640px) 100vw, 350px"
              className="h-auto w-full max-w-[350px] rounded-md object-cover xl:h-[275px] xl:w-[350px]"
            />

            <ul className="grid grid-cols-2 gap-x-[28px] gap-y-[23px]">
              <li className={cardClass}>
                <Image
                  src={phoneIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 object-contain"
                />
                <a
                  href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                  className="text-base font-medium text-brand-deep/70"
                >
                  {PHONE}
                </a>
              </li>

              <li className={cardClass}>
                <Image
                  src={mailIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 object-contain"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-base font-medium break-all text-brand-deep/70"
                >
                  {EMAIL}
                </a>
              </li>

              <li className={cardClass}>
                <Image
                  src={streetIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 object-contain"
                />
                <address className="text-base font-medium text-brand-deep/70 not-italic">
                  1401 21st Street, Ste R, Sacramento, CA 95811
                </address>
              </li>

              <li className={cardClass}>
                <Image
                  src={openMapIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-auto object-contain"
                />
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-brand-deep/70 underline"
                >
                  Open Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ConsultationForm title="Connect with Our Global Advisors" />
      </div>
    </section>
  );
}
