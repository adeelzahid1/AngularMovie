import { Component,Input,OnInit, Output} from '@angular/core';
import { multipleSelectorModel } from './multiple-selector';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit{
  constructor(){}

  @Input()
  SelectedItem : multipleSelectorModel[] = [];

  @Input()
  NonSelectedItems : multipleSelectorModel[] = [];

  @Output()

  ngOnInit(): void {

  }

  select(item: multipleSelectorModel, index: number){
    this.SelectedItem.push(item);
    this.NonSelectedItems.splice(index, 1);
  }
  deSelect(item: multipleSelectorModel, index: number){
    this.NonSelectedItems.push(item);
    this.SelectedItem.splice(index, 1)
  }

  selectAll(){
    this.SelectedItem.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll(){
    this.NonSelectedItems.push(...this.SelectedItem);
    this.SelectedItem = [];
  }

}
