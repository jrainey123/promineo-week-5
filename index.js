//Week 5 Coding Assignment
//Create Menu App - After School Enrichment Programs

//create a Program class
//parameters - name, schedule (day M-Th), size limit.
//create an array named students to add student names enrolled in selected program
class Program {
    constructor (name, programDay, sizeLimit) {
        this.name = name;
        this.programDay = programDay;
        this.sizeLimit = sizeLimit;
        this.students = [];
    } //end constructor

    //create a method within Program class to describe the student names and how many students from the array students.
    describe () {
        return `${this.firstName} + ' ' + ${this.lastName}`;
    } //end describe method
} //end Program class

//create a Student class
//parameters - first name, last name
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    } //end constructor
    
    describe() {
        return `${this.firstName} + ' ' + ${this.lastName}`;
    } //end describe method
  } //end Student class

class Menu {
    constructor() {
        //initialize programs menu
        this.programs = [];
        this.selectedProgram = null;
    } //end constructor

//create start method to begin menu selections.
start() {
    let selection = this.showMainMenuOptions();
    while (selection !=0) {
        switch (selection) {
            //methods created for each menu choice are referenced here for selection
            case '1':
                this.createProgram();
                break;
            case '2':
                this.viewProgram();
                break;
            case '3':
                this.deleteProgram();
                break;
            case '4':
                this.displayAllPrograms();
                break;
            default:
                selection = 0;
        } //end switch
        //repeat selection to continue running menu as long as 0 not selected
        selection = this.showMainMenuOptions();
    } //end while loop
    // if 0 is selected
    alert('Goodbye!');
} //end start method

//define the menu methods for selection in ShowMainMenuOptions.  still in Menu class.
showMainMenuOptions() {
    //returning the value from the prompt.  Use of backtick ` allows lines to be coded on multiple lines.
    return prompt (`
    After School Enrichment Programs
    0) Exit
    1) Create a New Program
    2) View a Program
    3) Delete a Program
    4) Display All Programs
    `)
} //end showMainMenuOptions method

//still in Menu class. create showProgramMenuOptions method with parameter programInfo.
showProgramMenuOptions (programInfo) {
    return prompt (`
    After School Enrichment Programs
    Student Enrollment
    0) Go back
    1) Add a Student to the Program
    2) Delete a Student from the Program
    ------------------------------------
    ${programInfo} 
    `)
} //end showProgramMenuOptions method

//create a method to display program info from Program class when requested from Main Menu option 4.
displayAllPrograms() {
    //start with an empty string because this is listing current program info at the time of the menu selection.
    let programString = '';
    //still in Menu class so reference to programs is the array initialized in the constructor for Menu class.
    for (let i=0; i < this.programs.length; i++) {
        programString += i + ') Program: ' + this.programs[i].name + ' - Day: ' + this.programs[i].programDay + ' - Size Limit: ' + this.programs[i].sizeLimit +'\n';
    } //end for loop
    alert (programString);
} //end displayAllPrograms method

//create method to create a program name. The parameters defined in Program class constructor are name, programDay, sizeLimit.
//still in Menu class.
createProgram() {
    let name = prompt('Enter name of new Program:');
    let programDay = prompt('Enter the day of week Monday thru Thursday for the Program:');
    let sizeLimit = prompt('Enter the size limit of the Program:');
    this.programs.push(new Program (name, programDay, sizeLimit));
} //end createProgram method

//create method to view program info.  still in Menu class.
viewProgram() {
    let index = prompt ('Enter the index of the program you wish to view:');
    //validate user input
    if (index > -1 && index < this.programs.length); {
    this.selectedProgram = this.programs[index];
    //changed below to show all Program parameters.
    let description = 'Program Name: ' + this.selectedProgram.name + ' - Day: ' + this.selectedProgram.programDay + ' - Size Limit: ' + this.selectedProgram.sizeLimit + '\n' + 'Students:' + '\n';

//add description of all the students in the program
    for (let i=0; i < this.selectedProgram.students.length; i++) {
    description += i + ') ' + this.selectedProgram.students[i].firstName + ' ' + this.selectedProgram.students[i].lastName + '\n';
    } //end for loop
    
let selection = this.showProgramMenuOptions(description);
switch (selection) {
    case '1':
        this.createStudent();
        break;
    case '2':
        this.deleteStudent();
         } //end switch  
    } //end if statement
} //end viewProgram method

//inserting deleteProgram method here.  start outside viewProgram method. still in Menu class.
deleteProgram() {
    let index = prompt('Enter the index of the Program you wish to delete:');
    //validate user input
    if (index > -1 && index < this.programs.length) {
        //use built-in method splice to delete one program name at index number input.
        this.programs.splice(index, 1);
    } //end if statement
} //end deleteProgram method

//start outside of viewProgram method to add createStudent method.  still in Menu class.
createStudent() { 
    let firstName = prompt ('Enter First Name of new Student:');
    let lastName = prompt('Enter Last Name of new Student:');
    this.selectedProgram.students.push(new Student(firstName, lastName));
} //end createStudent method

//create deleteStudent method
deleteStudent() {
    let index = prompt('Enter the index of the Student you wish to delete:');
    //validate user input
    if (index > -1 && index < this.selectedProgram.students.length) {
        //use built-in method splice to delete the one student at the index number input.
        this.selectedProgram.students.splice(index, 1);
        } //end if statement
    } //end deleteStudent method

} //end Menu class

//create instance of new Menu to start it
let menu = new Menu();
menu.start();











 