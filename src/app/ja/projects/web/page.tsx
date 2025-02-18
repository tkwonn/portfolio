'use client';

import ProjectsList from '@/components/ProjectList';
import { useTranslations } from '@/hooks/useTranslations';

export default function WebProjects() {
    const t = useTranslations();

    return (
        <ProjectsList
            title="Webプロジェクト"
            switchPath="/ja/projects/cli"
            buttonText="CLIプロジェクト"
            projects={t.projects.web}
        />
    );
}
