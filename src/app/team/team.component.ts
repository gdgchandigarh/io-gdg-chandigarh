import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  coreTeam: CoreTeam[] = [
    new CoreTeam(1,'Kamal Vaid', 'Kamal Vaid.png', 'Technology Lead'),
    new CoreTeam(2,'Yatin Nayyar', 'Yatin Nayyar.png', 'Project Engineer'),
    new CoreTeam(3,'Ayush Sharma', 'Ayush Sharma.png', 'Application Developer'),
    new CoreTeam(4,'Harneet Singh', 'Harneet Singh.png', 'Associate Consultant'),
    new CoreTeam(5,'Loveleen Kaur', 'Loveleen Kaur.png', 'Software Engineer'),
  
  ];

  volunteers: Volunteers[] = [
    new Volunteers(1,'Pranav Kumar Verma', 'Pranav Kumar Verma.png', 'Senior Engineer'),
    new Volunteers(2,'Simar Preet', 'Simar Preet Singh.png', 'Sr. Software Developer'),
    new Volunteers(3,'Veer Pratap Singh', 'Veer Pratap Singh.jpg', 'Senior Software Engineer'),
    new Volunteers(4,'Ankur Gill', 'Ankur Gill.jpg', 'Director Operations SVIET'),
    new Volunteers(5,'Nisha', 'Nisha.jpeg', 'Assistant Professor'),
    new Volunteers(6,'Ronit Jai Prakash', 'Ronit Jai Prakash.jpg', 'Technical Associate'),
    new Volunteers(7,'Parveen Jaiswal ', 'Parveen Jaiswal.jpeg', 'Full Stack Developer'),
    new Volunteers(8,'Ayush Kumar', 'Ayush Kumar.jpg', 'Frontend Developer'),
    new Volunteers(9,'Shubham Kumar Chandrabansi', 'Shubham Kumar Chandrabansi.jpg', 'GDSC Lead'),
    new Volunteers(10,'Kanishk Tyagi', 'Kanishk Tyagi.jpg', 'GDSC Lead'),
    new Volunteers(11,'Naveen', 'Naveen.jpg', 'Full Stack Developer'),
    new Volunteers(12,'Priyanshi', 'Priyanshi.jpg', 'Graphic Designer'),
    new Volunteers(13,'Mantasha', 'Mantasha.jpg', 'Graphic Designer'),
  ];
}


export class CoreTeam {
  id: number;
  name: string;
  designation: string;
  imageName: string;


constructor(id: number, name: string,imageName: string, designation: string,) {
    this.id = id;
    this.name = name;
    this.imageName = imageName;
    this.designation = designation;
  }
}

export class Volunteers {
  id: number;
  name: string;
  designation: string;
  imageName: string;


  constructor(id: number, name: string, imageName: string, designation: string) {
    this.id = id;
    this.name = name;
    this.imageName = imageName;
    this.designation = designation;
  }
}