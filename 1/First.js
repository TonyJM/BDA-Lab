db.Student.drop
db.Faculty.drop()
db.COE.drop()
db.Admission.drop()
db.Library.drop()
db.CCollegeFestivalOE.drop()

db.createCollection("Student")

db.Student.insert({_id:1,Name:"A",Sem:7,Branch:"CSE",CGPA:9.5,Hobby:"Reading"})
db.Student.insert({_id:2,Name:"B",Sem:7,Branch:"ME",CGPA:9.6,Hobby:"Drawing"})
db.Student.insert({_id:3,Name:"C",Sem:7,Branch:"ECE",CGPA:9.4,Hobby:"Gaming"})
db.Student.insert({_id:4,Name:"D",Sem:7,Branch:"CSE",CGPA:9.2,Hobby:"Basketball"})



db.createCollection("Faculty")

db.Faculty.insert({_id:1,Name:"P",Course:"Python",Branch:"CSE",email:"P@gmail.com",Hobby:"Reading"})
db.Faculty.insert({_id:2,Name:"Q",Course:"Data Structures",Branch:"CSE",email:"Q@gmail.com",Hobby:"Drawing"})
db.Faculty.insert({_id:3,Name:"R",Course:"Machine Learning",Branch:"CSE",email:"R@gmail.com",Hobby:"Gaming"})
db.Faculty.insert({_id:4,Name:"S",Course:"C++",Branch:"CSE",email:"S@gmail.com",Hobby:"Basketball"})




db.createCollection("COE")

db.COE.insert({_id:1,Name:"E",Designation:"SDA",Phone:NumberLong(1111111111),email:"E@gmail.com",Hobby:"Reading"})
db.COE.insert({_id:2,Name:"F",Designation:"SDA",Phone:NumberLong(2111111111),email:"F@gmail.com",Hobby:"Drawing"})
db.COE.insert({_id:3,Name:"G",Designation:"SDA",Phone:NumberLong(3111111111),email:"G@gmail.com",Hobby:"Gaming"})
db.COE.insert({_id:4,Name:"H",Designation:"SDA",Phone:NumberLong(4111111111),email:"H@gmail.com",Hobby:"Basketball"})




db.createCollection("Library")

db.Library.insert({_id:1,Name:"Book 1",Subject:"Python",Branch:"CSE",Author:"J",isbn:"x"})
db.Library.insert({_id:2,Name:"Book 2",Subject:"C++",Branch:"CSE",Author:"K",isbn:"y"})
db.Library.insert({_id:3,Name:"Book 3",Subject:"Java",Branch:"CSE",Author:"L",isbn:"z"})
db.Library.insert({_id:4,Name:"Book 4",Subject:"SQL",Branch:"CSE",Author:"M",isbn:"t"})




db.createCollection("Admission")

db.Admission.insert({_id:1,Name:"L",Designation:"Superintendent",Phone:NumberLong(1111111113),email:"L@gmail.com",Hobby:"Reading"})
db.Admission.insert({_id:2,Name:"M",Designation:"Typist",Phone:NumberLong(2111111113),email:"M@gmail.com",Hobby:"Drawing"})
db.Admission.insert({_id:3,Name:"N",Designation:"Second Division Assistant",Phone:NumberLong(3111111113),email:"N@gmail.com",Hobby:"Gaming"})
db.Admission.insert({_id:4,Name:"O",Designation:"First Division Assistant",Phone:NumberLong(4111111113),email:"O@gmail.com",Hobby:"Football"})




db.createCollection("CollegeFestival")

db.CollegeFestival.insert({_id:1,Name:"T",Designation:"Coordinator",Phone:NumberLong(1111111112),email:"T@gmail.com",Hobby:"Reading"})
db.CollegeFestival.insert({_id:2,Name:"U",Designation:"Volunteer",Phone:NumberLong(2111111112),email:"U@gmail.com",Hobby:"Drawing"})
db.CollegeFestival.insert({_id:3,Name:"V",Designation:"Volunteer",Phone:NumberLong(3111111112),email:"V@gmail.com",Hobby:"Gaming"})
db.CollegeFestival.insert({_id:4,Name:"W",Designation:"Volunteer",Phone:NumberLong(4111111112),email:"W@gmail.com",Hobby:"Basketball"})


