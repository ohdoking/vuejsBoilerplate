import ComponentApp from '../../src/App.vue';

describe('ComponentApp Test2', () => {
	// asserting JavaScript options
	it('should have correct message2', () => {
		expect(ComponentApp.data().msg).toBe('hhlo');
	});
});

