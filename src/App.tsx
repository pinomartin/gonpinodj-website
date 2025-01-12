import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Biography } from "./components/Biography";
// import { Releases } from "./components/Releases";
import { Contact } from "./components/Contact";
import ImageBio from "./assets/imageAbout.jpg";
import "./i18n/config";

// const releases = [
//   {
//     title: "Voyager",
//     label: "YKY Records",
//     coverArt:
//       "https://images.unsplash.com/photo-1584679109594-56fffe50d527?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "I Wanna Know",
//     label: "VHV Records",
//     coverArt:
//       "https://images.unsplash.com/photo-1584679109585-e240e60d35d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   // Add more releases as needed
// ];

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Gon Pino DJ - Electronic Music";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <div id="hero">
        <Hero
          name="Gon Pino"
          image="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          subtitle={t("meta.subtitle")}
        />
      </div>
      <div id="biography">
        <Biography content={t("biography.myStory.content")} image={ImageBio} />
      </div>
      {/* <div id="releases">
        <Releases releases={releases} />
      </div> */}
      <div id="contact">
        <Contact
          phone="34610988607"
          instagram="gonpinoofficial"
          youtube="@GonPinoOfficial"
          spotify="https://soundcloud.com/djgonpino"
        />
      </div>
    </div>
  );
}

export default App;
