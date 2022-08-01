import { ConnectButton } from "web3uikit";

const EasyHeader = () => {
	return (
		<div className="border-b-4 flex flex-row">
			<h1 className="py-5 px-5 font-bold text-3xl">Decentralottery</h1>
			<div className="ml-auto py-5 px-5">
				<ConnectButton moralisAuth={false} />
			</div>
		</div>
	);
};

export default EasyHeader;
