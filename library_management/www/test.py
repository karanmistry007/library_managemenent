import frappe
def get_context(context):
    context.users = frappe.get_list('Web View', fields=['name', 'image'])
    context.data = frappe.get_list('Data Main', fields=['first_name', 'last_name'])
    context.title = ("Dynamic Page")