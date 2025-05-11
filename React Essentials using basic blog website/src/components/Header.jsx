const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import headerImage from "../assets/react-core-concepts.png";

function genRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Header() {
  const title = reactDescriptions[genRandomInt(2, 0)];
  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {title} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
