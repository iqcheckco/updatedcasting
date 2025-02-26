"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Checkbox from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

// Function to hash email using SHA-256
async function hashEmail(email: string) {
  const encoder = new TextEncoder()
  const data = encoder.encode(email.trim().toLowerCase())
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}

function generateUniqueId() {
  const numbers = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")
  return `FC${numbers}`
}

const formSchema = z.object({
  uniqueId: z.string(), // Add this line before firstName
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "prefer-not-say"], {
    required_error: "Please select your gender",
  }),
  isOver18: z.enum(["yes", "no"], {
    required_error: "Please indicate if you are over 18",
  }),
  hasActingExperience: z.enum(["yes", "no"], {
    required_error: "Please indicate if you have acting experience",
  }),
  actingExperience: z.string().optional(),
  hasAccessibilityRequirements: z.enum(["yes", "no", "prefer-not-say"], {
    required_error: "Please indicate if you have any accessibility requirements",
  }),
  canWorkInUK: z.enum(["yes", "no"], {
    required_error: "Please indicate if you have the right to work in the UK",
  }),
  hasCriminalConvictions: z.enum(["yes", "no"], {
    required_error: "Please indicate if you have any criminal convictions",
  }),
  agreeToDBS: z.enum(["yes", "no"], {
    required_error: "Please indicate if you agree to a DBS check",
  }),
  canTravel: z.enum(["yes", "no"], {
    required_error: "Please indicate if you can travel within the UK",
  }),
  englishProficiency: z.enum(["native", "fluent", "basic", "none"], {
    required_error: "Please select your English proficiency",
  }),
  otherLanguages: z.string().optional(),
  skills: z.object({
    dance: z.boolean().default(false),
    sing: z.boolean().default(false),
    instrument: z.boolean().default(false),
    bicycle: z.boolean().default(false),
  }),
  hasDriversLicense: z.enum(["yes", "no"], {
    required_error: "Please indicate if you have a UK driver's license",
  }),
  agreeToTraining: z.enum(["yes", "no"], {
    required_error: "Please indicate if you agree to take the training course",
  }),
  height: z.string().min(1, "Height is required"),
  description: z.string().min(1, "Please provide a brief description"),
  photos: z.array(z.custom<File>()).min(1, "Please upload at least one photo"),
})

