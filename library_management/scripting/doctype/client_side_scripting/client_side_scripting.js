// Copyright (c) 2023, karan and contributors
// For license information, please see license.txt


frappe.ui.form.on('Client Side Scripting', {

	// //Custom event for full name 
	// fullName: function(frm){
	// 	frm.set_value('full_name',frm.doc.first_name+' '+frm.doc.middle_name+' '+frm.doc.last_name);
	// },

	// //It Sets teh Full name as teh value is changed
	// first_name: function(frm){
	// 	frm.trigger('fullName');
	// 	frm.set_alert("hi")
	// },
	// middle_name: function(frm){
	// 	frm.trigger('fullName');
	// },
	// last_name: function(frm){
	// 	frm.trigger('fullName');
	// },
	// //It sets the full name as teh form is saved
	// after_save:function(frm){
	// 	frm.trigger('fullName')
	// },

	// date: function(frm){
	// 	// frm.set_value('age',frm.doc.date);
	// 	frm.trigger('custom_1');
	// },

	// custom_1:function(frm){
	// 	// frappe.msgprint("Custom")
	// 	let a=(frappe.datetime.get_today()).slice(0,4);
	// 	let b=(frm.doc.date).slice(0,4)
	// 	let c=parseInt(a)-parseInt(b)
	// 	// console.log(typeof(c))
	// 	frm.set_value('age',c);
	// 	// frappe.msgprint(String(c));
	// },


	// after_save:function(frm){
	// 	if (frm.is_new()){
	// 		frappe.msgprint(__("{0} your form has been saved.",
	// 		[frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name]));
	// 	}else{
	// 		frappe.msgprint(__("{0} your details has beeen updated.",
	// 		[frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name]));
	// 	}
	// },

	// validate: function(frm){
	// 	if(frm.doc.age<18){
	// 		frappe.throw("Age Must be greater than 18")
	// 	}
	// },

	// refresh: function(frm){

	// 	frm.set_df_property('Select Form','inlistview',1)
	// 	if (frm.is_new()){
	// 		frm.set_intro("You cannot change First Name after saving...");
	// 	}
	// 	else {
	// 		frm.set_intro("You Cannot change First Name");	
	// 		frm.set_df_property('first_name','hidden',0);
	// 	}

	// 	frm.add_custom_button("Family Details",()=>{
	// 		frm.set_df_property('child','hidden',0);
	// 		frm.set_df_property('child1','hidden',1);
	// 		frm.set_intro("");
	// 		frm.set_intro("Family Details");
	// 	},"Select Form")
	// 	frm.add_custom_button("Education Detaails",()=>{
	// 		frm.set_df_property('child1','hidden',0);
	// 		frm.set_df_property('child','hidden',1);
	// 		frm.set_intro("");
	// 		frm.set_intro("Education Details");
	// 	},"Select Form")
	// }


















	//print Welcome on refresh, setup, before_load,onload_post_render ,timeline_refresh,type_on_form_rendered (all are almost same)
	// refresh: function(frm) {
	// 	frappe.msgprint("Welcome")
	// },


	//throw Error message before_save, validate (all are almost same)
	// before_save: function(frm){
	// 	frappe.throw("Error")
	// },


	//gives message after_save
	// after_save: function(frm){
	// 	frappe.msgprint("You Saved Form")
	// },


	//throws error message just before submit
	// before_submit: function (frm) {
	// 	frappe.throw("Please Verify all the Details")
	// },


	//gives message after submit on_submit
	// on_submit: function(frm){
	// 	frappe.msgprint("You Submited The Form")
	// },


	//gives warning message just before_cancel
	// before_cancel: function(frm){
	// 	frappe.msgprint("You Have Just Canclled The Form")
	// },


	//gives message after_cancel
	// after_cancel: function(frm){
	// 	frappe.msgprint("You just Cnacled")
	// },


	//works when the fiels value is changed {field_name}
	// age:function(frm){
	// 	frappe.msgprint("You Just Changed Age")
	// },



	//operation on table------------------------------------------------------------------------------------------------------------------------------------------

	//when a row from table is opened in edit section
	// child_on_form_rendered: function(frm,cdt,cdn){
	// 	frappe.msgprint("The Row Is opened in Edit")
	// },


	//works before row is add remove and move (DOes Not Work)
	// child_add: function(frm,cdt,cdn){
	// 	frappe.msgprint("The Row Is Rendered")
	// },



	//Value Fatching------------------------------------------------------------------------------------------------------------------------------------------
	// after_save: function(frm){
	//prints the full name as message
	// frappe.msgprint(__("Hello Mr '{0}'",
	// [frm.doc.first_name+" "+frm.doc.last_name]));

	//set the full name value as per the first and last name after save
	// frm.set_value('full_name',(__("{0}",
	// [frm.doc.first_name+" "+frm.doc.last_name])));
	// },


	//for fetching values of child tables
	// after_save: function(frm){
		// for (let row of frm.doc.child){
		// 	frappe.msgprint(__("{0}.  {1} is {2} and age is {3}",
		// 	[row.idx, row.name1, row.relation, row.age]
		// 	))
		// }
	// },


	//after validate add values in field
	// validate: function(frm){
	// 	frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.last_name)
	// }


	//after validate add values to child table fields
	// validate: function(frm){
		// let row=frm.add_child('child',{
		// 	name1:"Admin",
		// 	relation:"admin",
		// 	age:20,
		// });
	// },


	// Check enable buttons
	// enable: function(frm){
	// Makes The Field Mandatory
	// frm.set_df_property('first_name','reqd',1);
	// frm.refresh_field('first_name');

	// makes the field mandatory with toggle_reqd
	// frm.toggle_reqd('first_sname',true);

	// makes The Field read only
	// frm.set_df_property('middle_name','read_only',1);
	// frm.refresh_field('middle_name');
	// }

	// add custom buttons on refresh 
	// refresh: function(frm){
	// Adds a Single button
	// frm.add_custom_button('Click Me',()=>{
	// 	frappe.msgprint("You Clicked Me")
	// })

	// add multiple buttons
	// frm.add_custom_button('Click Me 1',()=>{
	// 	frappe.msgprint("You Clicked 1")
	// },'Click Me')
	// frm.add_custom_button('Click Me 2',()=>{
	// 	frappe.msgprint("You Clicked 2")
	// },'Click Me')
	// frm.add_custom_button('Click Me 3',()=>{
	// 	frappe.msgprint("You Clicked 3")
	// },'Click Me')
	// }

	//this gives inro message
	// refresh:function(frm){
	// 	frm.set_intro("Hello This is Into Mesasge")
	// }

	//if the form is new then show the intro
	// refresh: function(frm){
	// 	if (frm.is_new()){
	// 		frm.set_intro("This is new Form...")
	// 	}
	// }


	//for creating dialoge box if the form is new

	// refresh: function (frm) {
	// 	if (frm.is_new()) {
	// 		let d = new frappe.ui.Dialog({
	// 			title: "Enter The Details...",
	// 			fields: [{
	// 				label: "First Name",
	// 				fieldname: "first_name",
	// 				fieldtype: "Data",
	// 			},
	// 			{
	// 				label: "Last Name",
	// 				fieldname: "last_name",
	// 				fieldtype: "Data",
	// 			},
	// 			{
	// 				label: "Age",
	// 				fieldname: "age",
	// 				fieldtype: "Int",
	// 			}],
	// 			primary_action_label: "submit",
	// 			primary_action(values) {
	// 				frm.set_value('first_name', values.first_name);
	// 				frm.set_value('last_name', values.last_name);
	// 				frm.set_value('age', values.age);
	// 				d.hide()
	// 			}
	// 		});
	// 		d.show()
	// 	}
	// }



	//it gives the message when the form is not saved
	// enable: function(frm){
	// 	if (frm.is_dirty()){
	// 		frappe.msgprint("Please Save the Form")
	// 	}
	// }


	// //trigger function 
	// refresh: function (frm) {
	// 	if (frm.is_new()) {
	// 		//it triggers the function if the form is new trigger can also be used to trigger custom functions
	// 		frm.trigger('enable'),
	// 			// it sets the chekck box true if the form is new
	// 			frm.set_value('enable', 1);
	// 	}
	// },
	// enable: function (frm) {
	// 	//it gives message when the enable button value changes
	// 	frappe.msgprint("Triggered")
	// },


	// enable: function(frm){
	// 	//it saves teh form
	// 	frm.save();
	// 	//it submits the form
	// 	frm.save('submit');
	// 	//it cancels the form
	// 	frm.save('cancel');
	// 	//it updates the form
	// 	frm.save('update');
	// }

	//enable button will refresh the field
	// eanble: function(frm){
	// 	frappe.msgprint("enable");
	// }


	//Practics-----------------------------------------------------------------------------------------------
	// refresh: function(frm){
	// 	frappe.msgprint("msgprint"),
	// 	frappe.show_alert("show_alert")
	// 	frappe.throw("throw")
	// }

	// refresh:function(frm){
	// 	frm.trigger('enable')
	// },


	// enable: function(frm){
	// 	// frm.set_value('enable',1),


	// 	console.log(frm.doc.enable);
	// 	if (frm.doc.enable==1){
	// 		frappe.msgprint("Yes");
	// 		frm.toggle_reqd('first_name',true);
	// 		frm.set_value('date',frappe.datetime.get_today());
	// 	}
	// 	if (!frm.doc.enable==1){
	// 		frappe.msgprint("No")
	// 		frm.toggle_reqd('first_name',false);
	// 		frm.set_value('date',"");
	// 	}
	// },

	// enable:function(frm){
		// let row=frm.add_child('child',{
		// 	name1:"random",
		// 	relation:"random",
		// 	age:40,
		// })
		// frm.refresh_field("child")
	// }


});


