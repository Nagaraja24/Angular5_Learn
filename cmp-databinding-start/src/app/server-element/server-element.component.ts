import { Component,
   OnInit, 
   Input, 
   OnChanges, 
   ViewEncapsulation,
   SimpleChanges,
   AfterContentInit,
   ElementRef,
   ViewChild,
   ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: {name:string, type:string, content: string };
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() { 
    console.log("Constructor Called ");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("Ng on init called");
    console.log("Text Content:"+this.header.nativeElement.textContent);
    console.log("Text Content of paragraph:"+this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("Ng DoCheck Called");
  }

  ngAfterContentInit(){
    console.log("ngAfter COntent Init");
    console.log("Text Content:"+this.header.nativeElement.textContent)
  }

  ngAfterViewInit(){
    console.log("ngAfterView Init Called");
    console.log("Text Content:"+this.header.nativeElement.textContent);
    console.log("Text Content of paragraph:"+this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Called");
  }

 

}
