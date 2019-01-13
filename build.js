var ejs = require('ejs');
var fs = require('fs-extra');

var conversionMaps = [
	{
		source: 'index.ejs',
		destination: 'index.html'
	},

	{
		source: 'about.ejs',
		destination: 'about.html'
	},

	{
		source: 'contact.ejs',
		destination: 'contact.html'
	},

	{
		source: 'clients.ejs',
		destination: 'clients.html'
	},

	{
		source: 'basicsubmodule.ejs',
		destination: 'basicsubmodule.html'
	},

	{
		source: 'basicmodule.ejs',
		destination: 'basicmodule.html'
	},

	{
		source: 'testhrm.ejs',
		destination: 'testhrm.html'
	},

	{
		source: 'human-resource-management/index.ejs',
		destination: 'human-resource-management/index.html'
	},
	{
		source: 'human-resource-management/employee-management.ejs',
		destination: 'human-resource-management/employee-management.html'
	},

	{
		source: 'supply-chain-management/index.ejs',
		destination: 'supply-chain-management/index.html'
	},




];

conversionMaps.forEach(function (conversionMap) {
	ejs.renderFile(conversionMap.source, {}, {}, function (err, str) {
		fs.writeFile(conversionMap.destination, str, function (err) {
			if (err) {
				console.error(err);
			}
		})
	});
});
