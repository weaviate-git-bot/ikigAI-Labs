// app/education-feedback/page.tsx
// @ts-nocheck
import { useClient } from "next/react"; // Import the useClient pragma from the next/react module
// use client

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Task } from "@/interfaces/education";
import EducationFeedbackPage from "@/templates/EducationFeedbackPage";

// Dynamic import of EducationFeedbackPage component
const DynamicEducationFeedbackPage = dynamic(
  () => import("@/templates/EducationFeedbackPage"),
  { ssr: false } // Set ssr to false to ensure the component is loaded on the client side
);

// Define your task here
const task: Task = {
  api: './route',
  desc: 'Your description',
  fromColor: 'Your color',
  title: 'Your title',
  category: 'Your category',
  // Icon: 'Your Icon', // This might need to be a React component if it's meant to be an actual icon
  permissions: ['Your permissions'], // This is an array, so you might need to add more items
  toColor: 'Your toColor',
  to: 'Your to',
  output: {
    title: 'Your output title',
    desc: 'Your output description',
  },
  prompts: [
    {
      title: 'Your prompt title',
      desc: 'Your prompt description',
      prompts: [
        {
          title: 'Your prompt field title',
          attr: 'Your prompt field attribute',
          value: 'Your prompt field value',
          placeholder: 'Your prompt field placeholder',
          label: 'Your prompt field label',
          maxLength: 100,
          error: 'Your prompt field error',
          example: 'Your prompt field example',
        },
      ],
      example: {
        output: 'Your prompt example output',
      },
    },
  ],
};

const EducationFeedback: NextPage = () => {
  useEffect(() => {
    // Your useEffect logic (if needed)
  }, []);

  // Add the useClient pragma to mark this component as a "Client Component"
  useClient();

  return <DynamicEducationFeedbackPage task={task} />;
};

export default EducationFeedback;






