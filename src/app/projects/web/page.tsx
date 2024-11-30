import ProjectsList from '@/components/ProjectList';
import { projects } from '@/lib/webProjects';

export default function WebProjects() {
    return (
        <ProjectsList
            title="Web"
            targetPath="/projects/cli"
            targetText="CLI"
            projects={projects}
        />
    );
}
