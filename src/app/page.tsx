"use client";

import * as React from "react";
import {
  AudioLines,
  BrainCircuit,
  CalendarPlus,
  Gamepad2,
  Languages,
  Paintbrush,
  PanelLeft,
  UsersRound,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";

import LocalizedContent from "@/components/features/localized-content";
import DifferentiatedMaterials from "@/components/features/differentiated-materials";
import KnowledgeBase from "@/components/features/knowledge-base";
import VisualAids from "@/components/features/visual-aids";
import LessonPlanner from "@/components/features/lesson-planner";
import ComingSoonCard from "@/components/features/coming-soon-card";

type Feature =
  | "localize"
  | "differentiate"
  | "knowledge"
  | "visualize"
  | "plan"
  | "assess"
  | "gamify";

export default function SahayakTeacherApp() {
  const [activeFeature, setActiveFeature] = React.useState<Feature>("localize");

  const renderFeature = () => {
    switch (activeFeature) {
      case "localize":
        return <LocalizedContent />;
      case "differentiate":
        return <DifferentiatedMaterials />;
      case "knowledge":
        return <KnowledgeBase />;
      case "visualize":
        return <VisualAids />;
      case "plan":
        return <LessonPlanner />;
      case "assess":
        return (
          <ComingSoonCard
            title="Audio-Based Reading Assessments"
            description="This feature will allow you to conduct audio-based reading assessments to evaluate student reading proficiency and provide feedback."
            icon={<AudioLines className="h-12 w-12" />}
          />
        );
      case "gamify":
        return (
          <ComingSoonCard
            title="On-the-Fly Educational Game Generation"
            description="This feature will enable you to generate educational games on-the-fly based on curriculum topics to engage students and reinforce learning."
            icon={<Gamepad2 className="h-12 w-12" />}
          />
        );
      default:
        return <LocalizedContent />;
    }
  };

  const menuItems = [
    { id: "localize", icon: Languages, label: "Localized Content" },
    {
      id: "differentiate",
      icon: UsersRound,
      label: "Differentiated Materials",
    },
    { id: "knowledge", icon: BrainCircuit, label: "Instant Knowledge Base" },
    { id: "visualize", icon: Paintbrush, label: "Visual Aid Design" },
    { id: "plan", icon: CalendarPlus, label: "Weekly Lesson Planner" },
    {
      id: "assess",
      icon: AudioLines,
      label: "Audio Assessments",
      disabled: true,
    },
    { id: "gamify", icon: Gamepad2, label: "Game Generation", disabled: true },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Logo className="size-8" />
              <span className="text-xl font-semibold font-headline">
                Sahayak
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveFeature(item.id as Feature)}
                    isActive={activeFeature === item.id}
                    disabled={item.disabled}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://placehold.co/100x100.png" alt="User" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm">
                <span className="font-semibold">Teacher</span>
                <span className="text-muted-foreground">teacher@school.org</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex flex-col p-4 md:p-6 lg:p-8">
          <header className="flex items-center justify-between md:justify-end mb-4">
            <SidebarTrigger className="md:hidden">
              <PanelLeft />
            </SidebarTrigger>
            <Button variant="outline">Help</Button>
          </header>
          <main className="flex-1">{renderFeature()}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
