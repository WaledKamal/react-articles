import Header from "../components/Header";

export default function Error404() {
  return (
    <>
      <Header></Header>
      <section  className="error-container">
        <h1>Error 404!</h1>
        <h4>Result not found ! 😔</h4>
      </section>
    </>
  );
}
