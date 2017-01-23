import Vue from 'vue';
import VueRouter from 'vue-router';

import Router from './router';

//플러그인으로 등록 
Vue.use(VueRouter);

new Vue({
	el: '#app',
	router: Router,
	template: `
		<div id="app">
			<h1>Navigation Guards</h1>
			<ul>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/foo">/foo</router-link></li>
				<li><router-link to="/bar">/bar</router-link></li>
				<li><router-link to="/baz">/baz</router-link></li>				
			</ul>
		<router-view class="view"></router-view>
		</div>
		`
});
