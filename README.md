# Sahayak Teacher - Your AI-Powered Teaching Assistant

![Sahayak Teacher App Screenshot](https://placehold.co/800x400.png)
*<p align="center">A placeholder image of the application interface.</p>*

Sahayak Teacher is a modern, AI-driven web application designed to be an indispensable assistant for educators. Built with Next.js and powered by Google's Generative AI through Genkit, this tool streamlines common teaching tasks, freeing up valuable time for teachers to focus on what they do best: teaching.

## ✨ Features

Sahayak Teacher comes packed with a suite of powerful features to support various aspects of teaching:

*   **Localized Content Generation:** Create hyper-local educational content, stories, and examples in various languages (including Hindi and Marathi) from a simple prompt.
*   **Differentiated Materials:** Automatically generate multiple versions of a worksheet from a single textbook page image, tailored to different student grade levels.
*   **Instant Knowledge Base:** Get simple, clear, and accurate explanations for complex student questions. Supports both text and voice input in multiple languages.
*   **Visual Aid Design:** Describe a concept, and the AI will generate a simple, effective visual aid (like a line drawing or chart) that can be easily replicated on a blackboard.
*   **AI-Powered Weekly Lesson Planner:** Automate the creation of detailed, structured weekly lesson plans. Just provide the topic, grade level, and learning objectives.
*   **Audio-Based Reading Assessment:** Assess a student's reading fluency and accuracy by having them read a passage and recording their voice. The AI provides a full report, including transcription, feedback, and mispronounced words.
*   **On-the-Fly Educational Game Generation:** Instantly create fun and engaging educational games for any topic and grade level, complete with rules and material lists.

## 🛠️ Tech Stack

This project is built with a modern, robust, and scalable technology stack:

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI:** [React](https://react.dev/) & [ShadCN UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth)
*   **AI/Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) with Google AI
*   **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 📂 Project Structure

The project follows a standard Next.js App Router structure with some key directories:

```
.
├── src
│   ├── app/                  # Next.js pages, layouts, and routing
│   │   ├── (main)/           # Main application routes (landing page)
│   │   └── dashboard/        # Protected dashboard route
│   ├── ai/                   # Genkit flows for all AI features
│   │   ├── flows/
│   │   └── genkit.ts         # Genkit configuration
│   ├── components/
│   │   ├── auth/             # Authentication-related components
│   │   ├── features/         # Components for each main feature
│   │   └── ui/               # Reusable UI components from ShadCN
│   ├── context/              # React context providers (e.g., AuthContext)
│   ├── hooks/                # Custom React hooks (e.g., useToast)
│   ├── lib/                  # Utility functions & Firebase config
├── .env                      # Local environment variables (DO NOT COMMIT)
├── .env.example              # Example environment variables
└── package.json
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/)
*   A **Firebase Project**. You can create one for free at the [Firebase Console](https://console.firebase.google.com/).
*   A **Google AI API Key**. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://www.github.com/Muneerali199/sahayak-sikshak
    cd sahayak-sikshak
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of your project by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Open the new `.env` file and add your **Firebase project credentials** and your **Google AI API key**. You can find your Firebase credentials in your Firebase Project Settings under "General".

    **Important:** After creating or modifying the `.env` file, you must **restart your Next.js development server** for the changes to take effect.

4.  **Run the development servers:**
    This project requires two development servers running concurrently: one for the Next.js frontend and one for the Genkit AI flows.

    *   **Terminal 1: Start the Next.js app**
        ```bash
        npm run dev
        ```
        Your application should now be running at `http://localhost:9002`.

    *   **Terminal 2: Start the Genkit development server**
        ```bash
        npm run genkit:dev
        ```
        This starts the Genkit flows in development mode, allowing them to be called by the frontend.

## 📦 Deployment

This application is configured for easy deployment using **Firebase App Hosting**.

1.  **Login to Firebase:**
    If you haven't already, sign in to your Google account via the Firebase CLI.
    ```bash
    firebase login
    ```

2.  **Initialize Firebase in your project:**
    Run the `init` command from your app's root directory. This will link your local project to a Firebase project.
    ```bash
    firebase init apphosting
    ```
    Follow the prompts to select an existing Firebase project or create a new one.

3.  **Deploy your app:**
    Once initialized, you can deploy your application using the provided npm script:
    ```bash
    npm run deploy
    ```
    This command will build your Next.js application and deploy it to Firebase App Hosting. Your site will be live at the URL provided at the end of the deployment process.
