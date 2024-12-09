// import styles from './button.module.css';

function ButtonFormStateful({ children, label }) {
  const handleClick = () => console.log("data nama => ");

  return <button className="button_bg_global" onClick={() => handleClick()}>{children || label}</button>;
}

export default ButtonFormStateful;
