import ContentSection from "./components/ContentSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <InfoSection />
      <ContentSection title="About">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </ContentSection>
      <ContentSection title="Interests">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </ContentSection>
      <Footer />
    </div>
  );
}

export default App;
