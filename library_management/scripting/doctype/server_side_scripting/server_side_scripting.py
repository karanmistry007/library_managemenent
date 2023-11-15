# Copyright (c) 2023, karan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import today


class ServerSideScripting(Document):

    # def validate(self):
    # 	frappe.msgprint("validate")

    # def before_save(self):
    # 	frappe.throw("before_save")

    # def before_insert(self):
    # 	frappe.throw("before_insert")

    # def after_insert(self):
    # 	frappe.throw("after_insert")

    # def on_update(self):
    # 	frappe.msgprint("on_update")

    # def before_submit(self):
    # 	frappe.msgprint("before_submit")

    # def on_submit(self):
    # 	frappe.msgprint("on_submit")

    # def on_cancel(self):
    # 	frappe.msgprint("on_cancel")

    # def on_trash(self):
    # 	frappe.msgprint("on_trash")

    # def after_delete(self):
    # 	frappe.msgprint("after_delete")

    # show full name according to first, middle and last name
    # def validate(self):
    # 	frappe.msgprint(("Hello My Full Name is '{0}'").format(self.first_name+" "+self.middle_name+" "+self.last_name))

    # for child table data fetching
    # def validate(self):
    # 	for row in self.get("child"):
    # 		frappe.msgprint(("{0}. The Family Member Name is '{1}' and relation is '{2}' and age is '{3}'").format(row.idx,row.name1,row.relation,row.age))

    # def validate(self):
    #     #calling the method
    #     self.get_document()

    # #for fetching the data from difrent doctype using link field
    # def get_document(self):
    #     #defining the doc variable
    #     doc=frappe.get_doc('Client Side Scripting',self.client_side_doc)
    #     frappe.msgprint(("The First Name is {0} and Age is {1}").format(doc.first_name,doc.age))

    #     #for fetching the child table data from link
    #     for row in doc.get('child'):
    #         frappe.msgprint(("{0}. The Family Member Name Is '{1}' and relation is '{2}' and age is {3}").format(row.idx,row.name1,row.relation,row.age))

    # # add values inside existing fields
    # def validate(self):
    #     # set age as per the entered year
    #     year = self.date
    #     year = year[0:4]
    #     day = today()
    #     day = day[0:4]
    #     self.age = int(day)-int(year)
    #     #set full name as per first, middle , last name
    #     self.full_name=self.first_name+" "+self.middle_name+" "+self.last_name

    # def validate(self):
    #     self.new_details()

    # def new_details(self):
    #     doc=frappe.new_doc('Server Side Scripting')
    #     doc.first_name="Jaya"
    #     doc.last_name="Jakson"
    #     doc.age=13

    #     doc.insert()

    # # for calling a function on validation
    # def validate(self):
    #     self.new_document()

    # # by doc.save for creating the new doc in client side scripting doctype
    # def new_document(self):
    #     doc = frappe.new_doc("Client Side Scripting")
    #     doc.first_name = "Jiya"
    #     doc.last_name = "Soni"
    #     doc.date = "2001-12-20"
    #     doc.save()

    # #some escape hatches in doc.save
    # doc.save(
    #     ignore_permissions=True #ignore write permissions during insert
    #     ignore_version=True #do not create a version record
    # )

    # # for calling a function on validation
    # def validate(self):
    #     self.new_document()

    # # for creating the new doc in client side scripting doctype
    # def new_document(self):
    #     doc = frappe.new_doc("Client Side Scripting")
    #     doc.first_name = "Riya"
    #     doc.last_name = "Soni"
    #     doc.date = "2001-12-20"

    # 	#for creating entries inside the child table
    # doc.append("child", {
    #     "name1": "Priynka Gandhi",
    #     "relation": "Friend",
    #     "age": 100,
    # })

    #     #doc.insert()

    # #some escape hatches that can used to skip certain checks
    #     doc.insert(
    #         ignore_permissions=True, #it ignores the permisssions suring insert
    #         ignore_link=True, #it ignores link validation in the document
    #         ignore_if_duplicate=True, #dont insert if DuplicateEntryError is thrown
    #         ignore_mandatory=True, #insert if madatory fields are not set
    #     )

    # #for deleting the document at validation function
    # def validate(self):
    # 	frappe.delete_doc('Client Side Scripting','temp')

    # #doc.delete() method for deleting the document at validation function
    # def validate(self):
    #     doc=frappe.get_doc('Client Side Scripting','jiya')
    #     doc.delete()

    # #db_set() for setting the value of the document
    # def validate(self):
    #     self.db_set_document()

    # def db_set_document(self):
    #     doc=frappe.get_doc('Server Side Scripting','SSC00006')
    #     doc.db_set('middle_name',50)     #it only works if the diffrent document is saved

    # # db.get_list() method for getting all the document details with filters and fields
    # def validate(self):
    #     self.get_list()

    # def get_list(self):
    #     doc = frappe.db.get_list('Client Side Scripting',
    #                              filters={
    #                                 #  'enable': 1,
    #                                     # 'age':26,
    #                              },
    #                              fields=['first_name', 'age'],
    #                              )
    #     for d in doc:
    #         frappe.msgprint(
    #             ("The Parent Name is {0} and age is {1}.").format(d.first_name, d.age))

    # db.set_value() method for changing the values of document
    # def validate(self):
    #     self.set_value()

    # def set_value(self):
    #     frappe.db.set_value('Client Side Scripting','riya','age',22)

    # frappe.db.get_value() metho fro getting values
    #     first_name,age=frappe.db.get_value('Client Side Scripting','riya',['first_name','age'])
    #     frappe.msgprint(("The Parent Name is {0} and new age is {1}.").format(first_name,age))

    # #db.exists() for checking if the database is exists or not
    # def validate(self):
    #     if frappe.db.exists('Client Side Scripting','test'):
    #         frappe.msgprint("The Document is Exists")
    #     else:
    #         frappe.msgprint("The Document does not Exists")

    # #db.count() for count the number of document is present inside the DocType
    # def validate(self):
    #     doc_count=frappe.db.count('Client Side Scripting') #we can also use filters
    #     frappe.msgprint(("The Number of Document inside Client Side Scripting is {0}").format(doc_count))

    # #db.sql() method for using sql queries inside python code for fetching data
    # def validate(self):
    #     self.sql()

    # def sql(self):
    #     data=frappe.db.sql("""
    #                        SELECT
    #                             full_name,
    #                             age
    #                        FROM
    #                             `tabClient Side Scripting`
    #                        WHERE
    #                             age=26
    #                        """,as_dict=1)

    #     for d in data:
    #         frappe.msgprint(("The Full Name is {0} and the age is  {1}").format(d.full_name,d.age))

    def before_save(self):
        if self.first_name == None:
            self.first_name = ""
        if self.last_name == None:
            self.last_name = ""
        if self.middle_name == None:
            self.middle_name = ""
        self.full_name = f"{self.first_name} {self.middle_name} {self.last_name}"

    def validate(self):
        # user=0
        # emails=0
        # message=0
        # emaillist=0

        # #returns the document object
        # doc = frappe.get_doc('Server Side Scripting', 'SSC00007')

        # #returns the last save document object
        # doc = frappe.get_last_doc('Server Side Scripting')

        # #Similar to frappe.get_doc but will look up the document in cache first before hitting the database.
        # doc = frappe.get_cached_doc('Server Side Scripting','SSC00001')

        # #it will create a new document
        # doc = frappe.new_doc('DocType', 'docname')

        # #it will delete a document
        # doc = frappe.delete_doc('DocType', 'docname')

        # #it will rename the document
        # doc = frappe.rename_doc('Server Side Scripting', 'SSC00001', 'SSC00007')

        # #Returns meta information of doctype. This will also apply custom fields and property setters.
        # doc = frappe.get_meta('Server Side Scripting', 'SSC00007')

        # #a method of inserting data into database
        # doc.insert(
        #     ignore_permissions=True,  # ignore write permissions during insert
        #     ignore_links=True,  # ignore Link validation in the document
        #     ignore_if_duplicate=True,  # dont insert if DuplicateEntryError is thrown
        #     ignore_mandatory=True  # insert even if mandatory fields are not set
        # )

        # #for changing the data of existing document
        # doc.save(
        #     ignore_permissions=True,  # ignore write permissions during insert
        #     ignore_version=True  # do not create a version record
        # )

        # #for deleting document
        # doc.delete()

        # #Will return a version of the doc before the changes were made
        # doc.get_doc_before_save()

        # #will get the latest data of the document from the database
        # doc.reload()

        # # throws if no written permissions
        # doc.check_permission(permtype='write')

        # #it will return the title of the document
        # doc.get_title()

        # # Publish realtime event to indicate that the document has been modified
        # doc.notify_update()

        # #it will change the value of the form field in the database
        # doc.db_set('field_name', 'new_value')

        # #it will add data into the child table
        # doc.append("child", {
        #     "name1": "Priynka Gandhi",
        #     "relation": "Friend",
        #     "age": 100,
        # })

        # #it will return the url path of the doctype from the desk
        # doc.get_url()

        # #it will add a new comment
        # doc.add_comment('Comment',text="This is a comment")

        # #add a comment of type Edit
        # doc.add_comment('Edit','Values Changed')

        # #add a comment of type Shared
        # doc.add_comment('Shared','{0} shared this document'.format(user))

        # #Add the given/current user to list of users who have seen this document
        # doc.add_seen('karan@sanskartechnolab.com')

        # #Add a view log when a user views a document i.e opens the Form
        # doc.add_viewed('karan@sanskartechnolab.com')

        # #it will add a tag to the document
        # doc.add_tag('developer')

        # #returns all the tags associated with the document
        # doc.get_tags()

        # #Run method if defined in controller, will also trigger hooks if defined
        # doc.run_method('validate')

        # #Run a controller method in background. If the method has an inner function, like _submit for submit, it will call that method instead
        # doc.queue_action('send_emails',emails=["karan@sanskartechnolab.com"], message='Howdy')

        # #it will return all the child doctype ##############not working###################
        # doc.get_all_children('Server Side Scripting')

        # #it will return the parent doctype field
        # doc.get_parentfield_of_doctype()

        # #serialize and insert a data into database
        # doc.db_insert()

        # #serialize and update a data into database
        # doc.db_update()

        # #####################################################################################################################################################
        # #for getting list of the name of the document of the doctype
        # doc=frappe.db.get_list('Server Side Scripting',pluck="name")
        # for i in doc:
        #     frappe.msgprint(i)

        # #with the filters
        # doc= frappe.db.get_list('Server Side Scripting',
        #     filters={
        #             'enable':1,
        #             },
        #     fields=['first_name','age'],
        #     order_by='date',
        #     as_list=True,
        #     )
        # for i in doc:
        #     frappe.msgprint(i[0]+'  '+str(i[1]))

        # #Examples of different filters
        # frappe.db.get_list('Task', filters={
        #     'date': ['>', '2019-09-08']
        # })
        # frappe.db.get_list('Task', filters=[[
        #     'date', 'between', ['2020-04-01', '2021-03-31']
        # ]])
        # frappe.db.get_list('Task', filters={
        #     'subject': ['like', '%test%']
        # })
        # frappe.db.get_list('Task',
        # fields=['count(name) as count', 'status'],
        # group_by='status'
        # )


        # #it counts the total no of document inside the doctype
        # temp=frappe.db.count('Server Side Scripting')
        # frappe.msgprint(str(temp))


        # #it deletes the doctype
        # frappe.db.delete("Error Log")

        # #it Truncate a table in the database
        # frappe.db.truncate("Error Log")

        # ### it calls SQL commit ###
        # frappe.db.commit()
        # frappe.db.savepoint 
        # frappe.db.rollback()
        # frappe.db.multisql({'mariadb': mariadb_query, 'postgres': postgres_query})
        # frappe.db.rename_table(old_name, new_name)
        # frappe.db.describe(doctype)
        # frappe.db.change_column_type(doctype, column, new_type)
        # frappe.db.add_index(doctype, fields, index_name)
        # frappe.db.add_unique(doctype, fields, constraint_name=None)
        




        # #sql query using python
        # data=frappe.db.sql("""
        #                    SELECT
        #                         full_name,
        #                         age
        #                    FROM
        #                         `tabServer Side Scripting`

        #                    """,as_dict=1)

        # for d in data:
        #     frappe.msgprint(("The Full Name is {0} and the age is  {1}").format(d.full_name,d.age))




        pass
