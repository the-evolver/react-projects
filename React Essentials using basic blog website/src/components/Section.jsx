import TabData from "./TabData";
import Button from "./Button";
export default function Section({
  id,
  title,
  children,
  selectedContent,
  handleContent,
}) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <TabData
        parent="menu"
        data={
          <>
            <Button
              isSelected={selectedContent == "Jsx" ? true : false}
              onSelect={() => {
                handleContent("Jsx");
              }}
            >
              Jsx
            </Button>
            <Button
              isSelected={selectedContent == "Components" ? true : false}
              onSelect={() => {
                handleContent("Components");
              }}
            >
              Components
            </Button>
            <Button
              isSelected={selectedContent == "Props" ? true : false}
              onSelect={() => {
                handleContent("Props");
              }}
            >
              Props
            </Button>
            <Button
              isSelected={selectedContent == "State" ? true : false}
              onSelect={() => {
                handleContent("State");
              }}
            >
              State
            </Button>
          </>
        }
      ></TabData>
      {children}
    </section>
  );
}
