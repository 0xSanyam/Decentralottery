import { useWeb3Contract } from "react-moralis";
import { contractAddress, abi } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

const LotteryEntry = () => {
	const { chainId: chainIdinHex, isWeb3Enabled } = useMoralis();
	const dispatch = useNotification();

	const chainId = parseInt(chainIdinHex);
	const lotteryAddress = chainId in contractAddress ? contractAddress[chainId][0] : null;
	const [entryFee, setEntryFee] = useState("0");
	const [numOfPlayers, setNumOfPlayers] = useState("0");
	const [winner, setWinner] = useState("0");

	const {
		runContractFunction: enterLottery,
		isFetching,
		isLoading,
	} = useWeb3Contract({
		abi: abi,
		contractAddress: lotteryAddress,
		functionName: "enterLottery",
		params: {},
		msgValue: entryFee,
	});

	const { runContractFunction: getEntryFee } = useWeb3Contract({
		abi: abi,
		contractAddress: lotteryAddress,
		functionName: "getEntryFee",
		params: {},
	});

	const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
		abi: abi,
		contractAddress: lotteryAddress,
		functionName: "getNumberOfPlayers",
		params: {},
	});

	const { runContractFunction: getWinner } = useWeb3Contract({
		abi: abi,
		contractAddress: lotteryAddress,
		functionName: "getWinner",
		params: {},
	});

	async function update() {
		const entryFeeLottery = await getEntryFee();
		const numOfPlayersLottery = await getNumberOfPlayers();
		const winnerLottery = await getWinner();
		setEntryFee(entryFeeLottery.toString());
		setNumOfPlayers(numOfPlayersLottery.toString());
		setWinner(winnerLottery);
	}

	const handleSuccess = async (tx) => {
		await tx.wait(1);
		handleNewNotification(tx);
		update();
	};

	let errorCount = false;

	const handleFailure = async () => {
		errorCount = true;
		handleNewNotification();
	};

	const handleNewNotification = () => {
		errorCount == true
			? dispatch({
					type: "error",
					message: "Transaction Failed",
					title: "Error",
					icon: "info",
					position: "topR",
			  })
			: dispatch({
					type: "success",
					message: "Transaction Successful!",
					title: "Hooray",
					icon: "check",
					position: "topR",
			  });
	};

	useEffect(() => {
		if (isWeb3Enabled) {
			update();
		}
	}, [isWeb3Enabled]);

	return (
		<div className="p-5">
			{lotteryAddress ? (
				<div>
					<button
						className="-my-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded ml-auto"
						onClick={async () => {
							await enterLottery({
								onSuccess: handleSuccess,
								onError: handleFailure,
							});
						}}
						disabled={isLoading || isFetching}
					>
						{isLoading || isFetching ? (
							<div className="animate-spin h-8 w-8 border-b-2 rounded-full"></div>
						) : (
							<div className="text-justify">Enter Lottery</div>
						)}
					</button>
					<div className="py-2">
						<div>Entry Fee: {ethers.utils.formatUnits(entryFee.toString(), "ether")} Eth/Matic</div>
						<div>{numOfPlayers} Players Currently Playing</div>
						<div>Previous Winner: {winner}</div>
					</div>
				</div>
			) : (
				<div>Lottery Address Not Found</div>
			)}
		</div>
	);
};

export default LotteryEntry;
