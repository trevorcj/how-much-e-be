import { API_BASE_URL } from "../api/config";
import { useState } from "react";
import Spinner from "./Spinner";

function SubmitForm() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today,
    item: "",
    unit: "",
    price: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      const data = await res.json();
      setResponse(data);
      setFormData({ item: "", price: "", location: "" }); // reset form
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      location.UR;
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="submit-form">
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Item name"
          required
          className="form-input"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (₦)"
          required
          className="form-input"
        />

        <input
          type="text"
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          placeholder="How many cups / kg ..."
          required
          className="form-input"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="form-input"
        />

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? <Spinner text="Submitting" /> : "Submit"}
        </button>

        {response && <p className="success-msg">Submitted!</p>}
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
}

export default SubmitForm;
