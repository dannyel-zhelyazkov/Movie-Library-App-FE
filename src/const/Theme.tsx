import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
	colors: {
		primary: '#000000',
		secondary: '#cfb53b',
		white: '#ffffff',
	},
	fontWeight: {
		semiBold: 600,
	},
	fontSize: {
		large: '18px',
		heading: '20px',
		bigHeading: '22px',
	},
	devicesWidths: {
		mobile: '480px',
		tablet: '781px',
		smallScreens: '1024px',
	},
};

export const Theme: FC = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
