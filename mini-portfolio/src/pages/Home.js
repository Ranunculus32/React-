
import Button from "../components/button";
import Message from "../components/Message";
import Autumn from "../images/Autumn.jpg";
const Home = () => {
  return (
    <div className="container">
      <h2> Homepage</h2>
      <Message />

      <h3> Simplify Life</h3>
      <img src={Autumn} alt="Father and son lying in the grass" width={900} />
      <p>
        After a long time finding my life&#180;s purpose and passion, I found
        coding. When I choose this path, life become simpler and happier.
        Suddenly, everything fits together. This is one of the best decisions I
        ever made.
      </p>
      <Button> Click Me 👋 </Button>
    </div>
  );
};
export default Home;
