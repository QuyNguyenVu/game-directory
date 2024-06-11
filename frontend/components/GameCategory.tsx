'use client'
import { useRouter } from 'next/navigation';
import CategoryIcon from "./Icons/CategoryIcon";
import ArrowRightIcon from "./Icons/ArrowRightIcon";

export default function GameCategory({
	categoryId,
  gameCategory,
	gameCount,
}: Readonly<{
	categoryId: Number;
	gameCategory: String;
	gameCount: Number;
}>) {
	const router = useRouter();
	const handleClickCategory: Function = () => {
		router.push('/categories/' + categoryId + '/games');
	};

	return (
		<div
			className="px-2 py-3 border rounded-md bg-white text-black flex justify-between items-center hover:brightness-90 hover:cursor-pointer"
			onClick={() => {handleClickCategory()}}
		>
			<div className="flex gap-2">
				<div>
					<CategoryIcon />
				</div>
				<div>
					{gameCategory}
				</div>
			</div>
			<div className="flex gap-2">
				<div className="inline-block rounded-xl bg-green-600 text-white px-2 py-1 text-xs">
					{gameCount.toString()}
				</div>
				<ArrowRightIcon />
			</div>
		</div>
	);
}
