import {InferGetServerSidePropsType, Metadata} from "next";
import RootLayout from "../../../../components/Layout";
import GameItem from "../../../../components/GameItem";
import {API_HOST} from "../../../../common/constants";

export const metadata: Metadata = {
	title: "Game",
};

type Game = {
	id: number
	name: string
	status: number
}

type GameResponse = {
	data: Game[]
}

export async function getServerSideProps({params}: {params: any}) {
	const res = await fetch(`${API_HOST}/categories/${params.id}/games`);
	const resBody: GameResponse = await res.json();
	return {
		props: {
			games: resBody.data
		}
	}
}

export default function Page({
	games
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

	const SampleIconUrl = "https://placehold.co/600x600/png";

	return (
		<RootLayout>
			<div className="mx-auto max-w-7xl px-5">
				<div className="py-6 text-center">
					<div className="text-3xl">List Games</div>
				</div>
				<div className="grid gap-3 justify-center" style={{gridTemplateColumns: "repeat(auto-fill, 160px)"}}>
					{games?.map(c => {
						return <GameItem key={c.id} gameName={c.name} gameIconUrl={SampleIconUrl} />
					})}
				</div>
			</div>
		</RootLayout>
	)
}