import home from '../contents/home/Home.vue';

export const Foo = { template: '<div>foo</div>' };
export const Bar = { template: '<div>bar</div>' };
export const Home = home;

export const Baz = {
	data () {
		return { saved: false };
	},
	template: `
	<div>
		<p>baz ({{ saved ? 'saved' : 'not saved' }})<p>
		<button @click="saved = true">save</button>
	</div>
	`,
	beforeRouteLeave (to, from, next) {
		if (this.saved || window.confirm('Not saved, are you sure you want to navigate away?')) {
			next();
		} else {
			next(false);
		}
	}
};