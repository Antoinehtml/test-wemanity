const Input = {
	parts: ['field', 'addon'],
	sizes: {},
	variants: {
		basic: {
			field: {
				fontSize: '14px',

				border: ({ colors }) => `1px solid ${colors.tertiary}`,
				bg: 'transparent',

				borderRadius: 0,

				h: '50px',

				px: 4,

				transition: 'all 0.3s ease-in-out',

				'& + label': {
					transformOrigin: 'left bottom',
				},

				':placeholder-shown + label': {
					cursor: 'text',
					transformOrigin: 'left bottom',
					transform: 'translate(0, 2.25rem) scale(1)',
				},

				_placeholder: {
					opacity: 0,
					transition: 'inherit',
				},

				_hover: {
					borderColor: 'secondary',
				},

				_focus: {
					borderColor: 'secondary',

					'& + label': {
						transformOrigin: 'left bottom',
						transform: 'translate(0, 0.5rem) scale(0.8)',
					},
				},
			},
		},
	},
};

export default Input;
