import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  var data = imageData();

  return (
    <>
      <h1>Kalvium Gallery</h1>
      <div className="Main-container">
        {data.map((elem) => {
          return (
            <div>
              <img src={elem.img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
