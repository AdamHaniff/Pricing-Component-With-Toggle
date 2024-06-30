import pricingPlans from "../data";
import PricingPlan from "./PricingPlan";

export default function PricingPlansList({ isAnnuallyChecked }) {
  return (
    <ul className="pricing-plans">
      {pricingPlans.map((plan) => (
        <PricingPlan
          key={plan.id}
          plan={plan}
          isAnnuallyChecked={isAnnuallyChecked}
        />
      ))}
    </ul>
  );
}
