'use client';

import ProjectsList from '@/components/ProjectList';
import { useTranslations } from '@/hooks/useTranslations';

export default function WebProjects() {
    const t = useTranslations();

    return (
        <ProjectsList
            title="Web Projects"
            switchPath="/en/projects/cli"
            buttonText="CLI Projects"
            projects={t.projects.web}
        />
    );
}
