import type { Metadata } from "next";

import GlobalIntro from "./components/GlobalIntro";
import GlobalReachBanner from "./components/GlobalReachBanner";
import OperateGlobally from "./components/OperateGlobally";
import PresenceEnables from "./components/PresenceEnables";
import WhereWeOperate from "./components/WhereWeOperate";

export const metadata: Metadata = {
  title: "Global Reach – Zoiko Group | Connecting Worldwide",
  description:
    "From Africa to Asia, Zoiko Group’s global presence fosters inclusive growth, industry innovation, and ethical leadership across international markets.",
};

export default function GlobalReachPage() {
  return (
    <>
      <GlobalReachBanner />
      <GlobalIntro />
      <PresenceEnables />
      <OperateGlobally />
      <WhereWeOperate />
    </>
  );
}
