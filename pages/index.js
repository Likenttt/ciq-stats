import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connect IQ Stats Badge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/Likenttt/ciq-stats">ciqstats!</a>
        </h1>

        <p className={styles.description}>
          Get started with
          <code className={styles.code}>
            https://ciqstats.li2niu.com/api/stats?appid=b4337e65-9333-49e4-9e7b-27e4f68922a1&domain=all
          </code>
        </p>

        <p align="center">
          <span>Awesome Apps on Connect IQ</span>
          <br />
          <img src="https://img.shields.io/badge/dynamic/json?color=green&logo=garmin&label=Hike2%2B&query=downloads&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3D116a5b59-29ae-4397-a70e-907d7e5f8e44%26domain%3Dall" />
          &nbsp;
          <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Run%20Power&query=downloads&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Da054f515-576a-4a28-b8e5-87987ba737e1%26domain%3Dall" />
          &nbsp;
          <img src="https://img.shields.io/badge/dynamic/json?&color=orange&label=GRun&query=downloads&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Dbf56e088-aefe-4fb4-8f16-b2e136b996a9%26domain%3Dall" />
          &nbsp;
        </p>
        <p align="center">
          <a href="https://apps.garmin.com/en-US/apps/dc6ceca8-6ec6-49f2-b711-4ebc0d347177">
            JumpJump(Jump Rope app)
          </a>
          <br />
          &nbsp;
          <img src="https://img.shields.io/badge/dynamic/json?color=green&label=JumpJump%28Jump%20Rope%20app%29%20Downloads&style=for-the-badge&query=downloads&suffix=UV&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Ddc6ceca8-6ec6-49f2-b711-4ebc0d347177%26domain%3Dall" />
          <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=JumpJump%28Jump%20Rope%20app%29%20Reviews&query=reviews&style=for-the-badge&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Ddc6ceca8-6ec6-49f2-b711-4ebc0d347177%26domain%3Dall" />
          <img src="https://img.shields.io/badge/dynamic/json?&color=orange&label=JumpJump%28Jump%20Rope%20app%29%20Rating&style=for-the-badge&query=ratings&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Ddc6ceca8-6ec6-49f2-b711-4ebc0d347177%26domain%3Dall" />
        </p>

        <p align="center">
          <a href="https://apps.garmin.com/en-US/apps/9c9c31b1-d080-4c47-955a-496f9435ac32">
            Obvious
          </a>
          <br />
          &nbsp;
          <img src="https://img.shields.io/badge/dynamic/json?color=green&label=Obvious%20Downloads&style=for-the-badge&query=downloads&suffix=UV&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3D9c9c31b1-d080-4c47-955a-496f9435ac32%26domain%3Dall" />
          <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Obvious%20Reviews&query=reviews&style=for-the-badge&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3D9c9c31b1-d080-4c47-955a-496f9435ac32%26domain%3Dall" />
          <img src="https://img.shields.io/badge/dynamic/json?&color=orange&label=Obvious%20Rating&style=for-the-badge&query=ratings&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3D9c9c31b1-d080-4c47-955a-496f9435ac32%26domain%3Dall" />
        </p>

        <p align="center">
          <a href="https://apps.garmin.com/en-US/apps/b4337e65-9333-49e4-9e7b-27e4f68922a1">
            Answers
          </a>
          <br />
          &nbsp;
          <img src="https://img.shields.io/badge/dynamic/json?color=green&label=Answers%20Downloads&style=for-the-badge&query=downloads&suffix=UV&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Db4337e65-9333-49e4-9e7b-27e4f68922a1%26domain%3Dall" />
          <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Answers%20Reviews&query=reviews&style=for-the-badge&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Db4337e65-9333-49e4-9e7b-27e4f68922a1%26domain%3Dall" />
          <img src="https://img.shields.io/badge/dynamic/json?&color=orange&label=Answers%20Rating&style=for-the-badge&query=ratings&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Db4337e65-9333-49e4-9e7b-27e4f68922a1%26domain%3Dall" />
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
