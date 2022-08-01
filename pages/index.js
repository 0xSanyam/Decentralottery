import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EasyHeader from "../components/EasyHeader";
import LotteryEntry from "../components/LotteryEntry";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Decentralottery</title>
				<meta name="description" content="Smart Contract Lottery/Raffle" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<EasyHeader />
			<LotteryEntry />
		</div>
	);
}
