export const fetchRandomFact = async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching ramdom fact:", error);
    throw error;
  }
};

export const fetchTodayFact = async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today?language=en");

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching today fact:", error);
    throw error;
  }
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
