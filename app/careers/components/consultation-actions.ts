"use server";

export type ConsultationState = {
  status: "idle" | "error" | "unconfigured";
  message: string;
};

export const initialConsultationState: ConsultationState = {
  status: "idle",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function requestConsultation(
  _prevState: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const name = String(formData.get("name") ?? "").trim();
  const companyEmail = String(formData.get("companyEmail") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !companyEmail || !message) {
    return {
      status: "error",
      message: "Please fill in your name, company email and message.",
    };
  }

  if (!EMAIL_PATTERN.test(companyEmail)) {
    return {
      status: "error",
      message: "Please enter a valid company email address.",
    };
  }

  // TODO: deliver the enquiry — send an email, or post to the CRM / support
  // inbox. Until that is wired up this action deliberately does not report
  // success, so nobody assumes an enquiry was received.
  return {
    status: "unconfigured",
    message:
      "This form is not connected to a mailbox yet. Add your delivery integration in components/consultation/actions.ts.",
  };
}
