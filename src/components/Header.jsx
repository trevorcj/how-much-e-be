import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header({ paragraph, heading, button, route, scroll }) {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="logo.svg" alt="App logo" />
        </Link>
      </nav>
      <main>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <div className="buttons">
          <Link to={route}>
            <Button text={button} />
          </Link>
        </div>
        <p
          className="scroll"
          onClick={() => {
            window.scroll({
              top: 10000,
              behavior: "smooth",
            });
          }}
        >
          {scroll}
        </p>
      </main>
    </header>
  );
}
