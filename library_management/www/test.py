import frappe
def get_context(context):
    context.users = frappe.get_list('User', fields=['first_name', 'last_name'])
    context.data = frappe.get_list('Data Main', fields=['first_name', 'last_name'])
    context.title = ("Dynamic Page")