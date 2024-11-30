import ProjectsList from '@/components/ProjectList';
import { projects } from '@/lib/cliProjects';

export default function CLIProjects() {
    return (
        <ProjectsList
            title="CLI"
            targetPath="/projects/web"
            targetText="Web"
            projects={projects}
        />
    );
}
