"use client";

import Hero from "@/components/organisms/Hero/Hero";
import { useTranslations } from "next-intl";

const GardenHotel: React.FC = () => {
  const t = useTranslations();

  return (
    <>
      <Hero
        images={[
          "https://zgsybjpqqneqcazrjaxh.supabase.co/storage/v1/object/public/garden-hotel//Hero1.jpg",
          "https://zgsybjpqqneqcazrjaxh.supabase.co/storage/v1/object/public/garden-hotel//DSCF9193.jpg",
        ]}
        title={t("hotel")}
      />
    </>
  );
};
export default GardenHotel;
