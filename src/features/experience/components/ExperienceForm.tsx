"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { experienceSchema, ExperienceFormValues } from "../schemas/experienceSchema";
import { FormSkeleton } from "@/components/FormSkeleton";
import { useExperienceAllQuery } from "../hooks/useExperienceAllQuery";
import { useCreateExperienceMutation } from "../hooks/useCreateExperienceMutation";

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 150 }, (_, i) => new Date().getFullYear() - i);

export function ExperienceForm() {
  const { data, isLoading } = useExperienceAllQuery();
  const { mutate, isPending } = useCreateExperienceMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceSchema),
    values: data?.data
      ? {
          ...data.data,
          currentlyWorkHere: data.data.currentlyWorkHere
            ? data.data.currentlyWorkHere
            : false,
        }
      : {
          jobTitle: "",
          companyName: "",
          country: "",
          state: "",
          city: "",
          startMonth: new Date().getMonth() + 1,
          startYear: new Date().getFullYear(),
          endMonth: "",
          endYear: "",
        },
  });

  const currentlyWorkHere = watch("currentlyWorkHere");

  const onSubmit: SubmitHandler<ExperienceFormValues> = (formData) => {
    mutate(formData);
  };

  if (isLoading) return <FormSkeleton rows={6} cols={2} />;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <div className="border-accent rounded-2xl border p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" {...register("jobTitle")} />
              {errors.jobTitle && (
                <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" {...register("companyName")} />
              {errors.companyName && (
                <p className="text-sm text-red-500">{errors.companyName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" {...register("country")} />
              {errors.country && (
                <p className="text-sm text-red-500">{errors.country.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" {...register("state")} />
              {errors.state && (
                <p className="text-sm text-red-500">{errors.state.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} />
              {errors.city && (
                <p className="text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="grid gap-2">
              <Label>Start Month</Label>
              <Controller
                control={control}
                name="startMonth"
                render={({ field }) => (
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={String(field.value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {MONTHS.map((month) => (
                        <SelectItem key={month} value={String(month)}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.startMonth && (
                <p className="text-sm text-red-500">{errors.startMonth.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label>Start Year</Label>
              <Controller
                control={control}
                name="startYear"
                render={({ field }) => (
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={String(field.value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {YEARS.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.startYear && (
                <p className="text-sm text-red-500">{errors.startYear.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label>End Month</Label>
              <Controller
                control={control}
                name="endMonth"
                render={({ field }) => (
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={field.value ? String(field.value) : ""}
                    disabled={currentlyWorkHere}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {MONTHS.map((month) => (
                        <SelectItem key={month} value={String(month)}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.endMonth && (
                <p className="text-sm text-red-500">{errors.endMonth.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label>End Year</Label>
              <Controller
                control={control}
                name="endYear"
                render={({ field }) => (
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={field.value ? String(field.value) : ""}
                    disabled={currentlyWorkHere}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {YEARS.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.endYear && (
                <p className="text-sm text-red-500">{errors.endYear.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Controller
              name="currentlyWorkHere"
              control={control}
              render={({ field }) => (
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              )}
            />
            <Label>Currently Work Here</Label>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" disabled={isPending} size="lg">
              {isPending ? "Saving..." : "Save Experience"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
