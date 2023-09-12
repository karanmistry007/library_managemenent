# Copyright (c) 2023, karan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


# @frappe.whitelist()
# def del_record(docname,record):
#     doc = frappe.get_doc('parent', docname)
#     # frappe.msgprint(str(record))
#     temp = 0
#     quli_list = []
#     for row in doc.qulification:
#         if row.branch == record:
#             pass
#         else:
#             quli_list.append(row.branch)
#             quli_list.append(row.year)
#             quli_list.append(str(row.status))

#     doc.qulification = []

#     while temp <= len(quli_list)-3:
#         branch = quli_list[temp]
#         year = quli_list[temp+1]
#         status = quli_list[temp+2]
#         doc.append('qulification', {"branch": branch,
#                    "year": year, "status": int(status), })
#         temp += 3
        
#     doc.save()





class parent(Document):
        pass
	
        # # for deleting desired entries in child table
        # temp = 0
        # quli_list = []
        # n = 0
        # for row in self.qulification:
        #     if row.branch == "EC" or row.branch == "ABC":
        #         pass
        #     else:
        #         quli_list.append(row.branch)
        #         quli_list.append(row.year)
        #         quli_list.append(str(row.status))

        # self.qulification = []

        # while temp <= len(quli_list)-3:
        #     branch = quli_list[temp]
        #     year = quli_list[temp+1]
        #     status = quli_list[temp+2]
        #     self.append('qulification', {
        #         "branch": branch,
        #         "year": year,
        #         "status": int(status),
        #     })
        #     temp += 3

