import Header from "../components/Header";
import Footer from "../components/Footer";

function Error() {
  const para = `The page you're looking for no longer exists, or maybe you typed the wrong link. Abeg, use the back button to go back home and check "how much e be."`;
  const h1 = `Ah ah! Where you dey go?! 😅`;
  return (
    <>
      <div className="not-found">
        <img className="img-404" src="404.jpg" alt="naira meme" />
      </div>
      <Header
        paragraph={para}
        heading={h1}
        button="Back to Homepage"
        route="/"
        scroll=" "
      />
      <Footer />
    </>
  );
}

export default Error;
