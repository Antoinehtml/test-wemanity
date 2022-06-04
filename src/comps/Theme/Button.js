const Button = {
	// Shared
	baseStyle: {
		textTransform: 'none',
		transition: 'all 0.3s ease-in-out',
		borderRadius: 'none',
	},
	// Variants
	variants: {
		full_gradient: {
			fontSize: '12px',
			bg: 'transparent',

			transition: 'all 0.3s ease-in-out',

			justifyContent: 'center',

			position: 'relative',

			h: '100%',
			w: '100%',

			py: 5,

			_before: {
				content: '""',
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: '0',
				left: '0',
				borderRadius: '0',
				bg: 'transparent',
				bgImage: 'linear-gradient(#667085, #667085)',
				bgPosition: '100% 100%',
				bgSize: '0% 100%',
				bgRepeat: 'no-repeat',
				pointerEvents: 'none',
				transition: 'background-size 0.3s ease-in-out',
				zIndex: '-1',
			},

			_hover: {
				_before: {
					bgSize: '100% 100%',
					bgPosition: '0% 100%',
				},
			},

			_focus: {
				boxShadow: 'none',
				outline: 'none',
				border: 'none',
			},
		},

		underlined: {
			bg: 'transparent',

			transition: 'all 0.5s ease-in-out',

			justifyContent: 'space-between',

			px: 0,

			'p:nth-of-type(1)': {
				color: 'currentColor',
			},

			'& svg': {
				ml: 10,
			},

			'path:nth-of-type(1)': {
				stroke: 'currentColor',
			},

			_before: {
				content: '""',
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: '0',
				left: '0',
				borderRadius: '0',
				bg: 'transparent',
				bgImage: 'linear-gradient(currentColor, currentColor)',
				bgPosition: '0% 100%',
				bgSize: '100% 1px',
				bgRepeat: 'no-repeat',
				pointerEvents: 'none',
				transition: 'background-size 0.3s ease-in-out',
			},

			_hover: {
				_before: {
					bgSize: '0% 1px',
					bgPosition: '100% 100%',
				},
			},

			_groupHover: {
				_before: {
					bgSize: '0% 1px',
					bgPosition: '100% 100%',
				},
			},

			_focus: {
				boxShadow: 'none',
				outline: 'none',
				border: 'none',
			},
		},
	},
};

export default Button;
