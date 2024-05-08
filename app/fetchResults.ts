
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export function generateProductText() {
  const formData = {
    ...(JSON.parse(localStorage.getItem("productFormData") ?? "{}") as {}),
    ...JSON.parse(localStorage.getItem("detailsFormData") ?? "{}"),
  };
  
  const {fullName, athleteExp, sport, frequency, activityLevel, specificNeeds, region, followers, colourPreference, favouriteShoe, shoeSize} = formData;
console.log(formData)
  // Check if all required data is available
  if (!fullName || !athleteExp || !sport || !frequency || !activityLevel || !specificNeeds || !region || !followers || !colourPreference || !favouriteShoe || !shoeSize) {
      return null;
  }

  const text = `I'm looking for assistance in finding the perfect shoe for an influencer client of mine. The client, ${fullName}, is a ${athleteExp} athlete who engages in ${sport} about ${frequency} a week. Despite their ${activityLevel} level, they face challenges due to a specific condition with their ${specificNeeds}, so it's crucial that the shoe provides adequate support.
  
  ${fullName} has a significant social media following in the ${region}, with ${followers}, and prefers ${colourPreference} in their footwear. Their favorite shoe to date has been the ${favouriteShoe}. Considering their ${shoeSize} and the need for comfort due to their ${specificNeeds}, could you recommend a shoe that aligns with these preferences and requirements?
  
  Please also provide one image link of the shoe chosen`

  return text;
}




export async function fetchResult(){

const descriptionBody = {chat_input: "hello"} ;

const requestHeaders = new Headers({"Content-Type" : "application/json","origin":"*","Access-Control-Allow-Origin":"*"});


const apiKey = "SUKrFyYYovlCkjfIgbg3ZFbNQDU1lyeH";
if (!apiKey)
{
	throw new DOMException("A key should be provided to invoke the endpoint");
}
requestHeaders.append("Authorization", "Bearer " + apiKey)
requestHeaders.append("azureml-model-deployment", "uismart-yckzx-1");

const url = "https://uismart-yckzx.swedencentral.inference.ml.azure.com/score";
// const descriptionBody = {chat_input: generateProductText()} ;
try {

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(descriptionBody),
    headers: requestHeaders
  });

  if (!response.ok) {
    console.debug(...response.headers as any);
    console.debug(response.body);
    throw new Error("Request failed with status code" + response.status);
  }

  const result = await response.json();
return result


} catch (err) {
  return err;
}
}

