import PlanFeaturesList from "./PlanFeaturesList";

export default function PricingPlan({ plan, isAnnuallyChecked }) {
  const isProfessional = plan.plan === "Professional";

  return (
    <li className={`pricing-plan ${isProfessional ? "professional-plan" : ""}`}>
      <div className="pricing-plan__type-price">
        <span
          className={`pricing-plan__type ${
            isProfessional ? "professional-plan__color" : ""
          }`}
        >
          {plan.plan}
        </span>
        <span
          className={`pricing-plan__price ${
            isProfessional ? "professional-plan__color" : ""
          }`}
        >
          {isAnnuallyChecked ? plan.yearlyPrice : plan.monthlyPrice}
        </span>
      </div>
      <PlanFeaturesList plan={plan} isProfessional={isProfessional} />
      <button
        className={`pricing-plan__btn ${
          isProfessional ? "professional-plan__btn" : ""
        }`}
        type="button"
      >
        Learn More
      </button>
    </li>
  );
}
