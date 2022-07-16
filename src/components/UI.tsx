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

  const size = {
    xs: 'py-4 px-gut/2 text-sm',
    sm: 'py-8 px-gut/2',
    default: 'py-gut/2 px-gut',
    md: 'py-gut px-2gut',
    lg: 'py-gut px-3gut',
    full: 'py-gut w-full'
  };

  
  const buttonSize = size[props.size] || size['default'];
  const buttonClass = `${buttonSize} ${props.className} inline-block text-center rounded text-white dark:text-black hover:text-white dark:hover:text-black`;
  return (
    
      <Link href={props.href ?? props.href} passHref>
        <a {...props} className={buttonClass} >
          {props.label}
        </a>
      </Link>
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

