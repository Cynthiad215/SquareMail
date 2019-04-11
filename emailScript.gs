/*
* @Param: e is event object from change Event
* Sends confirmation email when new submission is made to form
*/
function sendConfirmation(e) {
  //Get Spreadsheet and Sheet 
  //Note: sheet must have name of event, duplicate sheet for making edits
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  
  //Get most recently added row, get name and email cells
  var lastRow = sheet.getLastRow();
  var name = sheet.getRange(lastRow, 2).getValue();
  var email = sheet.getRange(lastRow, 3).getValue();
  var nameCaps = name.toString().toUpperCase();
  
  //Email body
  var emailBody = '<div style="padding: 3% 8%;">' + 
     '<div>Hey ' + nameCaps + ',' + 
     '<p>Thank you for signing up with us for the event: ' + sheet.getName() + 
     '! Stay tuned for an email from our team for more details.</p></div></div>';

  //Send email only if change detected is from the Gmail account connected to the form
  //ie. Email used to connect to squarespace form is example@gmail.com
  if( (e['changeType'] == "INSERT_ROW") && (e.user['email'] == "example@gmail.com") ){
     GmailApp.sendEmail(email, "Event Confirmation for " + nameCaps, '', { 
         htmlBody: emailBody, 
         bcc: "example2@gmail.com", 
         });
  } else {
    Logger.log("Issue: " + JSON.stringify(e));
  }
}
