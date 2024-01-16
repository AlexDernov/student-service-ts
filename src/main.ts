type Student = {
    firstName: string,
    lastName:string,
    age: number,
    grades: Noten
}
type Noten = {
    Sport: (string | number | undefined)[],
    Kunst : (string | number | undefined)[],
    Mathe: (string | number | undefined)[]
}

const student1: Student = {
    firstName:"Max",
    lastName:"Mustermann",
    age: 34,
    grades:{Sport:[1,"A", undefined, 4, "C"], Kunst:[undefined,3, "F"], Mathe:[1,"A", 4, "C"]}
}
const student2: Student = {
    firstName:"Lisa",
    lastName:"Müller",
    age: 18,
    grades:{Sport:["C",5,1,"A", undefined], Kunst:[1,"B","F",2], Mathe:[undefined,"D", "C"]}
}
const student3: Student = {
    firstName:"Berta",
    lastName:"Schmidt",
    age: 20,
    grades:{Sport:[undefined, "C",1, undefined], Kunst:[2, "C", undefined], Mathe:[4, "B", undefined]}
}
const students:Student[] = [student1, student2, student3]
const deco:any = "="
function getStudent(student: Student){
    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log(deco.repeat((student.firstName +student.lastName+student.age).length))
    console.log("Noten:")
    Object.entries(student.grades).forEach(([subject, noten])=> {
        const listOfGrades = noten.map(note => (note === undefined ? "*" : note))
        console.log(`${subject}: ${listOfGrades.join(',')}`)

    })
    console.log(" ");
}
function getStudentsList(students: Student[]){
    students.forEach((student)=> {
        console.log(`${student.firstName} ${student.lastName} (${student.age})`)
        console.log(deco.repeat((student.firstName +student.lastName+student.age).length))
        console.log("Noten:")
        Object.entries(student.grades).forEach(([subject, noten])=>{
        const listOfGrades = noten.map(note => (note === undefined ? "*" : note))
        console.log(`${subject}: ${listOfGrades.join(',')}`)
        })
        console.log(" ")
    })
}

getStudent(student1)
getStudentsList(students);

//BONUS
function studentAverageGrade (student:Student) {
    let totalSum:number = 0
    let totalCount:number = 0
    Object.entries(student.grades).forEach(([subject, noten]) =>{
        const notenList = noten.map(note => (note === undefined ? 0 : note === "A" ? 1: note === "B" ? 2: note === "C" ? 3: note === "D" ? 4: note === "E" ? 5: note === "F" ? 6: Number(note)))
        totalSum += notenList.reduce((sum, note)=> sum + note, 0);
        totalCount += notenList.length;
    })
    return totalCount > 0 ? totalSum/totalCount :0;
}
function averageGradeOverAll(students:Student[]){
    let totalSum:number = 0
    let totalCount:number = 0
    students.forEach((student)=> {
        const averageGrade = studentAverageGrade(student);
        totalSum += averageGrade;
        totalCount += 1
    })
    return totalCount>0? totalSum/totalCount :0;
}
console.log(`Average Grade of All Students: ${averageGradeOverAll(students)}`)
console.log(`Average Grade of the Student 1: ${studentAverageGrade(student1)}`)