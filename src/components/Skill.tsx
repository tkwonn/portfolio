import Table from '@/components/Table';
import { languages, databases, misc } from '@/lib/skills';

export default function Skill() {
    return (
        <section className="mx-auto mb-16 max-w-[70rem] scroll-mt-20 md:max-w-[53rem]">
            <h2 className="mb-8 text-center text-2xl font-medium sm:text-3xl md:text-3xl">
                Skills
            </h2>
            <Table title="Languages & Frameworks" skills={languages} />
            <Table title="Databases" skills={databases} />
            <Table title="Miscellaneous" skills={misc} />
        </section>
    );
}
