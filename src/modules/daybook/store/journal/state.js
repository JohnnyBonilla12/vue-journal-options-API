export default () => ({
	isLoading: true,
	entries: [
		{
			id: new Date().getTime(),
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae asperiores aliquid eveniet rem corrupti ullam aperiam ea recusandae totam. Fugit deserunt deleniti dolor repellendus ipsum quisquam, voluptatum consequuntur quidem!',
			picture: null
		},
		{
			id: new Date().getTime() + 1000,
			date: new Date().toDateString(),
			text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae mi lectus. Proin at orci id lorem laoreet tempor. Aliquam vel ipsum sit amet dolor tincidunt hendrerit.',
			picture: null
		},
		{
			id: new Date().getTime() + 2000,
			date: new Date().toDateString(),
			text: 'Ut vel nulla ac lacus cursus auctor dictum at est. Morbi luctus consequat nulla gravida pellentesque. Praesent non purus convallis, lobortis nisl in, interdum sem. Fusce malesuada tempor cursus. Pellentesque aliquet felis nec elit varius eleifend.',
			picture: null
		},
	]
})