export default function ApplyPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uniqueId: generateUniqueId(),
      skills: {
        dance: false,
        sing: false,
        instrument: false,
        bicycle: false,
      },
      photos: [],
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Hash the email
      const hashedEmail = await hashEmail(values.email)

      // Fire conversion tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-16829245039/DSO9CInYo6MaEO_M59g-",
          user_data: {
            sha256_email_address: hashedEmail,
          },
        })
      }

      // Send webhook
      try {
        const webhookResponse = await fetch(
          "https://flow.zoho.eu/20098651896/flow/webhook/incoming?zapikey=1001.7e5a980fcb529e2605a38505a0cd4358.05a7db3ba7de17866daa6db93dbeb365&isdebug=false",
          {
            method: "POST",
            headers: {
              "Content-Type": "text/plain",
            },
            body: JSON.stringify({
              firstName: values.firstName,
              email: values.email,
              uniqueId: values.uniqueId,
            }),
          },
        )

        if (!webhookResponse.ok) {
          console.error("Webhook call failed:", await webhookResponse.text())
        }
      } catch (webhookError) {
        console.error("Error sending webhook:", webhookError)
      }

      // Navigate to success page
      router.push("/apply/success")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-900 font-inter">
      <SiteHeader />

      <main className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-8 bg-white rounded-lg">
          <div className="space-y-8">
            <div>
              <h1 className="font-bebas text-2xl md:text-3xl mb-2">NEW EXTRA APPLICATION [UK]</h1>
              <p className="text-neutral-600">
                Consideration: Wuthering Heights (Warner Bros. Pictures), Harry Potter (HBO), Slow Horses (Apple)
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="uniqueId"
                  render={({ field }) => <input type="hidden" {...field} />}
                />
                {/* Personal Information */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormDescription>
                          We will only email you with updates on your application, we don't share any information with
                          third parties.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel className="font-normal">Male</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel className="font-normal">Female</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="prefer-not-say" />
                              </FormControl>
                              <FormLabel className="font-normal">Prefer Not To Say</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Eligibility */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="isOver18"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Are you over 18? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          Flux Casting does not handle castings for anyone under the age of 18.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="canWorkInUK"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you have the legal right to work in the UK? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          If you have a National Insurance number then you can answer 'Yes'.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Experience */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="hasActingExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you have any acting experience? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          Don't worry if your answer is 'No', most applicants that we cast have no previous experience.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="actingExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          If 'Yes' please give a brief description of your acting experience (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormDescription>Skip this if you answered 'No' to the previous question.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="englishProficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Are you fluent in English? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="native" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes, I'm a native speaker</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="fluent" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Yes, I'm fluent but it's not my first language
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="basic" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                I'm not fluent but I can speak basic English
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="none" />
                              </FormControl>
                              <FormLabel className="font-normal">I cannot speak English</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="otherLanguages"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Excluding English, which other languages can you speak fluently? (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Additional Skills (Optional)</FormLabel>
                    <FormDescription>Check all that apply</FormDescription>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="skills.dance"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="font-normal">I can dance</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="skills.sing"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="font-normal">I can sing</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="skills.instrument"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="font-normal">I can play a musical instrument</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="skills.bicycle"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="font-normal">I can confidently ride a bicycle</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Requirements & Agreements */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="hasAccessibilityRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you have any accessibility requirements? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="prefer-not-say" />
                              </FormControl>
                              <FormLabel className="font-normal">Prefer Not To Say</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasCriminalConvictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Have you had any criminal convictions in the past ten years? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          Flux Casting is obliged and committed to making all filming locations a safe space for all
                          involved.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToDBS"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>If successfully casted would you be happy to undergo a DBS check? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="canTravel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Would you be happy to travel within the UK for up to a week at a time providing the production
                          company/studio covers all of your travel, accommodation and meal costs? *
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasDriversLicense"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you hold a valid UK driver's license? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          Some productions occasionally need extras to drive vehicles in certain scenes.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToTraining"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          If selected would you be happy to take a brief 20 minute online training course? *
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          Studios and production companies oblige us to make sure that all extras casted on their behalf
                          have an understanding of on-set etiquette and protocol.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Physical Characteristics */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What is your height? *</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input type="number" {...field} className="pr-12" />
                          </FormControl>
                          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-sm text-muted-foreground border-l">
                            cm
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe yourself in a few words *</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormDescription>
                          There's no rules here, just a brief description of your personality, hobbies, interests etc.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Photos */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="photos"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please upload 1-3 recent pictures of yourself *</FormLabel>
                        <FormControl>
                          <div className="flex flex-col items-center justify-center w-full">
                            <label
                              htmlFor="photo-upload"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="w-8 h-8 mb-3 text-neutral-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-neutral-500">
                                  <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-neutral-500">PNG, JPG or JPEG (MAX. 3 files)</p>
                              </div>
                              <Input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                  const files = Array.from(e.target.files || [])
                                  if (files.length > 3) {
                                    alert("Please select a maximum of 3 photos")
                                    e.target.value = ""
                                    return
                                  }
                                  field.onChange(files)
                                }}
                              />
                            </label>
                            {field.value?.length > 0 && (
                              <div className="mt-4 space-y-2">
                                {Array.from(field.value).map((file: File, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm text-neutral-500">
                                    <Check className="w-4 h-4 text-[#3B82F6]" />
                                    {file.name}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>
                          No specific requirements here - just upload what you're comfortable with. We don't expect any
                          professional photography so don't overthink this one! Minimum one photo required.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-10 py-3 text-xl font-bebas tracking-normal transition-colors shadow-lg rounded-md"
                >
                  SUBMIT
                </button>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

