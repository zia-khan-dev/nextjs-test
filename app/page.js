import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import MenuBar from "./components/menubar/MenuBar";
import CardContainer from "./components/card/CardContainer";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
    <Header/> 
    <MenuBar/> 
    <CardContainer/> 
    <Footer/> 
    </main>
  );
}
