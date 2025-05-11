export default function TabContent({ title, description, code }) {
  return (
    <section id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <section>
        <code>{code}</code>
      </section>
    </section>
  );
}
