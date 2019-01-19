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
		source: 'leadership.ejs',
		destination: 'leadership.html'
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
		source: 'financial-accounting/asset-management',
		destination: 'financial-accounting/asset-management.html'
	},

	{
		source: 'financial-accounting/balance-sheet.ejs',
		destination: 'financial-accounting/balance-sheet.html'
	},

	{
		source: 'financial-accounting/bank-reconciliation.ejs',
		destination: 'financial-accounting/bank-reconciliation.html'
	},

	{
		source: 'financial-accounting/income-statement.ejs',
		destination: 'financial-accounting/income-statement.html'
	},

	{
		source: 'financial-accounting/invoices.ejs',
		destination: 'financial-accounting/invoices.html'
	},

	{
		source: 'financial-accounting/journal.ejs',
		destination: 'financial-accounting/journal.html'
	},

	{
		source: 'financial-accounting/lc-management.ejs',
		destination: 'financial-accounting/lc-management.html'
	},

	{
		source: 'financial-accounting/ledger.ejs',
		destination: 'financial-accounting/ledger.html'
	},

	{
		source: 'financial-accounting/owners-equity-statement.ejs',
		destination: 'financial-accounting/owners-equity-statement.html'
	},

	{
		source: 'financial-accounting/statement-of-cash-flow.ejs',
		destination: 'financial-accounting/statement-of-cash-flow.html'
	},

	{
		source: 'financial-accounting/vouchers.ejs',
		destination: 'financial-accounting/vouchers.html'
	},

	{
		source: 'manufacturing-process-management/index.ejs',
		destination: 'manufacturing-process-management/index.html'
	},

	{
		source: 'manufacturing-process-management/manage-assembling.ejs',
		destination: 'manufacturing-process-management/manage-assembling.html'
	},

	{
		source: 'manufacturing-process-management/manage-byproducts-scraps-defects.ejs',
		destination: 'manufacturing-process-management/manage-byproducts-scraps-defects.html'
	},

	{
		source: 'manufacturing-process-management/manage-coloring.ejs',
		destination: 'manufacturing-process-management/manage-coloring.html'
	},

	{
		source: 'manufacturing-process-management/index.ejs',
		destination: 'manufacturing-process-management/index.html'
	},

	{
		source: 'manufacturing-process-management/manage-machineries.ejs',
		destination: 'manufacturing-process-management/manage-machineries.html'
	},

	{
		source: 'manufacturing-process-management/manage-construction.ejs',
		destination: 'manufacturing-process-management/manage-construction.html'
	},

	{
		source: 'manufacturing-process-management/manage-manufacturing-departments.ejs',
		destination: 'manufacturing-process-management/manage-manufacturing-departments.html'
	},

	{
		source: 'manufacturing-process-management/manage-manufacturing-target.ejs',
		destination: 'manufacturing-process-management/manage-manufacturing-target.html'
	},

	{
		source: 'manufacturing-process-management/manage-packaging.ejs',
		destination: 'manufacturing-process-management/manage-packaging.html'
	},

	{
		source: 'business-process-management/index.ejs',
		destination: 'business-process-management/index.html'
	},

	{
		source: 'business-process-management/associating-resources-management.ejs',
		destination: 'business-process-management/associating-resources-management.html'
	},

	{
		source: 'business-process-management/bpm-reports.ejs',
		destination: 'business-process-management/bpm-reports.html'
	},

	{
		source: 'business-process-management/designing-unlimited-workflows.ejs',
		destination: 'business-process-management/designing-unlimited-workflows.html'
	},

	{
		source: 'business-process-management/budget-management.ejs',
		destination: 'business-process-management/budget-management.html'
	},

	{
		source: 'business-intelligence/index.ejs',
		destination: 'business-intelligence/index.html'
	},

	{
		source: 'business-intelligence/analytics.ejs',
		destination: 'business-intelligence/analytics.html'
	},

	{
		source: 'business-intelligence/forecasting.ejs',
		destination: 'business-intelligence/forecasting.html'
	},

	{
		source: 'business-intelligence/planning.ejs',
		destination: 'business-intelligence/planning.html'
	},

	{
		source: 'business-intelligence/reports.ejs',
		destination: 'business-intelligence/reports.html'
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
