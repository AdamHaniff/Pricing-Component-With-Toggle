export default function SubscriptionPlan({ isAnnuallyChecked, onPlanChange }) {
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      onPlanChange();
    }
  }

  return (
    <div className="subscription-plan">
      <h1 className="subscription-plan__header">Our Pricing</h1>
      <div className="subscription-plan__types">
        <span className="subscription-plan__type">Annually</span>
        <label
          className="subscription-plan__toggle"
          tabIndex="0"
          role="checkbox"
          aria-checked={isAnnuallyChecked}
          onKeyDown={handleKeyDown}
        >
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
