function Button({ text, id }) {
  return (
    <a className="btn" id={id} href="#">
      {text}
    </a>
  );
}

export default Button;
