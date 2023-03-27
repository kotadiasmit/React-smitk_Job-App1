import './index.css'

const EmploymentType = props => {
  const {employmentDetails, selectedEmploymentType} = props
  const {label, employmentTypeId} = employmentDetails
  const employmentTypeClicked = event => {
    console.log(event.target.checked)
    const isChecked = event.target.checked
    selectedEmploymentType(isChecked, employmentTypeId)
  }
  return (
    <li className="employment-type-list">
      <input
        type="checkbox"
        id={employmentTypeId}
        value={employmentTypeId}
        onChange={employmentTypeClicked}
      />
      <label htmlFor={employmentTypeId} className="employment-type-label">
        {label}
      </label>
    </li>
  )
}
export default EmploymentType
