'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Reload = () => {
	const router = useRouter();

	useEffect(() => {
		router.refresh();
	}, []);

	return <></>;
};
export default Reload;
