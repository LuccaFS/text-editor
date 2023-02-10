import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Headings } from './styles-model';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  /**
   * Style options for text alignment
   */
  @Input() StyleAlign!: boolean;

  /**
   * Style options Bold (B), Italic (I) or Underline (U) for the text
   */
  @Input() StyleBIU!: boolean;

  /**
   * Style options for header size text
   */
  @Input() headerSizes!: Headings[];

  @ViewChild('text-input') textInput!: HTMLDivElement;


  //control variables
  aligment='left';



  ngOnInit(): void {
    //If no specific header is given, set all as default
    if(!this.headerSizes){
      this.headerSizes = [{name: 'H1', value: 'h1'},
        {name: 'H2', value: 'h2'},
        {name: 'H3', value: 'h3'},
        {name: 'H4', value: 'h4'},
        {name: 'H5', value: 'h5'},
        {name: 'H6', value: 'h6'}]
    }
  }

  modifyText(command: string, dafaultUi?: boolean, value?:string){
    document.execCommand(command, dafaultUi, value)
  }

  /**
   * Format text style with BIU or aligment
   * @param id button id and type of text formatation
   */
  formatText(id: string){
    const element = document.getElementById(id);
    if(!id.includes('justify')){
      element?.classList.toggle("option-active")
    }
    this.modifyText(id, false)
  }


}
