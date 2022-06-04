const FormLabel = {
	variants: {
		basic: {
			fontSize: '12px',
		},

		floating: {
			fontSize: '14px',
			fontFamily: 'body',
			textTransform: 'uppercase',

			mb: 0,
			ml: 2,
			px: 2,
			w: 'fit-content',
			transform: 'translate(0, 0.5rem) scale(0.8)',
			mt: '-21px',
		},
	},
	defaultProps: {
		variant: 'basic',
	},
};

export default FormLabel;
