
export default async (req, res) => {
  try {
    const apiResponse = await fetchDataFromExternalAPI();
    res.status(200).json(apiResponse);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchDataFromExternalAPI = async () => {
  const Username = "administrator";
  const Password = "OM]93;cF-+U/amo;";
  const response = await fetch(
    "https://lmdev.wundeve.com/rest/content/currentsite/en-us/all/herga?format=json&coupleddata=true",
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${Username}:${Password}`),
      },
      credentials: "include",
   
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};
