import { useState } from "react";

const pricingPlans = [
  {
    id: 1,
    plan: "Basic",
    monthlyPrice: "$19.99",
    yearlyPrice: "$199.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    id: 2,
    plan: "Professional",
    monthlyPrice: "$24.99",
    yearlyPrice: "$249.99",
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    id: 3,
    plan: "Master",
    monthlyPrice: "$39.99",
    yearlyPrice: "$399.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

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

function SubscriptionPlan({ isAnnuallyChecked, onPlanChange }) {
  return (
    <div className="subscription-plan">
      <h1 className="subscription-plan__header">Our Pricing</h1>
      <div className="subscription-plan__types">
        <span className="subscription-plan__type">Annually</span>
        <label className="subscription-plan__toggle">
          <input
            className="subscription-plan__checkbox"
            type="checkbox"
            checked={isAnnuallyChecked}
            onChange={onPlanChange}
          />
          <span className="subscription-plan__slider"></span>
        </label>
        <span className="subscription-plan__type">Monthly</span>
      </div>
    </div>
  );
}

function PricingPlansList({ isAnnuallyChecked }) {
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

function PricingPlan({ plan, isAnnuallyChecked }) {
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

function PlanFeaturesList({ plan, isProfessional }) {
  return (
    <ul
      className={`pricing-plan__features ${
        isProfessional ? "professional-plan__features" : ""
      }`}
    >
      {plan.features.map((feature, index) => (
        <PlanFeature
          key={index}
          feature={feature}
          isProfessional={isProfessional}
        />
      ))}
    </ul>
  );
}

function PlanFeature({ feature, isProfessional }) {
  return (
    <li
      className={`pricing-plan__feature ${
        isProfessional ? "professional-plan__feature" : ""
      }`}
    >
      {feature}
    </li>
  );
}
