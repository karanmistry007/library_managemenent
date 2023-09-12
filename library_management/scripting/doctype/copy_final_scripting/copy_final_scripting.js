// Copyright (c) 2023, karan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Copy Final Scripting', {
    
	refresh(frm) {
	    if(frm.is_new()){
	        frm.set_value('check_1',0);
		    frm.set_value('check_2',0);
	    } else{
	        frm.set_value('check_1',1);
		    frm.set_value('check_2',1);
			frm.set_df_property('family','hidden',0);
			frm.set_df_property('education','hidden',0);	        
	    }
		    frm.set_df_property('first_name','hidden',0);
            frm.set_intro("Click on Checkbox for More Details...");

	},
	
	
	//custom event fullname
	fullname(frm){
	    frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.last_name);
	},
	
	first_name(frm){
	    frm.trigger('fullname');
	},
	
	last_name(frm){
	    frm.trigger('fullname');
	},
	
	//for check buttons toggle form display
	check_1(frm){
	    if(frm.doc.check_1==1){
	        frm.set_df_property('family','hidden',0);
	    } else{
	        frm.set_df_property('family','hidden',1);
	    }
	},
	
	check_2(frm){
	    if(frm.doc.check_2==1){
	        frm.set_df_property('education','hidden',0);
	    } else{
	        frm.set_df_property('education','hidden',1);
	    }
	},
	
	//for setting age automatically as per birth date
	birth_date(frm){
	    var currentYear=(frappe.datetime.get_today()).slice(0,4);
	    var birthYear=(frm.doc.birth_date).slice(0,4);
	    frm.set_value('age',parseInt(currentYear)-parseInt(birthYear));
	},
	
	button_1(frm){
	    let d = new frappe.ui.Dialog({
				title: "Enter The Details...",
				fields: [{
					label: "Name",
					fieldname: "name1",
					fieldtype: "Data",
				},
				{
					label: "Relation",
					fieldname: "relation",
					fieldtype: "Data",
				},
				{
					label: "Age",
					fieldname: "age",
					fieldtype: "Int",
				}],
				primary_action_label: "submit",
				primary_action(values) {
				    if (values.name1===undefined){
				        frappe.msgprint("Please Enter The Name First!")
				    } else{
				        let row=frm.add_child('family',{
						name1:values.name1,
						relation:values.relation,
						age:values.age,
					});
				    }
				    

					d.hide();
				    frm.refresh_field('family');
				    frm.set_value('check_1',1);
				}
			});
			d.show();
	},


	button_2(frm){
	    let d = new frappe.ui.Dialog({
				title: "Enter The Details...",
				fields: [{
					label: "Branch",
					fieldname: "branch",
					fieldtype: "Data",
				},
				{
					label: "Date",
					fieldname: "year",
					fieldtype: "Date",
				},
				{
					label: "Status",
					fieldname: "status",
					fieldtype: "Check",
				}],
				primary_action_label: "submit",
				primary_action(values) {
				    if (values.branch===undefined){
				        frappe.msgprint("Please Enter The Branch First!");
				    } else{
				        let row=frm.add_child('education',{
						branch:values.branch,
						year:values.year,
						status:values.status,
					});
				    }
				    

					d.hide();
				    frm.refresh_field('education');
				    frm.set_value('check_2',1);
				}
			});
			d.show();
	},

	
	
});
