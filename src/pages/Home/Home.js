import ScrollMenuHome from "./ScrollMenuHome";
import CompanyComponent from "./CompanyComponent";
import PartnerComponent from "./PartnerComponent";
import ClientComponent from "./ClientComponent";
import Banner from "../../layout/Banner";
import ServiceComponent from "./ServiceComponent";
import ManagementComponent from "./ManagementComponent";
function Home() {
  return (
    <>
      <Banner />
      <main>
        <div className="app">
          <CompanyComponent id="section1" />
          <ManagementComponent id="section2" />
          <ServiceComponent id="section3" />
          <ClientComponent id="section4" />
          <PartnerComponent id="section5" />
          <ScrollMenuHome />
        </div>
      </main>
    </>
  );
}

export default Home;
