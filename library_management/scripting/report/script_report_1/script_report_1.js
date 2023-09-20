// Copyright (c) 2023, karan and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["script_report_1"] = {
	"filters": [
		{
			"fieldname":"library_member",
			"label":__("Library Member"),
			"fieldtype":"Link",
			"options":"Library Member"			
		},
		{
			"fieldname":"full_name",
			"label":__("Full Name"),
			"fieldtype":"Data",		
		},
		{
			"fieldname":"from_date",
			"label":__("From Date"),
			"fieldtype":"Date",		
		},
		{
			"fieldname":"to_date",
			"label":__("To Date"),
			"fieldtype":"Date",		
		},
	]
};
