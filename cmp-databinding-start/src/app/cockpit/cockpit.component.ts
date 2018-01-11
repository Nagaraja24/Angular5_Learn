import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContent: ElementRef;
  //Do not manipualte DOM using ViewChild Ref(bad practice)
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName.value);// Getting from local reference
    console.log(this.serverContent.nativeElement.value); // from ViewChild making use of local ref
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
