import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/config";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import Table from "../components/Table";
import Footer from "../components/Footer";

function Home() {
  const [entries, setEntries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntries =
    entries?.filter(
      (entry) =>
        entry.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const para =
    "Find out today’s market prices around you. Get real-time prices for food items from local markets across Naija.";
  const h1 = "How much e be?";

  async function fetchEntries() {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/entries`);
      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message || "Failed to fetch food entries");

      setEntries(data.data);
      setSuccessMessage("Entries fetched successfully!");
      console.log(data);
    } catch (err) {
      // setError("An error occurred while fetching the entries. Please try again later.");
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    document.title = "How Much E Be?";
    fetchEntries();

    setError("");
    setSuccessMessage("");
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <>
      {loading && <Spinner text="Fetching prices" />}
      <Header
        paragraph={para}
        heading={h1}
        button="Submit a price"
        route="/submit"
        scroll="Scroll &darr;"
      />
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search item or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </section>
      <section className="table-sect">
        <Table
          entries={filteredEntries}
          error={error}
          loading={loading}
          successMessage={successMessage}
        />
      </section>
      <Footer />
    </>
  );
}

export default Home;
