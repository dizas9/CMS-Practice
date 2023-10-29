import "./home.css";
function Home() {
  const linkList = [
    {
      name: "See All User",
    },
    {
      name: "See All Collection",
    },
  ];
  return (
    <>
      <div class="main">
        <div class="welcome-section">
          <p>Welcome to Dashboard</p>
          {linkList.map((item) => {
            return (
              <div class="list-link">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/Images & Icons/goto-icon-round.png"
                  }
                  alt="icon"
                />
                <a href="#">{item.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
