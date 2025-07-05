"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import Image from "next/image";
import { Rabbit, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "@/components/ui/loader";
import {
  generateInteractiveStory,
  type GenerateInteractiveStoryOutput,
} from "@/ai/flows/interactive-storyteller";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  prompt: z.string().min(10, "Prompt must be at least 10 characters."),
  gradeLevel: z.string().min(1, "Please enter a grade level."),
  language: z.string().min(1, "Please select a language."),
});

type FormValues = z.infer<typeof formSchema>;

export default function InteractiveStoryteller() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] =
    React.useState<GenerateInteractiveStoryOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      gradeLevel: "2nd Grade",
      language: "English",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateInteractiveStory(values);
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "Failed to generate the story. This is an advanced feature and may fail occasionally. Please try again.",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline">
                AI Interactive Storyteller
              </CardTitle>
              <CardDescription>
                Bring stories to life! The AI will generate a unique story,
                create voices for each character, and draw illustrations for key
                scenes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Story Idea</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A story about a friendly robot who learns to plant a garden."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade Level</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2nd Grade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Language</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Hindi">Hindi</SelectItem>
                          <SelectItem value="Marathi">Marathi</SelectItem>
                          <SelectItem value="Bengali">Bengali</SelectItem>
                          <SelectItem value="Spanish">Spanish</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader className="mr-2" /> : <Sparkles className="mr-2" />}
                Generate Story
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <Loader size="lg" className="mb-4" />
            <p className="text-muted-foreground text-center">
              Crafting your story with voices and pictures...
              <br />
              This magical process can take up to a minute.
            </p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl">
              {result.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <audio controls src={result.audioDataUri} className="w-full">
                Your browser does not support the audio element.
              </audio>
              <p className="text-xs text-muted-foreground mt-2">
                Listen to the story with different voices for each character!
              </p>
            </div>

            <Separator />

            {result.illustrations.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg mb-4">Visual Aids</h4>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {result.illustrations.map((illustration, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Card className="overflow-hidden">
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-0">
                              <div className="relative w-full h-full bg-white">
                                <Image
                                  src={illustration.imageDataUri}
                                  alt="Generated Visual Aid"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </CardContent>
                            <CardFooter className="p-3 text-xs text-muted-foreground bg-secondary/30">
                              <p>
                                Scene: "
                                {illustration.sceneText.substring(0, 100)}..."
                              </p>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-12" />
                  <CarouselNext className="mr-12" />
                </Carousel>
              </div>
            )}

            <Separator />

            <div>
              <h4 className="font-semibold text-lg mb-2">Full Story Script</h4>
              <p className="whitespace-pre-wrap font-body text-base bg-secondary/30 p-4 rounded-md">
                {result.fullStoryText}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
