"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Angular</li>
            <li>mongodb</li>
            <li>mongoose</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
            <li>South China Normal University, Guangzhou</li>
            <li>University of Sydney, Sydney</li>
          </ul> 
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
          <ul className="list-disc pl-2">
            <li>new to update</li>
            <li>new to update</li>
          </ul>
        ),
      },
    
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };


return(
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi! my name is zhengliang Li also called as wayne li. I am a full stack web developer with a passion for creating interactive and responsive
            web applications. I have  experience in building web applications 
            using JavaScript, React, Node.js, Express, mongodb, mongoose, PostgreSQL, git etc. I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      </section>
);
};
export default AboutSection;