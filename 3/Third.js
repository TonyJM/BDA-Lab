db.Student.drop()
db.Customer.drop()

db.createCollection("Student")


db.Student.insert([
{_id:1,RollNo:NumberInt(23),Name:"RBY",Age:NumberInt(20),ContactNo:NumberLong(1111111111),Email:"RBY@gmail.com"},
{_id:2,RollNo:NumberInt(10),Name:"PQR",Age:NumberInt(20),ContactNo:NumberLong(2111111111),Email:"PQR@gmail.com"},
{_id:3,RollNo:NumberInt(29),Name:"XYZ",Age:NumberInt(20),ContactNo:NumberLong(3111111111),Email:"XYZ@gmail.com"},
{_id:4,RollNo:NumberInt(11),Name:"ABC",Age:NumberInt(20),ContactNo:NumberLong(4111111111),Email:"ABC@gmail.com"},
{_id:5,RollNo:NumberInt(42),Name:"QWE",Age:NumberInt(20),ContactNo:NumberLong(5111111111),Email:"QWE@gmail.com"}
])



db.Student.update({RollNo:10},{$set:{Email:"UVW@gmail.com"}},{upsert:true})


db.Student.update({RollNo:11,Name:"ABC"},{$set:{Name:"FEM"}},{upsert:true})






db.createCollection("Customer")



db.Customer.insert([
{_id:1,Cust_id:"C1",Name:"ABC",Acc_Bal:4000,Acc_Type:"Z"},
{_id:2,Cust_id:"C2",Name:"PQR",Acc_Bal:1000,Acc_Type:"Z"},
{_id:3,Cust_id:"C3",Name:"JKL",Acc_Bal:3000,Acc_Type:"A"},
{_id:4,Cust_id:"C4",Name:"TUV",Acc_Bal:42,Acc_Type:"B"},
{_id:5,Cust_id:"C5",Name:"XYZ",Acc_Bal:7000,Acc_Type:"Z"}
])



db.Customer.find({Acc_Bal:{$gt:1200},Acc_Type:"Z"})


db.Customer.aggregate([{
    $group:{
        _id:"$Cust_id",
        Min_Bal:{$min:"$Acc_Bal"},
        Max_Bal:{$max:"$Acc_Bal"}
    }
}])
           
        
        



