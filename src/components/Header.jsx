import Button from "./Button";

export default function Header() {
  return (
    <header>
      <nav>
        <img src="logo.svg" alt="App logo" />
      </nav>
      <main>
        <h1>How much e be?</h1>
        <p>
          Find out today’s market prices around you. Get real-time prices for
          food items from local markets across Naija.
        </p>
        <div className="buttons">
          <Button id=" " text="See items" />
          <Button id="primary" text="Add a price" />
        </div>
      </main>
    </header>
  );
}
