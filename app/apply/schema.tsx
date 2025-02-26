import { z } from "zod"

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  age: z.string().min(1, {
    message: "Age is required.",
  }),
  gender: z.string().min(1, {
    message: "Gender is required.",
  }),
  height: z.string().min(1, {
    message: "Height is required.",
  }),
  weight: z.string().min(1, {
    message: "Weight is required.",
  }),
  eyeColor: z.string().min(1, {
    message: "Eye color is required.",
  }),
  hairColor: z.string().min(1, {
    message: "Hair color is required.",
  }),
  skills: z.object({
    acting: z.boolean().default(false),
    dancing: z.boolean().default(false),
    singing: z.boolean().default(false),
    sports: z.boolean().default(false),
    instruments: z.boolean().default(false),
    other: z.string().optional(),
  }),
  photos: z.array(z.instanceof(File)).min(1, {
    message: "At least one photo is required.",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
})

