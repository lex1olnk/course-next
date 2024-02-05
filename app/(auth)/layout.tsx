import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Авторизация'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		<body>
			<div>Авторизация</div>
			{children}
		</body>
    </html>
  );
}
