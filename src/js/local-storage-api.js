export { getDataFromLocalStorage, addDataToLocalStorage };
function addDataToLocalStorage(key, value) {
  const normalData = JSON.stringify(value);

  try {
    localStorage.setItem(key, normalData);
  } catch (error) {
    console.error(error);
  }
}

function getDataFromLocalStorage(key) {
  try {
    const lsData = localStorage.getItem(key);
    if (lsData === null) {
      return [];
    }

    const normalData = JSON.parse(lsData);

    return normalData;
  } catch (error) {
    console.error(error);
  }
}
