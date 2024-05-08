import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateProductText() {
  const formData = {
    ...(JSON.parse(localStorage.getItem("productFormData") ?? "{}") as {}),
    ...JSON.parse(localStorage.getItem("detailsFormData") ?? "{}"),
  };
  
  const {fullName, athleteExp, sport, frequency, activityLevel, specificNeeds, region, followers, colourPreference, favouriteShoe, shoeSize} = formData;

  // Check if all required data is available
  if (!fullName || !athleteExp || !sport || !frequency || !activityLevel || !specificNeeds || !region || !followers || !colourPreference || !favouriteShoe || !shoeSize) {
      return null;
  }

  const text = `I'm looking for assistance in finding the perfect shoe for an influencer client of mine. The client, ${fullName}, is a ${athleteExp} athlete who engages in ${sport} about ${frequency} a week. Despite their ${activityLevel} level, they face challenges due to a specific condition with their ${specificNeeds}, so it's crucial that the shoe provides adequate support.
  
  ${fullName} has a significant social media following in the ${region}, with ${followers}, so its important to know if the hsoe could be marketed here, and prefers ${colourPreference} in their footwear. Their favorite shoe to date has been the ${favouriteShoe}. Considering their ${shoeSize} and the need for comfort due to their ${specificNeeds}, could you recommend a shoe that aligns with these preferences and requirements?
  
  Please also provide one image link of the shoe chosen on its own, without labelling :here is the image link"`

  return text;
}