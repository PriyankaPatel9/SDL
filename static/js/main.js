import TableCsv from "./TableCsv.js";
const chartRoot = document.querySelector("#csvChart");
const csvFileInput = document.querySelector("#id_csv_file");
const tableCsv = new TableCsv(chartRoot);
csvFileInput.addEventListener("change", e => {
    //console.log(csvFileInput.files[0]);
    Papa.parse(csvFileInput.files[0], {
        download: true,
        header: false, 
        skipEmptyLines: true,
        complete: result => {
            console.log(result);
            tableCsv.update(result);
        }
    });
});
