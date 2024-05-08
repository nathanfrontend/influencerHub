"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/router";


const formSchema = z.object({
  shoeSize: z.string().min(1).max(50),
  leisureOrSport: z.string().min(1).max(50),
  athleteExp: z.string().min(1).max(15),
  activityLevel: z.string().min(1).max(50),
  frequency: z.string().min(1).max(25),
  sport: z.string().min(1).max(25),
  favouriteShoe: z.string().min(1).max(25),
  colourPreference: z.string().min(1).max(25),
  specificNeeds: z.string().min(1).max(50),
});

export default function ProductInfo({ nextStep, prevStep }: any) {

  let defaultValues = {
    shoeSize: "",
    leisureOrSport: "",
    athleteExp: "",
    activityLevel: "",
    frequency: "",
    sport: "",
    favouriteShoe: "",
    colourPreference: "",
    specificNeeds: "",
  };

  let formData = null;

  if (typeof window !== "undefined") {
    formData = localStorage.getItem("productFormData") || null;
  }

  if (formData) {
    defaultValues = { ...defaultValues, ...JSON.parse(formData) };
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    localStorage.setItem("productFormData", JSON.stringify(values));
    nextStep()
    // handleClick()
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="shoeSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shoe Size</FormLabel>

                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How frequently do they wear Nike</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="occasions only">
                        Occasions Only
                      </SelectItem>
                      <SelectItem value="1-2 days per week">
                        1-2 Days per week
                      </SelectItem>
                      <SelectItem value="3-5 days a week">
                        3-5 Days per week
                      </SelectItem>
                      <SelectItem value="everyday">Every Day</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="leisureOrSport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leisure or Sports</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="leisure">Leisure</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sport</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="athleteExp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Athlete Experience </FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="novice">
                        Novice/ Non Trainer
                      </SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advance">Advance</SelectItem>
                      <SelectItem value="pro">Pro</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="favouriteShoe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Most worn shoes</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="colourPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Colour Preference</FormLabel>

                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="specificNeeds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Needs</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What are the specific needs of this individual?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex-auto flex flex-row my-8 justify-between">
            <button
              onClick={prevStep}
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded  cursor-pointer 
                                    hover:bg-gray-200  
                                    bg-gray-100 
                                    text-gray-700 
                                    border duration-200 ease-in-out 
                                    border-gray-600 transition"
            >
              Previous
            </button>

            <button
              type="submit"
              className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded cursor-pointer 
                                hover:bg-teal-600  
                                bg-teal-100 
                                text-black
                                border-2
                                border duration-200 ease-in-out 
                                border-teal-600 transition"
            >
              GENERATE RESULT
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
