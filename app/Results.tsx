import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { useQuery, QueryClient } from "react-query";

import { generateProductText } from "@/lib/utils";

export default function Results({ prevStep }: any) {
  const queryClient = new QueryClient();
  const { data, status, isLoading } = useQuery("result", async () => {
      const res = await fetch('/api/fetchResult',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"text":generateProductText()}),
      });
      if (!res.ok) {
        throw new Error('Request failed');
      }
      return res.json();
    }, {
      staleTime: Infinity,
    });



const refetchQuery = async () => {
  await queryClient.refetchQueries('result');
}
  if(isLoading ||!data){
    return( <div className="flex justify-center items-center h-full">
    <div className="flex items-center justify-center w-[20%]">
      <svg className="scale-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle fill="#0D9488" stroke="#0D9488" stroke-width="2" r="15" cx="40" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
        </circle>
        <circle fill="#0D9488" stroke="#0D9488" stroke-width="2" r="15" cx="100" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
        </circle>
        <circle fill="#0D9488" stroke="#0D9488" stroke-width="2" r="15" cx="160" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
        </circle>
      </svg>
    </div>
  </div>)
  }
  return (
    <div className="">
      <div className="flex  flex-col items-center justify-center xl:mx-[10%]">
        <Card className="w-full h-auto ">
          <CardHeader className="text-white bg-teal-600 rounded-sm">
            <CardTitle>Based On These Results</CardTitle>
          </CardHeader>
          <CardContent className="grid  p-10">
            <div className=" flex flex-1 rounded-md flex  items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2   ">
                <div className="h-[300px] w-[350px] border border-black border-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={data?.data_url}
                    className="object-contain "
                  />
                </div>
                <div className="flex-1 w-full  ">
                  <h1 className="text-lg font-medium pb-2 leading-none">
                    Shoe Features:
                  </h1>
                  <p className="w-full leading-relaxed">
  {data?.description}
</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-6 ">
          
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none py-2">
                  Postal Address:
                </label>
                <textarea
                  className=" resize-none w-full h-20 border border-black border-2 rounded-md p-2"
                  placeholder="Enter your postal address"
                ></textarea>
              </div>
            </div>
          </CardContent>
          <CardFooter className=" flex space-x-4  justify-end ">
            <button  onClick={prevStep} className="text-base focus:outline-none flex items-center px-4 py-2 rounded cursor-pointer bg-teal-100 border-2 border-teal-600 bg-opacity-60 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">
              <span className="mr-2">
                <RefreshCw />
              </span>
              GENERATE ANOTHER
            </button>
            <button
           
              className="text-base focus:outline-none px-4 py-2 rounded  cursor-pointer                       
                bg-teal-100 
                border-2 border-teal-600
                bg-opacity-60
                text-gray-700 
                border duration-200 ease-in-out 
                border-gray-600 transition"
            >
              CONFIRM CHOICE + SEND
            </button>
          </CardFooter>
        </Card>
      </div>

    </div>
  );
}
