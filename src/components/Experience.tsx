'use client';

import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { educationData } from '@/lib/education';
import { experiencesData } from '@/lib/experiences';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
        <section className="mb-10 w-full scroll-mt-28 sm:w-3/4 lg:w-[53rem]">
            <div className="mb-10">
                <h2 className="mb-8 text-center text-2xl font-medium">
                    Experience
                </h2>
                <VerticalTimeline lineColor="" animate={false}>
                    {experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    boxShadow: 'none',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    textAlign: 'left',
                                    padding: '1.3rem 2rem',
                                    background: '#f3f4f6',
                                }}
                                contentArrowStyle={{
                                    borderRight: '0.4rem solid #f3f3f6',
                                }}
                                date={item.date}
                                dateClassName="custom-date-class"
                                icon={item.icon}
                                iconStyle={{
                                    background: 'white',
                                    fontSize: '1.5rem',
                                }}
                            >
                                <h3 className="font-semibold capitalize">
                                    {item.title}
                                </h3>
                                <p className="!mt-1 !text-xs text-gray-700/70">
                                    {item.location}
                                </p>
                                <p className="!mt-2 !text-sm text-gray-900">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))}
                </VerticalTimeline>
            </div>

            <div className="mb-10">
                <h2 className="mb-8 text-center text-2xl font-medium">
                    Education
                </h2>
                <VerticalTimeline lineColor="" animate={false}>
                    {educationData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    boxShadow: 'none',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    textAlign: 'left',
                                    padding: '1.3rem 2rem',
                                    background: '#f3f4f6',
                                }}
                                contentArrowStyle={{
                                    borderRight: '0.4rem solid #f3f3f6',
                                }}
                                date={item.date}
                                dateClassName="custom-date-class"
                                icon={item.icon}
                                iconStyle={{
                                    background: 'white',
                                    fontSize: '1.5rem',
                                }}
                            >
                                <h3 className="font-semibold capitalize">
                                    {item.title}
                                </h3>
                                <p className="!mt-1 !text-xs text-gray-700/70">
                                    {item.location}
                                </p>
                                <p className="!mt-2 !text-sm text-gray-900">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
}
