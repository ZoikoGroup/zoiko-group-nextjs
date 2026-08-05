import Image from "next/image";

import ConsultationForm from "@/components/consultation/ConsultationForm";
import mailIcon from "@/public/contact-us/mail.png";
import openMapIcon from "@/public/contact-us/open-map.png";
import phoneIcon from "@/public/contact-us/phone.png";
import advisorImage from "@/public/home/reach-out.png";
import streetIcon from "@/public/contact-us/street.png";

const PHONE = "(800)484-5574";
const EMAIL = "info@zoikogroup.com";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1401+21st+Street+Sacramento+CA+95811";

const cardClass =
  "flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-6 text-center";

export default function ContactDetails() {
  return (
    <section className="bg-[#f0f7fe] py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_400px] lg:gap-14">
        <div>
          <p className="max-w-[760px] text-[17px] leading-relaxed text-brand-muted">
            Zoiko Group welcomes strategic dialogue across industries, markets,
            and innovation platforms. Whether you&apos;re exploring
            partnerships, seeking a solution, or requesting a consultation, our
            global teams are here to support your next move.
          </p>

          <p className="mt-10 max-w-[760px] text-[17px] leading-relaxed font-bold text-brand-deep">
            For enterprise inquiries, partnership discussions, or platform
            support our advisory and technical teams are ready to engage. We
            respond within 1 business day.
          </p>

          <div className="mt-14 flex flex-col gap-6 sm:flex-row">
            <Image
              src={advisorImage}
              alt="A Zoiko Group advisor taking a call at their desk"
              sizes="(max-width: 640px) 100vw, 350px"
              className="h-auto w-full rounded-md object-cover sm:h-[265px] sm:w-[350px]"
            />

            <ul className="grid flex-1 grid-cols-2 gap-5">
              <li className={cardClass}>
                <Image
                  src={phoneIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 object-contain"
                />
                <a
                  href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                  className="text-[13px] text-brand-muted"
                >
                  {PHONE}
                </a>
              </li>

              <li className={cardClass}>
                <Image
                  src={mailIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 object-contain"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[13px] break-all text-brand-muted"
                >
                  {EMAIL}
                </a>
              </li>

              <li className={cardClass}>
                <Image
                  src={streetIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 object-contain"
                />
                <address className="text-[13px] not-italic text-brand-muted">
                  1401 21st Street, Ste R, Sacramento, CA 95811
                </address>
              </li>

              <li className={cardClass}>
                <Image
                  src={openMapIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto object-contain"
                />
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-brand-muted underline"
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
