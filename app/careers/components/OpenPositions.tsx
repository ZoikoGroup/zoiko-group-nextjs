"use client";

import { useMemo, useState } from "react";

import { openingLocations, openings } from "./careers-data";
import { MapPinIcon, SearchIcon } from "./icons";

export default function OpenPositions() {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState({ keywords: "", location: "" });

  const results = useMemo(() => {
    const needle = query.keywords.trim().toLowerCase();

    return openings.filter((opening) => {
      const matchesLocation =
        !query.location || opening.location === query.location;
      const matchesKeywords =
        !needle ||
        `${opening.title} ${opening.company}`.toLowerCase().includes(needle);

      return matchesLocation && matchesKeywords;
    });
  }, [query]);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto w-full max-w-310 px-6">
        <h2 className="text-center text-2xl font-semibold text-black lg:text-4xl">
          Check out our Open Positions
          <br className="hidden sm:block" /> to see where you fit in!
        </h2>

        <hr className="mt-10 border-brand-surface" />

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setQuery({ keywords, location });
          }}
          className="mx-auto mt-6 flex w-full max-w-[1120px] flex-col gap-4 rounded-xl border-2 border-black/20 bg-white p-4 lg:flex-row lg:items-center lg:gap-0 lg:p-3"
        >
          <label className="flex flex-1 items-center gap-3 px-2">
            <SearchIcon className="size-6 shrink-0 text-slate-400" />
            <span className="sr-only">Job title, company, or keywords</span>
            <input
              value={keywords}
              onChange={(event) => setKeywords(event.target.value)}
              placeholder="Job Title, Company, or Keywords"
              className="w-full py-2 text-base leading-8 outline-none placeholder:text-slate-400 lg:text-lg"
            />
          </label>

          <span
            aria-hidden="true"
            className="hidden h-8 w-0.5 rounded-[5px] bg-neutral-300 lg:block"
          />

          <label className="flex flex-1 items-center gap-3 px-2">
            <MapPinIcon className="size-6 shrink-0 text-slate-400" />
            <span className="sr-only">Location</span>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="w-full bg-transparent py-2 text-base leading-8 text-slate-400 outline-none lg:text-lg"
            >
              <option value="">Select Location</option>
              {openingLocations.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="rounded-xl bg-brand-teal px-10 py-3 text-base leading-6 font-bold text-white lg:w-40"
          >
            Search
          </button>
        </form>

        <div aria-live="polite" className="mt-16">
          {results.length === 0 ? (
            <p className="text-center text-lg font-normal text-black/40 lg:text-2xl">
              Nothing to show here right now
            </p>
          ) : (
            <ul className="mx-auto grid max-w-[1120px] gap-4">
              {results.map((opening) => (
                <li
                  key={opening.id}
                  className="rounded-xl border border-brand-surface px-6 py-5"
                >
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {opening.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    {opening.company} &mdash; {opening.location}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
