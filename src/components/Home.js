const Home = ({ title }) => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="./logo-link2.png" alt="logo" />
        <h1>{title}</h1>
        <span>Paste your link to shorten 👇</span>
      </div>
    </div>
  );
};

Home.defaultProps = {
  title: "My Links",
};

export default Home;
