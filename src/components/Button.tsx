type Props = {
	children: any;
	stx: string;
};

const Button = ({ children, stx }: Props) => {
	return (
		<div
			className={` ${stx} rounded-md bg-primary px-4 py-2 font-bold text-primary-content`}
		>
			{children}
		</div>
	);
};
export default Button;
