import Header from "../components/Header";
import SubmitForm from "../components/SubmitForm";
import Footer from "../components/Footer";

function Submit() {
  const h1 = "Submit a price";
  const para = `Help others know "how much e be" for your side`;

  return (
    <>
      <Header
        paragraph={para}
        heading={h1}
        button="See prices"
        route="/"
        scroll="Scroll &darr;"
      />
      <SubmitForm />
      <Footer />
    </>
  );
}

export default Submit;
