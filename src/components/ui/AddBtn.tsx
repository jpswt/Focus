const AddBtn = ({ handleToggle }: { handleToggle: () => void }) => {
	return (
		<button
			className="rounded-md bg-neutral p-1 opacity-90 hover:text-accent"
			onClick={handleToggle}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-6 w-6 hover:text-accent"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 4.5v15m7.5-7.5h-15"
				/>
			</svg>
		</button>
	);
};
export default AddBtn;
