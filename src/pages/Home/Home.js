import ScrollMenuHome from "./ScrollMenuHome";
import CompanyComponent from "./CompanyComponent";
import BusinessPartner from "./BusinessPartner";
import Banner from "../../layout/Banner";
import ServiceComponent from "./ServiceComponent";
import ManagementComponent from "./ManagementComponent";
import ClientExperiences from "./ClientExperiences";
function Home() {
  return (
    <>
      <Banner />
      <main>
        <div className="app">
          <CompanyComponent id="section1" />
          <ManagementComponent id="section2" />
          <ServiceComponent id="section3" />
          <BusinessPartner id="section4" />
          <ClientExperiences id="section5" />
          <ScrollMenuHome />
        </div>
      </main>
    </>
  );
}

export default Home;
