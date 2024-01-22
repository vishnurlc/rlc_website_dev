const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  try {
    const dic = await (locale ? dictionaries[locale]() : dictionaries.en());
    return dic;
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    throw error; // Rethrow the error for further handling
  }
};
// This is a simple implementation of i18next's `backend` option, which
