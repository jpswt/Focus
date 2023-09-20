type Props = {
	children: any;
	stx: string;
};

const Button = ({ children, stx }: Props) => {
	return (
		<div
			className={` ${stx} cursor-pointer rounded-md bg-primary px-4 py-2 font-bold text-primary-content hover:opacity-80`}
		>
			{children}
		</div>
	);
};
export default Button;
