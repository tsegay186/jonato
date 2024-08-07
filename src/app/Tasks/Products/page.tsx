import React from "react";
import kasena from "/public/kasana.jpg";
import anna200 from "/public/anna200.png";
import anna130 from "/public/anna130.jpg";
import van from "/public/van.png";
import AppAddCard from "@/app/Components/AppAddCard";

const page = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <AppAddCard adCardImageAlt="image" adCardImageSrc={kasena} adCardTitle="Kas Ana " />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={anna200} adCardTitle="Ana 200" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={anna130} adCardTitle="Ana 130" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={van} adCardTitle="Kas Van" />
    </div>
  );
};

export default page;
