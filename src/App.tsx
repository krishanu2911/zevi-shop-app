import "./App.css";
import { faker } from "@faker-js/faker"

const App = () => {
  console.log(faker.commerce.product(), "fake data")
  return <div className=" w-full min-h-screen bg-red-300">Hello Zevi Shop</div>;
};

export default App;
