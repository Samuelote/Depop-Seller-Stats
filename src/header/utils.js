
import { readString } from 'react-papaparse'
import currency from 'currency.js'
import moment from 'moment'

export const filterData = (data, { start, end }) => {
  const filteredData = [];
  data.files.forEach((file) => {
    if (
      new Date(file.date_of_sale) >= start &&
      new Date(file.date_of_sale) <= end
    ) {
      filteredData.push(file)
    }
  })
  return setUpState(filteredData);
}
//Reads files in
export const processFiles = (files, setState, err, useExample) => {
  if (!files.length) return;
  let results = []

  if (useExample) {
    readCSVString(
      files,
      (res) => results = [...results, ...res],
      err
    )
    initState(results, setState)

  } else {
    files.forEach((file, i) => {
      const fileReader = new FileReader();
      fileReader.readAsText(file)
      fileReader.onloadend = () => {
        readCSVString(
          fileReader.result,
          (res) => results = [...results, ...res],
          err
        )
        if (i === files.length - 1) {
          initState(results, setState)
        }
      }
    })
  }

}

const readCSVString = (file, results, err) => {
  if (readString(file).errors.length) {
    err()
  } else {
    results(readString(file).data)
  }
}

//Initialized data format that we'll throw into our app's state
const initState = (originalFiles, setState) => {
  const files = cleanAndSort(originalFiles);
  setState(setUpState(files))
}
const setUpState = (files) => {
  const data = {}
  data.files = files;
  data.total_earnings = 0;
  data.total_shipping_cost = 0;
  data.avg_price = 0;
  data.avg_shipping = 0;
  data.avg_total = 0;
  data.avg_time_listed = 0;
  data.currency_type = files[0]["item_price"][0]
  files.forEach((file) => {
    const miliSeconds = new Date(file.date_of_sale).getTime() - new Date(file.date_of_listing).getTime()
    data.avg_price += currency(file["item_price"]).value
    data.avg_shipping += currency(file["buyer_shipping_cost"]).value
    data.avg_total += currency(file["total"]).value
    data.total_earnings += currency(file["total"]).value
    data.total_shipping_cost += currency(file["buyer_shipping_cost"]).value
    data.avg_time_listed += miliSeconds / (1000 * 3600 * 24);

  })
  data.avg_time_listed = parseInt(data.avg_time_listed / files.length);
  data.avg_price = parseFloat(data.avg_price / files.length).toFixed(2);
  data.avg_shipping = parseFloat(data.avg_shipping / files.length).toFixed(2);
  data.avg_total = parseFloat(data.avg_total / files.length).toFixed(2);
  data.total_earnings = parseFloat(data.total_earnings).toFixed(2);
  data.total_shipping_cost = parseFloat(data.total_shipping_cost).toFixed(2);
  return data
}
//Util function that cleans up format and sorts our files
const cleanAndSort = (originalFiles) => {
  const filesToMap = originalFiles.slice().filter(row => row[0] !== "Date of sale")
  const newFiles = [];

  //get's rid of duplicates and converts arrays to objects
  filesToMap.forEach((row, i) => {
    const item = {}
    originalFiles[0].forEach((key, i) => {
      const keyStr = key.toLowerCase().replace(/ /g, "_");
      const val =
        ('date_of_sale' === keyStr || 'date_of_listing' === keyStr)
          ? moment(row[i], 'DD-MM-YYYY').format("MM-DD-YYYY")
          : row[i]

      item[keyStr] = val
    })
    const existsAlready = newFiles.find(e => JSON.stringify(e) === JSON.stringify(item))
    if (!existsAlready) {
      newFiles.push(item)
    }
  })
  // Sorts by date
  const sorted = newFiles.sort((a, b) => {
    const fullDateA = new Date(`${a.date_of_sale} ${a.time_of_sale}`)
    const fullDateB = new Date(`${b.dbte_of_sale} ${b.time_of_sale}`)
    return fullDateA - fullDateB
  })
  return sorted;
}