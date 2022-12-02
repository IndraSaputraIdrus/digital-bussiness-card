import "./InfoSection.css";

export default function InfoSection() {
  return (
    <div className="info__section">
      <img className="info__img" src="/dummy.png" alt="" />
      <div className="container">
        <div className="info__wrapper">
          <h3 className="info__name">Laura Smith</h3>
          <p className="info__job">Frontend Developer</p>
          <p className="info__web">laurasmith.website</p>
          <button className="info__button">
            <img src="/email.svg" />
            Email
          </button>
        </div>
      </div>
    </div>
  );
}
