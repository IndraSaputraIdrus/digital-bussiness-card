import "./ContentSection.css";

export default function ContentSection({ title, children }) {
  return (
    <div className="content__section">
      <div className="container">
        <h4 className="content__title">{title}</h4>
        <p className="content__text">{children}</p>
      </div>
    </div>
  );
}
