import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ResumeComponent } from '../resume/resume.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAbout() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AboutComponent, dialogConfig);
  }

  openResume() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ResumeComponent, dialogConfig);
  }

  openProjects() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ProjectsComponent, dialogConfig);
  }

  openContact() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ContactComponent, dialogConfig);
  }
}
