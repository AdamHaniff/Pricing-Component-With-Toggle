import { useState } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import PricingPlansList from "./PricingPlansList";

export default function App() {
  const [isAnnuallyChecked, setIsAnnuallyChecked] = useState(false);

  function handlePlanChange() {
    setIsAnnuallyChecked((annuallyChecked) => !annuallyChecked);
  }

  return (
    <div className="app">
      <SubscriptionPlan
        isAnnuallyChecked={isAnnuallyChecked}
        onPlanChange={handlePlanChange}
      />
      <PricingPlansList isAnnuallyChecked={isAnnuallyChecked} />
    </div>
  );
}
