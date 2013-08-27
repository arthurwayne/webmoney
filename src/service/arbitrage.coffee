# WebMoney arbitrage service
#
# August, 2013 year
#
# Author - Vladimir Andreev
#
# E-Mail: volodya@netfolder.ru

# Supported interfaces: X17

# WebMoney arbitrage service

class ArbitrageService
	# Default hosts

	@DEFAULT_HOST: 'arbitrage.webmoney.ru'

	# Parameters for signature generation

	@SIGNATURES:
		CreateContract: []
		GetContractInfo: []

	#

	_prepare: (options) ->
		envelope = wmid: @sign_wmid, sign: '12345'
		extend(envelope, options.data)

		'contract.request': envelope

# Exported objects

module.exports = ArbitrageService
