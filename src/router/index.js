import VueRouter from 'vue-router';

import * as Components from './components';

/**
 * Signatre of all route guards:
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 *
 * See http://router.vuejs.org/en/advanced/navigation-guards.html
 * for more details.
 */
function guardRoute (to, from, next) {
	if (window.confirm(`Navigate to ${to.path}?`)) {
		next();
	} else if (window.confirm('Redirect to /baz?')) {
		next('/baz');
	} else {
		next(false);
	}
}

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Components.Home },
		// inline guard
		{ path: '/foo', component: Components.Foo, beforeEnter: guardRoute },
		// using meta properties on the route config
		// and check them in a global before hook
		{ path: '/bar', component: Components.Bar, meta: { needGuard: true }},

		// Baz implements an in-component beforeRouteLeave hook
		{ path: '/baz', component: Components.Baz }
	]
});

export default router;
