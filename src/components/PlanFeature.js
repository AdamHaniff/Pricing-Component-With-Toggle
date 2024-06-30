export default function PlanFeature({ feature, isProfessional }) {
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
