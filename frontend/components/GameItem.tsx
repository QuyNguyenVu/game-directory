import GameIcon from "./Icons/GameIcon";

export default function GameItem({
	gameName,
	gameIconUrl
}: Readonly<{
	gameName: String;
	gameIconUrl: String;
}>) {
	return (
		<div className="p-2 w-40 border rounded-md bg-white text-black flex flex-col gap-1 text-center hover:brightness-90 hover:cursor-pointer">
			<div>
				<img className="rounded-md" src={gameIconUrl.toString()}/>
			</div>
			<div className="flex gap-1 justify-center">
				<div>
					<GameIcon />
				</div>
				<div>
					{gameName}
				</div>
			</div>
		</div>
	);
}
