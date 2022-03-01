import Head from "next/head";
import Image from "next/image";
import Agenda from "../components/agenda";
import EngageSocials from "../components/engageSocials";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <body className="has-navbar-fixed-top"></body>
      </Head>
      <Navbar/>
      <main className="container is-fullhd">
        <section className="section">
          <article className="has-text-centered">
            <p className="is-size-2 has-text-black  has-font-weight-medium">
              African Health Economics &#38; Policy Association Conference 2022
            </p>
            <p className="is-size-4 has-text-black has-font-weight-medium">
              Decade for Action: Driving Momentum to Achieve #UHCInAfrica
            </p>
            <p className="is-size-5 has-text-black">8th – 10th March 2021</p>
            <p className="is-size-5 has-text-black">14:00 - 1800 EAT</p>
          </article>
        </section>
        <EngageSocials/>
        <div className="container is-fullhd has-background-light">
        <Agenda/>
        </div>
       
      
      </main>
    </div>
  );
}
