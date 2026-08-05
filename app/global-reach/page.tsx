import type { Metadata } from "next";

import GlobalIntro from "./components/GlobalIntro";
import GlobalReachBanner from "./components/GlobalReachBanner";
import OperateGlobally from "./components/OperateGlobally";
import PresenceEnables from "./components/PresenceEnables";
import WhereWeOperate from "./components/WhereWeOperate";

export const metadata: Metadata = {
  title: "Our Global Reach — Zoiko Group",
  description:
    "Zoiko Group builds businesses, platforms and brands serving diverse markets, cultures and communities across North America, Europe, Asia and Africa.",
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
