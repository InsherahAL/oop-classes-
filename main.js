class User {
    constructor(fName, lastName, userName, password, age) {
        this.firstName = fName
        this.lastName = lastName
        this.userName = userName
        this.password = password
        this.age = age
        this.isLoggedIn = false
        this.lastLoggedIn = 0
        this.isActive = true

    }
    signIn() {
        if (this.isActive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now
        } else {
            alert('this account has been deleted')
        }
    }
    sign0ut() {
        this.isLoggedIn = false
    }
    getLastLogIn() {
        const date = new Date(this.lastLoggedIn)
        return date.toLocaleTimeString()

    }
    deactivateUser() {
        this.isActive = false
    }
    reactivateUser() {
        this.isActive = true
    }
}




class Teacher extends User {
    constructor(fName, lastName, userName, password, age, subject, salary) {
        super(fName, lastName, userName, password, age)
        this.subject = subject
        this.salary = salary
        this.workHours = 0
    }
    giveMark() {

    }
}

class Student extends User {
    constructor(fName, lastName, userName, password, age, grade, tuition) {
        super(fName, lastName, userName, password, age)
        this.grade = grade
        this.tuition = tuition
    }
    takeMark() {

    }
}


class School {
    constructor(name) {
        this.name = name
        this.grades = {}
        this.teachers = []
        this.students = []
    }
    registerStudent(fName, lastName, userName, password, age, grade, tuition) {
        const student = new Student(fName, lastName, userName, password, age, grade, tuition)
        this.students.push(student)
    }
    hireTeacher(fName, lastName, userName, password, age, subject, salary){
        const teacher = new Teacher(fName, lastName, userName, password, age, subject, salary)
        this.teachers.push(teacher)
    }
    
}


const school = new School('American House')
school.hireTeacher('Adam', 'Muna', 'adammuna06', 'qweqwe', 15,'P.E',12000)
school.registerStudent('Hanin', 'farhat', 'HaninFarahat05', 'qweqwee', 16,'11th',7000)


console.log(school);
