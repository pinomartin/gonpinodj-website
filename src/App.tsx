import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { Biography } from "./components/Biography";
import { Contact } from "./components/Contact";
import ImageBio from "./assets/imageAbout.jpg";
import "./i18n/config";
import SoundCloudPlayer from "./components/NewMusic";
import { HeroVideo } from "./components/HeroVideo";

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <div id="hero">
        <HeroVideo subtitle={t("meta.subtitle")} name={"Gon Pino"} />
      </div>
      <div id="biography">
        <Biography content={t("biography.myStory.content")} image={ImageBio} />
      </div>
      <div id="music-player">
        <SoundCloudPlayer />
      </div>
      <div></div>
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
