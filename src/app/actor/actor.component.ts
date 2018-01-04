import { Component, OnInit, Input } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
  animations: [fadeInAnimation]
})
export class ActorComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  actors: any[];

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  getActors() {
    this.dataService.getRecords("actors")
      .subscribe(
        actors => this.actors = actors,
        error =>  this.errorMessage = <any>error);
  }

  deleteActor(id:number) {

    let dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.deleteRecord("actors", id)
          .subscribe(
            actor => {
              this.successMessage = "Record(s) deleted successfully"; 
              this.getActors(); 
            },
            error =>  this.errorMessage = <any>error);
      }
    });
  }


  ngOnInit() {
    this.getActors();
  }

}
