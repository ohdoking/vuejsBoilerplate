module.exports = [
    {
        entry: {
            "index"  : "./src/index.js",
        },
        output: {
            filename: "./app/bundle.[name].js"
        },
        resolve: {
		  alias: {
		    'vue$': '../node_modules/vue/dist/vue.common.js'
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