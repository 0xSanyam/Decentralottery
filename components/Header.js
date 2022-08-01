import { useMoralis } from "react-moralis"; // hook
import { useEffect } from "react";

const Header = () => {
	const { enableWeb3, isWeb3Enabled, account, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();
	useEffect(() => {
		if (isWeb3Enabled) return;
		if (typeof window !== "undefined") {
			if (window.localStorage.getItem("connected")) {
				enableWeb3();
			}
		}
	}, [isWeb3Enabled]);

	useEffect(() => {
		Moralis.onAccountChanged((account) => {
			if (account == null) {
				window.localStorage.removeItem("connected");
				deactivateWeb3();
			}
		});
	});

	return (
		<div>
			{isWeb3Enabled ? (
				<div>
					Connected to {account.slice(0, 5)}...{account.slice(account.length - 4)}
				</div>
			) : (
				<button
					onClick={async () => {
						await enableWeb3();

						if (typeof window !== "undefined") {
							window.localStorage.setItem("connected", "metamask");
						}
					}}
					disabled={isWeb3EnableLoading}
				>
					Connect
				</button>
			)}
		</div>
	);
};

export default Header;
