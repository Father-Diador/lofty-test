const getJson = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

async function fetchData() {
  try {
    const json1 = await getJson("/i/1.json");
    if (json1.key) {
      const json2 = await getJson("/i/2.json");
      return json2.key2;
    }
    throw new Error("No key");
  } catch (error) {
    console.error(error);
  }
}

fetchData();
