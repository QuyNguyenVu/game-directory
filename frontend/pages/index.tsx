import GameCategory from "../components/GameCategory";
import {Metadata} from "next";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import RootLayout from "../components/Layout";
import {API_HOST} from "../common/constants";

export const metadata: Metadata = {
	title: "Game Categories",
};

type Category = {
	id: number
	name: string
	status: number
	count: number
}

type CategoryResponse = {
	data: Category[]
}

export async function getServerSideProps() {
	const res = await fetch(`${API_HOST}/categories`)
	const resBody: CategoryResponse = await res.json()

	return {
		props: {
			categories: resBody.data
		}
	}
}

export default function Home({
 categories
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<RootLayout>
			<div className="mx-auto max-w-7xl px-5">
				<div className="py-6 text-center">
					<div className="text-3xl">
						Categories
					</div>
				</div>
				<div className="flex gap-2 flex-col">
					{categories?.map((c) => {
						return <GameCategory key={c.id} categoryId={c.id} gameCategory={c.name} gameCount={c.count} />
					})}
				</div>
			</div>
		</RootLayout>
	);
}
