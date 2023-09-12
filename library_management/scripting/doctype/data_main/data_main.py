# Copyright (c) 2023, karan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class DataMain(Document):
	# def validate(self):
	# 	self.copy_doc()
	pass

@frappe.whitelist()
def print_fun(docname):
	frappe.msgprint("wassup")

@frappe.whitelist()
def copy_doc(first_name,middle_name,last_name,birth_date,age):
		FirstName=first_name
		MiddleName=middle_name
		LastName=last_name
		BirthDate=birth_date
		Age=age

		if frappe.db.exists('Copy Data Main',"COPY-"+FirstName):
			doc=frappe.get_doc('Copy Data Main',"COPY-"+FirstName)
			doc.first_name=FirstName
			doc.middle_name=MiddleName
			doc.last_name=LastName
			doc.birth_date=BirthDate
			doc.age=Age

			doc.save()
			frappe.msgprint("Data Has been Changed Successfully...")
		
		else:
			doc=frappe.new_doc('Copy Data Main')
			doc.first_name=FirstName
			doc.middle_name=MiddleName
			doc.last_name=LastName
			doc.birth_date=BirthDate
			doc.age=Age

			doc.insert()			
			frappe.msgprint("Data Has been Created Successfully...")

	
		

