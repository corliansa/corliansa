import type { NextPage } from "next";
import styles from "../styles/Footer.module.css";

const Card: React.VFC = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://linkedin.com/in/corliansa"
				target="_blank"
				rel="noopener noreferrer"
			>
				Copyright © {new Date().getFullYear()} Corliansa Kusumah
			</a>
		</footer>
	);
};

export default Card;
