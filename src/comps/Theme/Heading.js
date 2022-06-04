const Heading = {
	baseStyle: {
		fontFamily: 'heading',
	},
	sizes: {},
	variants: {
		h1: {
			fontSize: ['32px', null, null, null, null, "40px", 'calc(28px + 1.2vw)'],
			fontWeight: '700',
			lineHeight: '1.1',
		},
		h2: {
			fontSize: ['24px', null, null, null, null, "28px", 'calc(16px + 1.2vw)'],
			lineHeight: '1.2',
		},
		h3: {
			fontSize: ['18px', null, null, null, null, "24px", 'calc(8px + 1vw)'],
			lineHeight: '1',
		},
		h4: {
			fontSize: ['16px', null, null, null, null, '20px'],
			lineHeight: '1.3',
		},
		h5: {
			fontSize: '16px',
			fontWeight: '700',
			lineHeight: '1.55',
		},
	},
	defaultProps: {
		variant: 'title',
	},
};

export default Heading;
