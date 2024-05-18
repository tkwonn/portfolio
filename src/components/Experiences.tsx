"use client";

import React from 'react';
import { experiencesData } from '@/lib/experiences';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experiences() {
  return (
    <section className="max-w-[53rem] scroll-mt-28 mb-10">
      <h2 className="text-3xl font-medium mb-8 text-center">Education & Experience</h2>
      <VerticalTimeline lineColor="" animate={false}>
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                    contentStyle={{
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        background: "#f3f4f6",
                    }}
                    contentArrowStyle={{
                        borderRight: "0.4rem solid #f3f3f6",
                    }}
                    date={item.date}
                    dateClassName="custom-date-class"
                    icon={item.icon}
                    iconStyle={{
                        background: 'white',
                        fontSize: "1.5rem",
                    }}
                >
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 font-normal text-gray-700 dark:text-white/75">
                        {item.description}
                    </p>
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}