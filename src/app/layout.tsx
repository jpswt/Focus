import './globals.css';
import type { Metadata } from 'next';

import { useState } from 'react';
import Body from '@/components/Body';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Body children={children} />;
}
