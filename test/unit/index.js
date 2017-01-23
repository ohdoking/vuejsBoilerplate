// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with -test.js)
// var testsContext = require.context('.', true, /\-test$/);
// testsContext.keys().forEach(testsContext);

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match
// require all test files (files that ends with -test.js)
requireAll(require.context('.', true, /\-test$/));