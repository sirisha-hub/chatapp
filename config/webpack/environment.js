const
      { environment
 } = require('@rails/webpacker')
const webpack = required('webpack')

environment.plugins.prepend('Provide',
	new webpack.ProvidePlugins({
		$: 'jquery/src/jquery',
		jQuery:'jquery/src/jquery'
	})
)
module.exports = environment
