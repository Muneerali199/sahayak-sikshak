'use server';

/**
 * @fileOverview AI-powered weekly lesson planner flow.
 *
 * - createWeeklyLessonPlan - A function that generates a weekly lesson plan.
 * - CreateWeeklyLessonPlanInput - The input type for the createWeeklyLessonPlan function.
 * - CreateWeeklyLessonPlanOutput - The return type for the createWeeklyLessonPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreateWeeklyLessonPlanInputSchema = z.object({
  topic: z.string().describe('The topic for the weekly lesson plan.'),
  gradeLevel: z.string().describe('The grade level for the lesson plan.'),
  learningObjectives: z.string().describe('The learning objectives for the week.'),
  localLanguage: z.string().describe('The local language for the lesson plan.'),
});
export type CreateWeeklyLessonPlanInput = z.infer<typeof CreateWeeklyLessonPlanInputSchema>;

const CreateWeeklyLessonPlanOutputSchema = z.object({
  weeklyPlan: z.string().describe('A detailed weekly lesson plan.'),
});
export type CreateWeeklyLessonPlanOutput = z.infer<typeof CreateWeeklyLessonPlanOutputSchema>;

export async function createWeeklyLessonPlan(input: CreateWeeklyLessonPlanInput): Promise<CreateWeeklyLessonPlanOutput> {
  return createWeeklyLessonPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createWeeklyLessonPlanPrompt',
  input: {schema: CreateWeeklyLessonPlanInputSchema},
  output: {schema: CreateWeeklyLessonPlanOutputSchema},
  prompt: `You are an expert teacher creating a weekly lesson plan.

  Topic: {{{topic}}}
  Grade Level: {{{gradeLevel}}}
  Learning Objectives: {{{learningObjectives}}}
  Local Language: {{{localLanguage}}}

  Create a detailed weekly lesson plan that includes daily activities, assessments, and resources. Provide the plan in {{{localLanguage}}}.
  The weekly plan should be structured, well-organized, and easy to follow.
  Return the weekly plan in a markdown format.
  `,
});

const createWeeklyLessonPlanFlow = ai.defineFlow(
  {
    name: 'createWeeklyLessonPlanFlow',
    inputSchema: CreateWeeklyLessonPlanInputSchema,
    outputSchema: CreateWeeklyLessonPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
