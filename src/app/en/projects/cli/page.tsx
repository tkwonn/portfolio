'use client';

import ProjectsList from '@/components/ProjectList';
import { useTranslations } from '@/hooks/useTranslations';

export default function CLIProjects() {
    const t = useTranslations();

    return (
        <ProjectsList
            title="CLI Projects"
            switchPath="/en/projects/web"
            buttonText="Web Projects"
            projects={t.projects.cli}
        />
    );
}
