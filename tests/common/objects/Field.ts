import CommonActions from '../actions/CommonActions';
import {ElementFinder} from 'protractor';
import Element from "./Element";

let commonActions: CommonActions = new CommonActions();

export default class Field extends Element{

  constructor(element: ElementFinder, LOGNAME: string){
    super(element, LOGNAME)
  }

  sendKeys(text: string): void {
    commonActions.sendKeys(this.element, this.LOGNAME, text);
  };
}
