const ResetCSS = ({ checkedReset, setCheckedReset }) => {
  const handleClick = () => {
    setCheckedReset(!checkedReset)
  }

  return (
    <section className="css-reset">
      Include CSS reset?
      <input onClick={handleClick} type="checkbox" checked={checkedReset}/>
    </section>
  )
}

export default ResetCSS