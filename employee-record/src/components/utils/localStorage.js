function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function existingData(key, newdata) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    data.push(newdata);
    // console.log("newdata", newdata);
    // console.log("data", data);
  localStorage.setItem(key, JSON.stringify(data));
  return data
  } catch (err) {
    return undefined;
  }
}

function deleteFromLS(key, id) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    let filteredData = data.filter((emp) => emp.id !== id);;
    // console.log("Delete data", filteredData);
    localStorage.setItem(key, JSON.stringify(filteredData));
    return filteredData
  } catch (err) {
    return undefined;
  }
}

export { loadData, saveData, existingData,deleteFromLS };
