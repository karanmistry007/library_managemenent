//for custom button in list view
frappe.listview_settings['Client Side Scripting'] = {
    refresh: function (listview) {
        listview.page.add_inner_button("Custom Button", function () {
            ButtonFunction(listview);
        });
    },
};

function ButtonFunction(listview) {
    console.log("ButtonFunction");
    frappe.msgprint("This is a Custom Button");
}