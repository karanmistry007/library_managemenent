# Copyright (c) 2023, karan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


@frappe.whitelist()
def copy_doc(docname):
    self = frappe.get_doc('Final Scripting', docname)
    if frappe.db.exists('Copy Final Scripting', ("COPY-"+docname)):
        doc = frappe.get_doc('Copy Final Scripting', ("COPY-"+docname))

    else:
        doc = frappe.new_doc('Copy Final Scripting')

    doc.first_name = self.first_name
    doc.last_name = self.last_name
    doc.full_name = self.full_name
    doc.birth_date = self.birth_date
    doc.age = self.age
    doc.city = self.city

    # it clears all the data inside family table
    doc.family = []
    # it adds all the data inside family table
    for row in self.get('family'):

        doc.append("family", {
            "name1": row.name1,
            "relation": row.relation,
            "age": row.age,
        })

        # it clears all the data inside education table
    doc.education = []
    # it adds all the data inside family table
    for row in self.get('education'):

        doc.append("education", {
            "branch": row.branch,
            "year": row.year,
            "status": row.status,
        })

    doc.save()
    frappe.msgprint("The Changes Has Been Saved...")


class FinalScripting(Document):
    def validate(self):
        if self.age < 18:
            frappe.throw("Your age is under 18!")

        # self.copy_doc()

    # def copy_doc(self):
    # 	if frappe.db.exists('Copy Final Scripting',("COPY-"+self.first_name)):
    # 		doc=frappe.get_doc('Copy Final Scripting',"COPY-"+self.first_name)
    # 		doc.first_name=self.first_name
    # 		doc.last_name=self.last_name
    # 		doc.full_name=self.full_name
    # 		doc.birth_date=self.birth_date
    # 		doc.age=self.age
    # 		doc.city=self.city

    # 		#it clears all the data inside family table
    # 		doc.family=[]
    # 		#it adds all the data inside family table
    # 		for row in self.get('family'):

    # 			doc.append("family", {
    # 						"name1": row.name1,
    # 						"relation": row.relation,
    # 						"age": row.age,
    # 						})

    # 		#it clears all the data inside education table
    # 		doc.education=[]
    # 		#it adds all the data inside family table
    # 		for row in self.get('education'):

    # 			doc.append("education", {
    # 						"branch": row.branch,
    # 						"year": row.year,
    # 						"status": row.status,
    # 						})

    # 		doc.save()
    # 		# frappe.msgprint("The Changes Has Been Saved...")

    # 	else:
    # 		doc=frappe.new_doc('Copy Final Scripting')
    # 		doc.first_name=self.first_name
    # 		doc.last_name=self.last_name
    # 		doc.full_name=self.full_name
    # 		doc.birth_date=self.birth_date
    # 		doc.age=self.age
    # 		doc.city=self.city

    # 		#for family table
    # 		for row in self.get('family'):

    # 			doc.append("family", {
    # 						"name1": row.name1,
    # 						"relation": row.relation,
    # 						"age": row.age,
    # 						})

    # 		#for education table
    # 		for row in self.get('education'):

    # 			doc.append("education", {
    # 						"branch": row.branch,
    # 						"year": row.year,
    # 						"status": row.status,
    # 						})

    # 		doc.insert()
    # 		frappe.msgprint("The Copy File Has Been Created...")
