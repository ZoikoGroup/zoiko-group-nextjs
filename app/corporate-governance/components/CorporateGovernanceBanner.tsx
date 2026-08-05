export default function CorporateGovernanceBanner() {
  return (
    <section className="bg-linear-46 from-brand-gradient-from to-brand-gradient-to py-16">
      <div className="mx-auto w-full max-w-310 px-6 text-center">
        {/* The legal pages set their banner at normal weight, unlike the
            semibold used elsewhere on the site. */}
        <h1 className="text-3xl font-normal text-white capitalize lg:text-4xl lg:leading-13">
          Corporate Governance
        </h1>
      </div>
    </section>
  );
}
