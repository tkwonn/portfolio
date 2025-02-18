'use client';

import ProjectsList from '@/components/ProjectList';
import { useTranslations } from '@/hooks/useTranslations';

export default function CLIProjects() {
    const t = useTranslations();

    return (
        <ProjectsList
            title="CLIプロジェクト"
            switchPath="/ja/projects/web"
            buttonText="Webプロジェクト"
            projects={t.projects.cli}
        />
    );
}
