# SquareMail

For Squarespace form blocks connected to Google sheets for storage, this script will send confirmation emails when a new submission is made from Squarespace.

Can also be repurposed to use with Google Forms.
================
How to Use
================

1. Setup Squarespace form with Name and Email fields.
2. Connect to Google Drive storage.
3. In generated google sheet, add the email script
4. Setup triggers for the form:
    On function: sendConfirmation(), Event type: on change 