function ButtonFormStateless({ children, label, handleClick = () => {} }) {
  return <button onClick={() => handleClick()}>{children || label}</button>;
}

export default ButtonFormStateless;
