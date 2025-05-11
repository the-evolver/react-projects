import Header from "./components/Header";
import Content from "./components/Content";
import TabContent from "./components/TabContent";
import Section from "./components/Section";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
function App() {
  const [selectedContent, setSelectedContent] = useState("");

  function handleContent(selected) {
    setSelectedContent(selected);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return <Content {...concept} key={concept.title}></Content>;
            })}
          </ul>
        </section>

        <Section
          id="examples"
          title="Examples"
          handleContent={handleContent}
          selectedContent={selectedContent}
        >
          {selectedContent == "" ? (
            "Please select any menu "
          ) : (
            <TabContent {...EXAMPLES[selectedContent]}></TabContent>
          )}
        </Section>
      </main>
    </div>
  );
}

export default App;
