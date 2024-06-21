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
  return (
    <div>
      <SubscriptionPlan />
      <PricingPlansList />
    </div>
  );
}

function SubscriptionPlan() {
  return (
    <div className="subscription-plan">
      <h1 className="subscription-plan__header">Our Pricing</h1>
      <div className="subscription-plan__types">
        <span className="subscription-plan__type">Annually</span>
        <label className="subscription-plan__toggle">
          <input className="subscription-plan__checkbox" type="checkbox" />
          <span className="subscription-plan__slider"></span>
        </label>
        <span className="subscription-plan__type">Monthly</span>
      </div>
    </div>
  );
}

function PricingPlansList() {
  return (
    <ul className="pricing-plans">
      {pricingPlans.map((plan) => (
        <PricingPlan key={plan.id} plan={plan} />
      ))}
    </ul>
  );
}

function PricingPlan({ plan }) {
  return (
    <li className="pricing-plan">
      <div className="pricing-plan__type-price">
        <span className="pricing-plan__type">{plan.plan}</span>
        <span className="pricing-plan__price">{plan.monthlyPrice}</span>
      </div>
      <PlanFeaturesList plan={plan} />
      <button className="pricing-plan__btn" type="button">
        Learn More
      </button>
    </li>
  );
}

function PlanFeaturesList({ plan }) {
  return (
    <ul className="pricing-plan__features">
      {plan.features.map((feature, index) => (
        <PlanFeature key={index} feature={feature} />
      ))}
    </ul>
  );
}

function PlanFeature({ feature }) {
  return <li className="pricing-plan__feature">{feature}</li>;
}
