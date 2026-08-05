"use client";

import { useActionState } from "react";

import { initialConsultationState, requestConsultation } from "./actions";

const helpOptions = [
  "General Enquiry",
  "Partnership or Supplier",
  "Technical Support",
  "Press & Media",
  "Careers",
];

/* Height is kept out of the shared base so the textarea can be taller — with
   `h-11` baked in it overrode `rows` and rendered as a single-line box. */
const fieldBase =
  "w-full rounded-sm border border-brand-border px-4 py-3 text-sm leading-5 text-brand-deep outline-none placeholder:text-brand-border focus:border-brand-teal";
const fieldClass = `h-11 ${fieldBase}`;
const textareaClass = `h-28 resize-y ${fieldBase}`;

export default function ConsultationForm({
  title = "Schedule A Free Consultation",
}: {
  title?: string;
}) {
  const [state, formAction, pending] = useActionState(
    requestConsultation,
    initialConsultationState,
  );

  return (
    <div className="rounded-[20px] bg-white px-7 py-6 shadow-[0px_10px_25px_0px_rgba(54,95,104,0.10)]">
      <h3 className="text-xl leading-8 font-semibold text-brand-deep capitalize">
        {title}
      </h3>

      <form action={formAction} className="mt-5 space-y-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm leading-5 font-normal text-brand-slate"
          >
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm leading-5 font-normal text-brand-slate"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="companyEmail"
            className="mb-2 block text-sm leading-5 font-normal text-brand-slate"
          >
            Company Email
          </label>
          <input
            id="companyEmail"
            name="companyEmail"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="mb-2 block text-sm leading-5 font-normal text-brand-slate"
          >
            Company/ Organization
          </label>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="topic"
            className="mb-2 block text-sm leading-5 font-normal text-brand-slate"
          >
            How can we help you?
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select Option
            </option>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm leading-5 font-normal text-brand-slate"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="your message"
            className={textareaClass}
          />
        </div>

        {state.message && (
          <p
            aria-live="polite"
            className={`text-xs ${
              state.status === "error" ? "text-red-600" : "text-brand-muted"
            }`}
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-brand-deep px-10 py-3 text-base leading-6 font-semibold text-white capitalize disabled:opacity-60"
        >
          {pending ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
