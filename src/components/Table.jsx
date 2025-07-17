export default function Table({ entries, error, loading, successMessage }) {
  const hasEntries = entries && entries.length > 0;

  return (
    <>
      <div id="table" className="table-wrapper">
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
              {hasEntries && !loading
                ? entries.map((row, index) => (
                    <tr key={index}>
                      <td>{row.date}</td>
                      <td>{row.item}</td>
                      <td>{row.unit}</td>
                      <td>₦{row.price}</td>
                      <td>{row.location}</td>
                    </tr>
                  ))
                : !loading && (
                    <tr>
                      <td colSpan="5" className="empty-message">
                        Nothing to show
                      </td>
                    </tr>
                  )}
            </tbody>
          </table>
        </div>
        {successMessage && hasEntries && !loading && (
          <div
            className={`alert-message ${error ? "error" : "successMessage"}`}
          >
            <p>{error || successMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}
