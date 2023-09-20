from frappe import _
import frappe

# def execute(filters=None):
#     # Define the columns for the report
#     columns = [
#         {"fieldname": "full_name", "label": _("Full Name"), "fieldtype": "Data", "width": 150},
#         {"fieldname": "from_date", "label": _("From Date"), "fieldtype": "Date", "width": 150},
#         {"fieldname": "to_date", "label": _("To Date"), "fieldtype": "Date", "width": 150},
#     ]
#     # data=[
#     #     {
#     #         'full_name':'karan mistry',
# 	# 	},
#     #     {
#     #     'full_name':'Faris Saikh'
#     #     }
# 	# ]
#     data = get_report_data(filters)

#     return columns, data

# def get_report_data(filters):
#     query = """
#         SELECT  full_name,from_date,to_date
#         FROM `tabLibrary Membership`
#     """
#     if filters.get("custom_filter"):
#         query += f" AND field1 = '{filters['custom_filter']}'"
#     data = frappe.db.sql(query, as_dict=True)
#     return data



def execute(filters=None):
    if not filters: filters={}
    data,columns=[],[]
    columns = get_columns()
    cs_data = get_cs_data(filters)
    if not cs_data:
        frappe.msgprint(_("No Records Found"))
        return columns,cs_data
    
    data=[]
    for d in cs_data:
        row=frappe._dict({
            "full_name":d.full_name,
            "from_date":d.from_date,
            "to_date":d.to_date
		})
        data.append(row)
    return columns, data, None

def get_columns():
    return[
		{
            'field_name':'full_name',
            'label':_('Full Name'),
            'fieldtype':'Data',
            'width':'120'
		},
        {
            'field_name':'from_date',
            'label':_('From Date'),
            'fieldtype':'Date',
            'width':'120'
		},
        {
            'field_name':'from_date',
            'label':_('To Date'),
            'fieldtype':'Date',
            'width':'120'
		},
	]

def get_cs_data(filters):
    conditions=get_condition(filters)
    data = frappe.get_all(
        doctype='Library Membership',
        fields=['full_name','from_date','to_date'],
        filters=conditions,
        order_by='full_name'
	)
    return data

def get_condition(filters):
    conditions={}
    for key, value in filters.items():
        if filters.get(key):
            conditions[key]=value
    return conditions


