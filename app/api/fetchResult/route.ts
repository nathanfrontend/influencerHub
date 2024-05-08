
import type { NextApiRequest, NextApiResponse } from 'next'
export async function POST( req: NextApiRequest,res:NextApiResponse) {
  const body = await req.json()

  // console.log(body.text)

const requestHeaders = new Headers({"Content-Type" : "application/json","origin":"*","Access-Control-Allow-Origin":"*"});


const apiKey = "SUKrFyYYovlCkjfIgbg3ZFbNQDU1lyeH";
if (!apiKey)
{
	throw new DOMException("A key should be provided to invoke the endpoint");
}
requestHeaders.append("Authorization", "Bearer " + apiKey)
requestHeaders.append("azureml-model-deployment", "uismart-yckzx-1");

const url = "https://uismart-yckzx.swedencentral.inference.ml.azure.com/score";
const descriptionBody = {chat_input: body.text} ;
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
const data = await response.json();

const splitIndex = data.chat_output.lastIndexOf('https://');
const description = data.chat_output.substring(0, splitIndex).trim();
let data_url = data.chat_output.substring(splitIndex);
data_url = data_url.replace('(', '').replace(')', '');

const result = {
  description,
  data_url,
};
return new Response(JSON.stringify(result))

} catch (err) {
  return new Response(JSON.stringify(err))
}
}





