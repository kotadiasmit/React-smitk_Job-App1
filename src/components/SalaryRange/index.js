const SalaryRange = props => {
  const {salaryRangeDetails, selectedSalaryRange} = props
  const {label, salaryRangeId} = salaryRangeDetails
  const salaryRangeClicked = () => {
    selectedSalaryRange(salaryRangeId)
  }
  return (
    <li className="employment-type-list">
      <input
        type="radio"
        id={salaryRangeId}
        value={salaryRangeId}
        onChange={salaryRangeClicked}
        name="salaryRange"
      />
      <label htmlFor={salaryRangeId} className="employment-type-label">
        {label}
      </label>
    </li>
  )
}
export default SalaryRange
