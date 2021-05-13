import React from "react";
// DATA Files
import {dataNavbar, dataPortfolio, dataClients}  from "data/index";
// Images
import imgTitle from "../../assets/images/title-bg/title-bg-5.jpg";
// Components
import HeaderSocial from "../../components/Header/HeaderSocial";
import PageTitleOne from "../../components/PageTitle/PageTitleOne";
import PortfolioOne from "../../components/Portfolio/PortfolioOne";
import FooterTwo from "../../components/Footer/FooterTwo";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";

const PortfolioPage = () => (
  <>
    <HeaderSocial data={dataNavbar} />
    <PageTitleOne title="Portfolio" image={imgTitle} />
    <PortfolioOne
      data={dataPortfolio}
      filter={true}
      categories={[
        "Branding",
        "Creative Design",
        "Web Design",
        "Stationery",
        "Photography",
      ]}
    />
    <ClientsCarousel data={dataClients} />
    <FooterTwo />
  </>
);

export default PortfolioPage;
