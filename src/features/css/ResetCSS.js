const ResetCSS = ({ checkedReset, setCheckedReset }) => {
  const handleClick = () => {
    setCheckedReset(!checkedReset)
  }

  return (
    <section className="css-reset">
      <h5>Include CSS reset?</h5>
      <input onClick={handleClick} type="checkbox" checked={checkedReset}/>
    </section>
  )
}

export default ResetCSS