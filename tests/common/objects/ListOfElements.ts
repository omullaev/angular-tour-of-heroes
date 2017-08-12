import CommonActions from '../actions/CommonActions';
import {ElementArrayFinder} from 'protractor';

let commonActions: CommonActions = new CommonActions();

export default class ListOfElements {

  protected listOfElements: ElementArrayFinder;
  protected LOGNAME: string;

  constructor(listOfElements: ElementArrayFinder, LOGNAME: string){
    this.listOfElements = listOfElements;
    this.LOGNAME = LOGNAME;
  }

  public expectContainText(text: string): void {
    this.listOfElements.each((element, index) => {
      commonActions.isTextContainsCaseInsensitive(element, text, this.LOGNAME);
      commonActions.log('Containing of text: ' + text + ' of element with index: ' + index + ' has been checked');
    });
  };

  public expectCorrectColor(color: string): void {
    this.listOfElements.each(async (element) => {
      commonActions.isBackgroundColorEquals(element, color, this.LOGNAME);
      let text = await element.getText();
      commonActions.log(text + ' color has been checked');
    });
  };

  public expectEqualText(text: string): void {
    this.listOfElements.each((element, index) => {
      commonActions.isTextEquals(element, text, 'Element with index: ' + index + ' from ' + this.LOGNAME);
      commonActions.log('Text of element with index ' + index + ' has been checked');
    });
  };
}
