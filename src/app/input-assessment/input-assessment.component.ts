import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-assessment',
  templateUrl: './input-assessment.component.html',
  styleUrls: ['./input-assessment.component.scss']
})
export class InputAssessmentComponent implements OnInit {

  constructor() { }

  @Input()
  points!: number;

  @Output()
  pointsChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  PointMovie(assessment: number){
    this.points += assessment;
    this.pointsChange.emit(assessment);
  }
  

}
