import "./App.css";
import { FreePricing, PlusPricing, ProPricing } from "./components/Pricing";

function App() {
  const pricingData = [
    {
      title: "FREE",
      plan: 0,
      noOfUsers: "Single",
      strgAmount: 5,
      noOfProjects: "Unlimited",
      comAcc: "Community Access",
      privAcc: "Unlimited Private Projects",
      phnSup: "Dedicated Phone Support",
      subDom: "Free subdomains",
      statRep: "Monthly Status Reports",

    },
    {
      title: "PLUS",
      plan: 9,
      noOfUsers: "5",
      strgAmount: 50,
      noOfProjects: "Unlimited",
      comAcc: "Community Access",
      privAcc: "Unlimited Private Projects",
      phnSup: "Dedicated Phone Support",
      subDom: "Free subdomains",
      statRep: "Monthly Status Reports",
    },
    {
      title: "PRO",
      plan: 49,
      noOfUsers: "Unlimited",
      strgAmount: 150,
      noOfProjects: "Unlimited",
      comAcc: "Community Access",
      privAcc: "Unlimited Private Projects",
      phnSup: "Dedicated Phone Support",
      subDom: "Free subdomains",
      statRep: "Monthly Status Reports",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        {/* FREE CARD */}
        <FreePricing
          title={pricingData[0].title}
          plan={pricingData[0].plan}
          noOfUsers={pricingData[0].noOfUsers}
          strgAmount={pricingData[0].strgAmount}
          noOfProjects={pricingData[0].noOfProjects}
          comAcc={pricingData[0].comAcc}
          privAcc={pricingData[0].privAcc}
          phnSup={pricingData[0].phnSup}
          subDom={pricingData[0].subDom}
          statRep={pricingData[0].statRep}
        />
        {/* PLUS CARD */}
        <PlusPricing
          title={pricingData[1].title}
          plan={pricingData[1].plan}
          noOfUsers={pricingData[1].noOfUsers}
          strgAmount={pricingData[1].strgAmount}
          noOfProjects={pricingData[1].noOfProjects}
          comAcc={pricingData[1].comAcc}
          privAcc={pricingData[1].privAcc}
          phnSup={pricingData[1].phnSup}
          subDom={pricingData[1].subDom}
          statRep={pricingData[1].statRep}
        />

        {/* PRO CARD */}
        <ProPricing
          title={pricingData[2].title}
          plan={pricingData[2].plan}
          noOfUsers={pricingData[2].noOfUsers}
          strgAmount={pricingData[2].strgAmount}
          noOfProjects={pricingData[2].noOfProjects}
          comAcc={pricingData[2].comAcc}
          privAcc={pricingData[2].privAcc}
          phnSup={pricingData[2].phnSup}
          subDom={pricingData[2].subDom}
          statRep={pricingData[2].statRep}
        />
      </div>
    </div>
  );
}



export default App;