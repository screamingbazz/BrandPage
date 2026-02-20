import ExcelJS from 'exceljs';

export async function readExcel(filePath: string, sheetName: string) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet(sheetName);
  if (!worksheet) throw new Error(`Sheet "${sheetName}" not found`);

  const rows: any[] = [];

  // Read header row
  const headerRow = worksheet.getRow(1);
  const headers: string[] = [];
  headerRow.eachCell({ includeEmpty: true }, (cell) => {
    headers.push((cell.value ?? '').toString().trim());
  });

  // Read each data row
  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    if (rowNumber === 1) return; // skip header
    const rowData: any = {};

    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      const header = headers[colNumber - 1];
      if (header) {
        let value: any = cell.value;

        // Normalize value types
        if (value === null || value === undefined) value = '';
        else if (typeof value === 'object' && 'text' in value) value = value.text;
        else if (typeof value === 'object' && 'formula' in value && value.result !== undefined) value = value.result;

        // Convert Excel TRUE/FALSE strings to booleans
        if (typeof value === 'string' && (value.toUpperCase() === 'TRUE' || value.toUpperCase() === 'FALSE')) {
          value = value.toUpperCase() === 'TRUE';
        }

        rowData[header] = value;
      }
    });

    rows.push(rowData);
  });

  return rows;
}
