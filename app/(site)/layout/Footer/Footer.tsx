import React from 'react';
import { FooterProps } from './Footer.props';

const Footer = ({ ...props }: FooterProps) => {
	return (
		<div {...props}>
			Footer
		</div>
	);
};

export default Footer;
