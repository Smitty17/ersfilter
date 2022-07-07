import Link from 'next/link';

const inputStyles = { 
  label: `   uppercase
            tracking-loose
            text-sm`,
  input: `   bg-white
            text-gray-dark
            dark:text-gray-200
            w-full
            ounded
            border-1
            border-gray-200
            dark:border-gray-500
            p-8 mt-8
            mb-gut`
};

export const Button = props => {

  const color = `${props.color}-700` || 'blue-700';
  const darkColor = `${props.color}-600` || 'blue-600';
  const hover = `${props.color}-800` || 'blue-800';
  const darkHover = `${props.color}-700` || 'blue-700';
  const text = 'gray-100';
  const darkText = 'white';

  const size = {
    xs: 'py-2 px-gut/2 text-sm',
    sm: 'py-2 px-gut/2',
    default: 'py-4 px-gut',
    md: 'py-gut/2 px-2gut',
    lg: 'py-gut px-3gut',
    full: 'py-gut w-full'
  };

  const buttonMap = {
    solid: `bg-${color}
              dark:bg-${darkColor}
              border-${color}
              dark:border-${darkColor}
              text-${text}
              dark:text-${darkText}
              border
              inline-block
              rounded-sm
              hover:bg-${hover}
              dark:hover:bg-${darkHover}
              hover:border-${hover}
              dark:hover:border-${darkHover}`,

    outline: `bg-transparent
              border border-${color}
              dark:border-${darkColor}
              text-${color}
              dark:text-${darkColor}
              border-2
              inline-block
              rounded-sm
              hover:bg-${hover}
              dark:hover:bg-${darkHover}
              dark:hover:border-${darkHover}
              hover:text-white
              dark:hover:text-white`,
  }
  const buttonSize = size[props.size] || size['default'];
  const buttonClass = `${buttonSize} ${buttonMap[props.kind]} ${props.className}`;
  return (
    props.href ? (
      <Link href={props.href}>
        <button {...props} className={buttonClass} >
          {props.label}
        </button>
      </Link>
    ) : (
      <button {...props} className={buttonClass} >
        {props.label}
      </button>
    )
  )
}


export const TextField = props => {
  const baseColor = props.baseColor || 'white';
  const inputType = props.inputType || 'text';
  const {modal, ...newProps} = props;
  const bgDark = (modal === true) ? 'dark:bg-gray-700' : 'dark:bg-gray-800';
  const styles = {
    label: `${inputStyles.label} text-${baseColor}-400`,
    input: `${inputStyles.input} ${bgDark}`
  }

  return <>
    <label className={`${styles.label}`} htmlFor={props.id}>{props.label}</label>
    <input {...newProps} type={inputType} className={styles.input} />
  </>
}


export const Textarea = (props) => {
  const baseColor = props.baseColor || 'white';
  const {modal, ...newProps } = props;
  const bgDark = (modal === true) ? 'dark:bg-gray-700' : 'dark:bg-gray-800';

  const styles = {
    label: `${inputStyles.label} text-${baseColor}-400`,
    input: `${inputStyles.input} ${bgDark}`
  }

  return <>
    <label className={styles.label} htmlFor={props.id}>{props.label}</label>
    <textarea
      className={styles.input}
      {...newProps} />
  </>
}


export const Select = (props) => {

  const options = props.optionsMap;
  const baseColor = props.baseColor || 'white';
  const defaultValue = props.defaultValue || 'label';
  const bgDark = (props.modal === true) ? 'dark:bg-gray-700' : 'dark:bg-gray-800';
  const styles = {
    label: `${inputStyles.label} text-${baseColor}-400`,
    input: `${inputStyles.input} ${bgDark}`
  }

  return <>
    <label className={`${styles.label}`} htmlFor={props.id}>{props.label}</label>
    <select
      name={props.name}
      onChange={props.onChange}
      className={styles.input}
      defaultValue={defaultValue}>
        <option value="label" disabled>Select One</option>
        {options.map((opt, key) => (
          <option key={key} value={opt.value}>{opt.label}</option>
        ))}
    </select>

  </>
}

