import "./Footer.css";

export default function Footer() {
  const logos = [
    { name: "twitter", icon: "/twitter.svg", url: "https://twitter.com" },
    { name: "facebook", icon: "/facebook.svg", url: "https://facebook.con" },
    { name: "instagram", icon: "/instagram.svg", url: "https://instagram.com" },
    { name: "linkedin", icon: "/linkedin.svg", url: "https://linkedin.com" },
    { name: "github", icon: "/github.svg", url: "https://github.com" },
  ];

  return (
    <footer className="footer">
      <div className="logo__wrapper">
        {logos.map((logo) => (
          <a className="icon" key={logo.name} href={logo.url} target="_blank">
            <img src={logo.icon} alt={logo.name} />
          </a>
        ))}
      </div>
    </footer>
  );
}
