import PlanFeature from "./PlanFeature";

export default function PlanFeaturesList({ plan, isProfessional }) {
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
