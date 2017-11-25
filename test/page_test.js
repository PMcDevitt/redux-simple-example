const environment = require("./config.js").environment
Feature('Page.test.js');

Scenario('Testing URL', (I) => {
  I.amOnPage('/')
  I.grabTitle('React App')
})
Scenario('The correct elements should be present on the page', (I) => {
  I.seeElement('.ReduxCounter-decrease')
  I.seeElement('.ReduxCounter-decrease')
  I.seeElement('.ReduxCounter-value')
})
Scenario('When the increase button is clicked it should add 1 to the value displayed', (I) => {
  I.see('0', '.ReduxCounter-value')
  I.click('.ReduxCounter-increase')
  I.see('1', '.ReduxCounter-value')
  I.click('.ReduxCounter-increase')
  I.see('2', '.ReduxCounter-value')
})
Scenario('When the decrease button is clicked it should subtract 1 to the value displayed', (I) => {
  I.see('2', '.ReduxCounter-value')
  I.click('.ReduxCounter-decrease')
  I.see('1', '.ReduxCounter-value')
  I.click('.ReduxCounter-decrease')
  I.see('0', '.ReduxCounter-value')
})
//I.seeElement('//button[contains(., "press me")]');
