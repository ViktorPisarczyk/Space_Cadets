import React from "react";

export default function Articles() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json")
			.then((response) => response.json())
			.then((data) => setData(data.results));
	}, []);

	console.log(data);
	return (
		<div className="flex flex-col mx-auto my-32 text-white w-full">
			{data.map((item) => (
				<article
					className="flex bg-white transition hover:shadow-xl dark:bg-[#283c4e] dark:shadow-gray-800/25 my-11 w-2/4 mx-auto"
					key={item.id}>
					<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
						<time
							dateTime="2022-10-10"
							className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white">
							<span>Published</span>
							<span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
							<span>{item.published_at}</span>
						</time>
					</div>
					<div className="hidden sm:block sm:basis-56">
						<img
							alt={item.title}
							src={item.image_url}
							className="aspect-square h-full w-full object-cover"
						/>
					</div>
					<div className="flex flex-1 flex-col justify-between">
						<div
							className={
								"border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
							}>
							<a href={item.url}>
								<h3 className="font-bold text-xl uppercase text-gray-900 dark:text-white">
									{item.title}
								</h3>
							</a>
							<p className="mt-2 text-md  text-gray-700 dark:text-gray-200 text-ellipsis">
								{item.summary}
							</p>
						</div>
						<div className="sm:flex sm:items-end sm:justify-end">
							<a
								href={item.url}
								className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500">
								Read Blog
							</a>
						</div>
					</div>
				</article>
			))}
		</div>
	);
}
