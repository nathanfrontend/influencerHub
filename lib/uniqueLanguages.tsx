import React from "react";
import { languages } from "./Languages";

export const uniqueCountries = React.useMemo(() => {
    const countriesSeen = new Set();
    const uniqueCountries = languages.filter((language) => {
      if (!countriesSeen.has(language.country)) {
        countriesSeen.add(language.country);
        return true;
      }
      return false;
    });
    return uniqueCountries;
  }, [languages]);