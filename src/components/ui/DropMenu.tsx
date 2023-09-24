const DropMenu = () => {
	return (
		<div className="absolute left-0 top-0">
			<details className="dropdown mb-32">
				<summary className="btn btn-accent btn-ghost m-1 px-2 py-0 opacity-70 hover:btn-accent">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-8 w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</summary>
				<ul className="menu dropdown-content rounded-box z-[1] ml-4 w-52 bg-primary bg-opacity-80 p-2 shadow">
					<li>
						<a>Item 1</a>
					</li>
					<li>
						<a>Item 2</a>
					</li>
				</ul>
			</details>
		</div>
	);
};
export default DropMenu;
