// app/page.jsx
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import styles from "./home.module.css"; // if you use CSS modules

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Shared centered column so every section lines up at any screen width */}
        <div className="w-full max-w-[1040px] 2xl:max-w-[1160px] mx-auto px-5 md:px-10 lg:px-16">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
