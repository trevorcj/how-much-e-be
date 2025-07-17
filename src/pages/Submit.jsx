import Header from "../components/Header";

function Submit() {
  const h1 = "Submit a price";
  const para = `Help others know "how much e be" for your side`;

  return (
    <>
      <Header paragraph={para} heading={h1} button="See prices" route="/" />
    </>
  );
}

export default Submit;
