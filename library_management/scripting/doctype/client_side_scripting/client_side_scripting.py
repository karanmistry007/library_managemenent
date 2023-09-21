# Copyright (c) 2023, karan and contributors
# For license information, please see license.txt

import frappe
import requests
from frappe.model.document import Document

class ClientSideScripting(Document):
	# Define the URL of your API
	api_url = 'http://localhost:5000/get_data'  # Update with your API URL if needed

	# Send a GET request to the API
	response = requests.get(api_url)

	# Check if the request was successful (status code 200)
	if response.status_code == 200:
		# Parse the JSON response
		data = response.json()
		print("Name:", data['name'])
		print("Age:", data['age'])
	else:
		print("Failed to retrieve data from the API. Status code:", response.status_code)

	def validate(self):
		api_url = 'http://localhost:5000/get_data'
		response = requests.get(api_url)
		data = response.json()
		print("Name:", data['name'])
		print("Age:", data['age'])
		frappe.msgprint(data['name']+str(data['age']))

	pass