//for child scription
frappe.ui.form.on('Client Child', {
		// name1: function (frm, cdt, cdn) {
		// 	frappe.msgprint("You Changed Child Name")
		// },

	// //It Triggers when the row from child table is added
	// child_add: function (frm, cdt, cdn) {
	// 	frappe.msgprint("Row is Added")
	// },

	// //It Triggers when the row is about to removed
	// before_child_remove: function (frm, cdt, cdn) {
	// 	frappe.msgprint("Row is About To Removed")
	// },

	// //It Triggers when the row is removed
	// child_remove: function (frm, cdt, cdn) {
	// 	frappe.msgprint("Row is Removed")
	// },

	// //It Triggers when the row is moved
	// child_move: function (frm, cdt, cdn) {
	// 	frappe.msgprint("Row is Moved")
	// },

	// //It Triggers when the row is opened as form
	// form_render: function (frm, cdt, cdn) {
	// 	frappe.msgprint("Row is Opened as Form")
	// },
});

// frappe.listview_settings['Client Side Scripting'] = {
//     refresh: function(listview) {
//         listview.page.add_inner_button("Button Name", function() {
//             ButtonFunction(listview);
//         });;
//     },
// };

// function ButtonFunction(listview) {
//      console.log("ButtonFunction");
//      frappe.msgprint("ButtonFunction");
// }