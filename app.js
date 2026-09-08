function doGet() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  const data =
    sheet.getDataRange().getValues();

  data.shift();

  const result = data
    .filter(row => row[0] && row[4] === true)
    .map(row => ({

      category: row[0],

      name: row[1],

      description: row[2],

      url: row[3],

      active: row[4],

      order: row[5],

      icon: row[6] || "fa-link",

      keywords: row[7] || ""

    }));


  return ContentService
    .createTextOutput(
      JSON.stringify(result)
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );

}
