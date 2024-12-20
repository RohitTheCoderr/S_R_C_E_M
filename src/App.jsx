import styles from './App.module.scss';
import { Outlet } from "react-router-dom";
import Navbar from "./layouts/navbar/Navbar";

export default function App() {
  return (< div className={styles.container}>
    <Navbar/>
    <div className='px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16'>
    <Outlet/>
    </div>
  </div>
  );
}