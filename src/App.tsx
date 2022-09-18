import React from 'react';
import {Header} from "./components/Header/Header";
import {Pages} from "./components/Pages/Pages";
import {HashRouter} from "react-router-dom";
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.main}>
        <HashRouter>

            <Header/>

            <Pages/>

        </HashRouter>
    </div>
  );
}

export default App