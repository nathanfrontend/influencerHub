
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Details from "./Details";
import ProductInfo from "./ProductInfo";
import Results from "./Results";
import { QueryClient, QueryClientProvider } from 'react-query';

export default function HomePage() {
  const queryClient = new QueryClient();
  const [step, setStep] = useState(0);
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="items-center justify-start w-full p-8 ">
   
      <div className="">
        <h1 className="text-3xl py-4 ">Influencer Details</h1>

        <div className="flex items-center pb-6 ">
          <div
            className={`flex items-center ${
              step >= 0 ? "text-teal-600" : " text-gray-500"
            }    relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                step >= 0
                  ? "bg-teal-600 border-teal-600 text-white"
                  : " border-gray-300"
              }  flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-user"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <circle cx="12" cy="8" r="2" />
                <path d="M15 13a3 3 0 1 0-6 0" />
              </svg>
            </div>
            <div
              className={` ${
                step >= 0 ? "text-teal-600" : "text-gray-500"
              }   absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase`}
            >
              Details
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              step >= 1 ? "border-teal-600" : "border-gray-300"
            }  `}
          />
          <div
            className={`flex items-center ${
              step >= 1 ? "text-teal-600" : " text-gray-500"
            }    relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                step >= 1
                  ? "bg-teal-600 border-teal-600 text-white"
                  : " border-gray-300"
              }  flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-footprints"
              >
                <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
                <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
                <path d="M16 17h4" />
                <path d="M4 13h4" />
              </svg>
            </div>
            <div
              className={` ${
                step >= 1 ? "text-teal-600" : "text-gray-500"
              }   absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase`}
            >
              Product Information
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              step >= 2 ? "border-teal-600" : "border-gray-300"
            }  `}
          />
          <div
            className={`flex items-center ${
              step >= 2 ? "text-teal-600" : " text-gray-500"
            }    relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                step >= 2
                  ? "bg-teal-600 border-teal-600 text-white"
                  : " border-gray-300"
              }  flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail "
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div
              className={` ${
                step >= 2 ? "text-teal-600" : "text-gray-500"
              }   absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase`}
            >
              Results
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">
        {step === 0 && <Details nextStep={nextStep} />}
        {step === 1 && <ProductInfo prevStep={prevStep} nextStep={nextStep} />}
        {step === 2 && <QueryClientProvider client={queryClient}>
          <Results prevStep={prevStep}  />     
          </QueryClientProvider>}
      </div>
    </div>
  );
}
