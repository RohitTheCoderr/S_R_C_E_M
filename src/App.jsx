import APPTest from "@src/__TESTS__";
import styles from './App.module.scss';
import Loader from "./components/loader/Loader";
import { Outlet } from "react-router-dom";
import Header from "@src/layouts/header/Header"
import Footer from "@src/layouts/footer/Footer"

export default function App() {
  return (< div className={styles.container}>
    <Loader />
    <Header/>
    {/* <APPTest /> */}
    <Outlet/>
    <Footer />
  </div>
  );
}