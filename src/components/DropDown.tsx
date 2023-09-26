'use client';

import { useEffect, useState } from 'react';
import cloudinary from 'cloudinary';

const DropDown = ({ folders }: any) => {
	console.log(folders);
	const [hint, setHint] = useState([]);
	const [text, setText] = useState('');

	// const getFolders = async () => {
	// 	let res = cloudinary.v2.api.root_folders().then((res) => console.log(res));
	// 	console.log(res);
	// 	return res;
	// };

	// useEffect(() => {
	// 	getFolders();
	// }, []);

	const handleTextChange = (e) => {
		let hint = [];
		const value = e.target.value;
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, `i`);
			hint = folders.sort().filter((folder: any) => regex.test(folder));
		}
	};

	const handleSelectedHint = (item: string) => {
		setText(item);
		setHint([]);
	};

	const handleHints = () => {
		if (hint.length === 0) {
			return null;
		}
		return (
			<ul>
				{hint.map((item) => (
					<li key={item} onClick={(e) => handleSelectedHint(item)}></li>
				))}
			</ul>
		);
	};

	return (
		<div>
			<input type="text" onChange={handleTextChange} value={text} />
			{handleHints()}
		</div>
	);
};
export default DropDown;
