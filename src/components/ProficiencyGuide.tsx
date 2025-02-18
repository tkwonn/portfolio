'use client';

import React, { useState, useEffect } from 'react';
import { IoChevronUpOutline } from 'react-icons/io5';
import { useTranslations } from '@/hooks/useTranslations';

export default function ProficiencyGuide() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShownInitial, setHasShownInitial] = useState(false);
    const t = useTranslations();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
            setHasShownInitial(true);
        }, 1000);

        const closeTimer = setTimeout(() => {
            if (!hasShownInitial) {
                setIsOpen(false);
            }
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(closeTimer);
        };
    }, [hasShownInitial]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!hasShownInitial) {
            setHasShownInitial(true);
        }
    };

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[999] transform bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3rem)]'
            } `}
        >
            <button
                onClick={handleToggle}
                className="flex w-full items-center justify-between bg-gray-800 px-8 py-2 transition-colors duration-200 hover:bg-gray-700"
            >
                <span className="font-semibold">
                    {t.skills.proficiencyGuide}
                </span>
                <IoChevronUpOutline
                    className={`transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            <div className="px-8 py-4">
                <div className="grid gap-4">
                    {t.skills.proficiencies.map((proficiency) => (
                        <div
                            key={proficiency.level}
                            className="flex items-center gap-4 border-b border-gray-700 pb-2"
                        >
                            <span className="min-w-8 text-xl font-bold">
                                {proficiency.level}
                            </span>
                            <p className="text-sm">{proficiency.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
