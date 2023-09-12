// Copyright (c) 2023, karan and contributors
// For license information, please see license.txt

frappe.ui.form.on('parent', {
	refresh: function (frm) {
		frm.set_value('delete_record', "")
	},

	// //delete child table values by python
	// delete: function(frm){
	// 	frappe.call({
	// 		method:'library_management.library_management.doctype.parent.parent.del_record',
	// 		args:{
	// 			docname: frm.docname,
	// 			record: frm.doc.delete_record,
	// 		},
	// 	});	
	// //to reload the form
	// 	cur_frm.reload_doc();			
	// },


	//delete child table values by javascript
	delete: function (frm) {
		// frappe.msgprint("hi")
		const quli_array = []
		// quli_array.push("Karan");
		// quli_array.push("2002-01-25");
		// quli_array.push(1);

		var record = frm.doc.delete_record;

		for (let row of frm.doc.qulification) {
			if (row.branch == record) {
				// frappe.msgprint(row.branch)
				continue
			}
			else {
				quli_array.push(row.branch);
				quli_array.push(String(row.year));
				quli_array.push(row.status);
			}
		}
		console.log(quli_array)


		frm.set_value('qulification', "");


		for (let temp = 0; temp < quli_array.length; temp = temp + 3) {
			let row = frm.add_child('qulification', {
				'branch': quli_array[temp],
				'year': quli_array[temp]+1,
				'status': quli_array[temp + 2],
			});
		}

		// let row = frm.add_child('qulification', {
		// 	'branch': quli_array[temp],
		// 	'year': quli_array[temp + 1],
		// 	'status': quli_array[temp + 2],
		// });


		frm.refresh_field('qulification');
	},

	search: function (frm) {
		// frappe.msgprint("hi")
		const other_array = []
		const main_array = []
		// quli_array.push("Karan");
		// quli_array.push("2002-01-25");
		// quli_array.push(1);

		var record = frm.doc.search_record;
		// console.log(record)

		for (let row of frm.doc.qulification) {
			if ((row.branch).includes(record)) {
				main_array.push(row.branch);
				main_array.push(String(row.year));
				main_array.push(row.status);
			}
			else {
				other_array.push(row.branch);
				other_array.push(String(row.year));
				other_array.push(row.status);
			}
		}
		console.log(other_array);
		console.log(main_array)


		frm.set_value('qulification', "");

		for (let temp = 0; temp < main_array.length; temp = temp + 3) {
			let row = frm.add_child('qulification', {
				'branch': main_array[temp],
				'year': main_array[temp+1],
				'status': main_array[temp + 2],
			});
		}


		for (let temp = 0; temp < other_array.length; temp = temp + 3) {
			let row = frm.add_child('qulification', {
				'branch': other_array[temp],
				'year': other_array[temp+1],
				'status': other_array[temp + 2],
			});
		}

		// let row = frm.add_child('qulification', {
		// 	'branch': quli_array[temp],
		// 	'year': quli_array[temp + 1],
		// 	'status': quli_array[temp + 2],
		// });


		frm.refresh_field('qulification');
		// frm.fields_dict['delete'].$input.addClass('btn-primary') ;
		// const rowElement = frm.fields_dict['qulification'].grid.grid_rows[1].$row;
		// rowElement.addClass('d-hidden');

		// frm.fields_dict['qulification'].grid.grid_rows[2].$row.addClass('bg-black');


		// Add the Bootstrap class to the field element
	

	},
	search_record: function (frm) {
		// frappe.msgprint("hi")
		const other_array = []
		const main_array = []
		// quli_array.push("Karan");
		// quli_array.push("2002-01-25");
		// quli_array.push(1);

		var record = frm.doc.search_record;

		for (let row of frm.doc.qulification) {
			if (((row.branch).toLowerCase()).includes(record.toLowerCase(),(record.slice(0,1)).toLowerCase())) {
				main_array.push(row.branch);
				main_array.push(String(row.year));
				main_array.push(row.status);
			}
			else {
				other_array.push(row.branch);
				other_array.push(String(row.year));
				other_array.push(row.status);
			}
		}
		console.log(other_array);
		console.log(main_array)


		frm.set_value('qulification', "");

		for (let temp = 0; temp < main_array.length; temp = temp + 3) {
			let row = frm.add_child('qulification', {
				'branch': main_array[temp],
				'year': main_array[temp+1],
				'status': main_array[temp + 2],
			});
		}


		for (let temp = 0; temp < other_array.length; temp = temp + 3) {
			let row = frm.add_child('qulification', {
				'branch': other_array[temp],
				'year': other_array[temp+1],
				'status': other_array[temp + 2],
			});
		}

		// let row = frm.add_child('qulification', {
		// 	'branch': quli_array[temp],
		// 	'year': quli_array[temp + 1],
		// 	'status': quli_array[temp + 2],
		// });


		frm.refresh_field('qulification');
		// frm.fields_dict['delete'].$input.addClass('btn-primary') ;
		// const rowElement = frm.fields_dict['qulification'].grid.grid_rows[1].$row;
		// rowElement.addClass('d-hidden');

		// frm.fields_dict['qulification'].grid.grid_rows[2].$row.addClass('bg-black');


		// Add the Bootstrap class to the field element
	

	},


	// refresh: function(frm){
	// 	frappe.msgprint("refresh")
	// },
	//value fetching
	// refresh: function(frm){
	// 	frappe.msgprint(__("The Full Name is '{0}' ",
	// 	[frm.doc.name1 +" "+ frm.doc.last_name]
	// 	))
	// }

	// refresh: function (frm, cdt, cdn) {
	// 	for (let row of frm.doc.qulification) {
	// 		frappe.msgprint(__(row.idx))

	// 	}

	// },


	// refresh: function (frm) {
	// 	for (let row of frm.doc.qulification) {
	// 		frappe.msgprint(__("{0}. The Branch is '{1}' and The Year is '{2}' ",
	// 			[row.idx,row.branch,row.year]
	// 		))
	// 	}
	// }

	// validate: function(frm){
	// 	frm.set_value('full_name',frm.doc.name1 +" "+ frm.doc.last_name);
	// }


	// validate: function(frm){
	// 	let row=frm.add_child('qulification',{
	// 		branch:'ABCDEF',
	// 		//year:"2023-01-25", //format should be yyyy-mm-dd
	// 		year:frappe.datetime.get_today(),  //for today daet from frappe 
	// 		status:1,
	// 	})
	// }


	//custom button enable
	// enable: function (frm) {
	//makes teh field mandatory on check
	// frm.set_df_property('last_name', 'reqd', 1);
	// frm.refresh_field('last_name');

	//makes the field read only on check
	// frm.set_df_property('full_name', 'read_only', 1);
	//frm.refresh_fiels('full_name);

	//makes teh field mandatory with toogle
	// frm.toggle_reqd('last_name',true);
	// },

	//add a custom button on refresh event
	// refresh: function(frm){
	// frm.add_custom_button('Click Me',()=>{
	// 	frappe.msgprint("You Clicked a Button")
	// })

	// frm.add_custom_button('Click Me 1',()=>{
	// frappe.msgprint("You Clicked Click Me 1");
	// },'click me')

	// frm.add_custom_button('Click Me 2',()=>{
	// frappe.msgprint("You Clicked Click Me 2");
	// },'click me')
	// }








});

frappe.ui.form.on('child', {
	// branch: function(frm,cdt,cdn){
	// 	frappe.msgprint("child branch")
	// },
});

