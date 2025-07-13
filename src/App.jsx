function App() {
  return (
    <>
      <Header />
      <section className="table-sect">
        <FinanceTable />
      </section>
    </>
  );
}

function Header() {
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
        <a className="btn" href="#">
          Compare prices
        </a>
      </main>
    </header>
  );
}

function FinanceTable() {
  const data = [
    {
      date: "2025-07-10",
      item: "Tomatoes",
      unit: "1 basket",
      price: "₦7,500",
      location: "Mile 12 Market, Lagos",
    },
    {
      date: "2025-07-09",
      item: "Rice",
      unit: "50kg bag",
      price: "₦55,000",
      location: "Ogbete Market, Enugu",
    },
    {
      date: "2025-07-08",
      item: "Palm Oil",
      unit: "25L keg",
      price: "₦33,000",
      location: "Oja Oba, Ibadan",
    },
    {
      date: "2025-07-07",
      item: "Onions",
      unit: "1 bag",
      price: "₦18,000",
      location: "Wuse Market, Abuja",
    },
  ];

  return (
    <div className="table-wrapper">
      <h2 className="table-heading">Recent Prices</h2>
      <div className="responsive-table">
        <table className="howmuchebe-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.item}</td>
                <td>{row.unit}</td>
                <td>{row.price}</td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
