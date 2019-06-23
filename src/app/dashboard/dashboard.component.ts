import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef
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

  aboutDialogRef: MatDialogRef<AboutComponent>;
  resumeDialogRef: MatDialogRef<ResumeComponent>;
  contactDialogRef: MatDialogRef<ContactComponent>;
  projectsDialogRef: MatDialogRef<ProjectsComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAbout() {
    this.aboutDialogRef = this.dialog.open(AboutComponent);
  }

  openResume() {
    this.resumeDialogRef = this.dialog.open(ResumeComponent);
  }

  openProjects() {
    this.projectsDialogRef = this.dialog.open(ProjectsComponent);
  }

  openContact() {
    this.contactDialogRef = this.dialog.open(ContactComponent);
  }
}
