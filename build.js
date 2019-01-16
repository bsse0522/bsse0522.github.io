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
		source: 'career.ejs',
		destination: 'career.html'
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
		source: 'human-resource-management/holiday-management.ejs',
		destination: 'human-resource-management/holiday-management.html'
	},

	{
		source: 'human-resource-management/leave-toil-overtime-management.ejs',
		destination: 'human-resource-management/leave-toil-overtime-management.html'
	},

	{
		source: 'human-resource-management/payroll-processing.ejs',
		destination: 'human-resource-management/payroll-processing.html'
	},

	{
		source: 'human-resource-management/scheduling-and-rostering.ejs',
		destination: 'human-resource-management/scheduling-and-rostering.html'
	},

	{
		source: 'human-resource-management/time-tracking-and-attendance.ejs',
		destination: 'human-resource-management/time-tracking-and-attendance.html'
	},

	{
		source: 'supply-chain-management/index.ejs',
		destination: 'supply-chain-management/index.html'
	},

	{
		source: 'supply-chain-management/lead-management.ejs',
		destination: 'supply-chain-management/lead-management.html'
	},

	{
		source: 'supply-chain-management/customer-management.ejs',
		destination: 'supply-chain-management/customer-management.html'
	},

	{
		source: 'supply-chain-management/cwip-management.ejs',
		destination: 'supply-chain-management/cwip-management.html'
	},

	{
		source: 'supply-chain-management/demand-planning.ejs',
		destination: 'supply-chain-management/demand-planning.html'
	},

	{
		source: 'supply-chain-management/field-staff-managemant.ejs',
		destination: 'supply-chain-management/field-staff-managemant.html'
	},

	{
		source: 'supply-chain-management/logistics.ejs',
		destination: 'supply-chain-management/logistics.html'
	},

	{
		source: 'supply-chain-management/procurement.ejs',
		destination: 'supply-chain-management/procurement.html'
	},

	{
		source: 'supply-chain-management/product-management.ejs',
		destination: 'supply-chain-management/product-management.html'
	},

	{
		source: 'supply-chain-management/raw-material-management.ejs',
		destination: 'supply-chain-management/raw-material-management.html'
	},

	{
		source: 'supply-chain-management/sales-management.ejs',
		destination: 'supply-chain-management/sales-management.html'
	},

	{
		source: 'supply-chain-management/supplier-management.ejs',
		destination: 'supply-chain-management/supplier-management.html'
	},

	{
		source: 'supply-chain-management/warehouse-management.ejs',
		destination: 'supply-chain-management/warehouse-management.html'
	},

	{
		source: 'supply-chain-management/work-order-processing.ejs',
		destination: 'supply-chain-management/work-order-processing.html'
	},


	{
		source: 'financial-accounting/index.ejs',
		destination: 'financial-accounting/index.html'
	},
	{
		source: 'manufacturing-process-management/index.ejs',
		destination: 'manufacturing-process-management/index.html'
	},
	{
		source: 'business-process-management/index.ejs',
		destination: 'business-process-management/index.html'
	},
	{
		source: 'business-intelligence/index.ejs',
		destination: 'business-intelligence/index.html'
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
