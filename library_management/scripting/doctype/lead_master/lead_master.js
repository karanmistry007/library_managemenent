// Copyright (c) 2023, karan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lead Master', {
	// refresh: function(frm) {
		
	// }
});


function test(){
	const addFieldsButton = document.querySelector('[data-fieldname="add_member"]');
	const fieldContainer = document.querySelectorAll('.form-group');
	const fieldContainer1 = fieldContainer[1];
    addFieldsButton.addEventListener("click", function () {
        // Define an array of field names you want to add
        const fieldNames = ["field_3", "field_4", "field_5"];

        // Loop through the field names and create and append input fields
        fieldNames.forEach(function (fieldName) {
            // Create a new text input field
            const newField = document.createElement("input");
            newField.type = "text";
            newField.name = fieldName;
            newField.id = fieldName;
            newField.placeholder = "Enter a value";

            // Append the new field to the container
            fieldContainer1.appendChild(newField);
        });
    });
}
test();
