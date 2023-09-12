// Copyright (c) 2023, karan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Data Main', {
	refresh: function (frm) {
		frm.add_custom_button("Copy Data", () => {
			frappe.call({
				method: 'library_management.scripting.doctype.data_main.data_main.copy_doc',
				//method is the path of the function like 'AppName.ModuleName.doctype.DocTypeName.FileName.FunctionName'
				args: {
					first_name: frm.doc.first_name,
					middle_name: frm.doc.middle_name,
					last_name: frm.doc.last_name,
					birth_date: frm.doc.birth_date,
					age: frm.doc.age,
				},
				callback: function (response) {
					// Handle callback if needed
				}
			});
				
			
		})
	}
});

