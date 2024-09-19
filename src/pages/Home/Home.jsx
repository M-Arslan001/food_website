/* eslint-disable no-unused-vars */
// src/pages/Home/Home.tsx
import React from "react";
import Header from "../../components/Header/Header";
import { ImagesSlider } from "../../components/ui/images-slider";
import Overlay from "../../components/Overlay-bg/Overlay-bg";
import { SliderData } from "../../sliderConfig/config";
import Title_Section from "../../components/Menu_Title_section/Title_Section";
import { MenuProvider } from "../../context_api/MenuData";
import Discount_Banner from "../../components/Discount_section/Discount_Banner";

const Home = () => {
  return (
    <>
      <MenuProvider>
        <Header />
        <div className="relative">
          <ImagesSlider
            images={SliderData.images}
            autoplay={true}
            direction="up"
            className="h-[680px] w-full"
            text={SliderData.text}
            buttonText={SliderData.button}
          />
          <Overlay height="70px" />
        </div>

        <Title_Section />
        <Discount_Banner />
      </MenuProvider>
    </>
  );
};

export default Home;
