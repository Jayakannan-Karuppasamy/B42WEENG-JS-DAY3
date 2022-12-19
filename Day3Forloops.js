// To retrive the candidate name & skill set
const resume=[
    {
    personalInfo:{
        name: "Jayakannan.k",
        email: "jkannan98471@gmail.com",
        mobileno: 9842798471,
        gender: "male",
        Nationality: "Indian",
        Religion: "Hindu"
    },
    Eductions: ["SSLC","HSC","Diploma", "Engineering"],
    yearOfExperience: 11,
    skills:{
        techincal_stack:{
            programming_language:["Java", "J2EE","JavaScript"],
            frameworks:["SpringBoot","Apache Camel","Hibernate"],
            servers:["JBOSSFUSE","TOMCAT"]
        },
        operating_system:["window","redhat-linux"],
        database:["Oracle","MySQL","SQLServer"],
        developer_tools:["Eclipse IDE","Intelij IDE","SQL Developer", "SOAPUI", "POSTMAN","Talend IDE"]
    }
}
];

console.log("simple for loop");
for(var i=0;i<resume.length;i++){
    console.log(resume[i].personalInfo.name, resume[i].skills.techincal_stack["programming_language"]);
}

console.log("for of");
for(var element of resume){
    console.log(element.personalInfo.name, element.skills.techincal_stack.programming_language);
}
 
console.log("forEach");
resume.forEach(element =>{
    console.log(element.personalInfo.name,element.skills.techincal_stack.programming_language);
});

console.log("for in");
for(var index in resume){
    console.log(resume[index].personalInfo.name,resume[index].skills.techincal_stack.programming_language);
}