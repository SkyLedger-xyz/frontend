const Input = ({ icon_size, text, icon, placeholder, input_size, icon_to_right }) => {

  return (
    <div className="input">
      <div input_size={ input_size } className={ `${input_size} ${icon_to_right && 'icon_to_right'} flex-row` } >
        { !!icon && <img src={ `${icon}` } alt={ `${icon}` } icon_size={ icon_size } className="input__icon" /> }
        <input type="text" text={ text } placeholder={ placeholder } className={ `${input_size} input__box` } />
      </div>
    </div>
  )
}

export default Input