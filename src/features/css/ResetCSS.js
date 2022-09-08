const ResetCSS = ({ checkedReset, setCheckedReset }) => {
  const handleClick = () => {
    setCheckedReset(!checkedReset)
  }

  return (
    <section className="css-reset">
      <h5>Include CSS reset?</h5>
      <label className="checkbox-container">
        <input onClick={handleClick} type="checkbox" checked={checkedReset}/>
        <span className="checkmark"></span>
      </label>
    </section>
  )
}

export default ResetCSS