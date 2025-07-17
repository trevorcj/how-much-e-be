import { useEffect, useState } from "react";
import { API_BASE_URL } from "./api/config";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Table from "./components/Table";

// TODO:
// 1. Route pages
// 2. Build the post page
// 3. Build the form component
// 4. Send a POST request to API

function App() {
  const [entries, setEntries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
    document.title = "How Much E Be (sef)?";
    fetchEntries();

    setError("");
    setSuccessMessage("");
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <section className="table-sect">
        <Table
          entries={entries}
          error={error}
          loading={loading}
          successMessage={successMessage}
        />
      </section>
    </>
  );
}

export default App;
