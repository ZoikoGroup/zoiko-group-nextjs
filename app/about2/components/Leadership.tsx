import Image from "next/image";

import Reveal from "./Reveal";
import { leadershipMembers } from "./data";

export default function Leadership() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Leadership
          </h2>
        </Reveal>

        <hr className="mt-6 border-t border-brand-divider" />

        <ul className="mt-8 space-y-8">
          {leadershipMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <li className="group flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full shadow-card">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-deep">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-teal">
                    {member.role}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted">
                    {member.bio}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
