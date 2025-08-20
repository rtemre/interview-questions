const { useState } = require("react");

async function useQuseryHook(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  try {
    setIsLoading(true);
    const result = await fetch(url);
    const response = await result.json();
    setData(response);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }

  return [data, isLoading];
}

export { useQuseryHook };
