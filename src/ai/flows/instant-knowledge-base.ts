// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Provides simple, accurate explanations for complex student questions in the local language, complete with easy-to-understand analogies.
 *
 * - explainConcept - A function that explains a concept.
 * - ExplainConceptInput - The input type for the explainConcept function.
 * - ExplainConceptOutput - The return type for the explainConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainConceptInputSchema = z.object({
  question: z.string().describe('The complex question from the student.'),
  localLanguage: z.string().describe('The local language of the explanation.'),
});
export type ExplainConceptInput = z.infer<typeof ExplainConceptInputSchema>;

const ExplainConceptOutputSchema = z.object({
  explanation: z.string().describe('A simple, accurate explanation in the local language, complete with easy-to-understand analogies.'),
});
export type ExplainConceptOutput = z.infer<typeof ExplainConceptOutputSchema>;

export async function explainConcept(input: ExplainConceptInput): Promise<ExplainConceptOutput> {
  return explainConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainConceptPrompt',
  input: {schema: ExplainConceptInputSchema},
  output: {schema: ExplainConceptOutputSchema},
  prompt: `You are an expert teacher specializing in explaining complex concepts to students in simple terms. You will provide accurate explanations in the local language, complete with easy-to-understand analogies.

  Question: {{{question}}}
  Local Language: {{{localLanguage}}}`,
});

const explainConceptFlow = ai.defineFlow(
  {
    name: 'explainConceptFlow',
    inputSchema: ExplainConceptInputSchema,
    outputSchema: ExplainConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
