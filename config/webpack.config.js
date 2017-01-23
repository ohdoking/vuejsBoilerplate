var path = require('path');

const PATHS = {
    vue: path.join (__dirname, '../node_modules/vue/dist/vue.common.js')
};

console.log(PATHS.vue)

module.exports = [
    {
        entry: {
            "main"  : "./src/main.js",
        },
        output: {
            filename: "./app/bundle.[name].js"
        },
        resolve: {
		  alias: {
		    'vue$': PATHS.vue
		  }
		},
        module: {
        	preLoaders: [
		      	{
		        	test: /\.js$/,
		        	loader: 'eslint',
		        	exclude: /node_modules/
		        }
		    ],
            loaders: [
			    {
			        test: /\.sass$/,
			        loader: 'style!css!sass'
			    },
                { 
                	test: /\.vue$/, 
                	loader: 'vue' 
                },
                {
                	test: /\.js$/,
                	loader: 'babel',
                	exclude: /node_modules/
                }
            ]
        },
        vue: {
		    loaders: {
		        js: 'babel!eslint',
		        scss: 'style!css!sass'
		    }
		}
    }

];