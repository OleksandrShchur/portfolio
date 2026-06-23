import { experience } from '@/data/experience';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Timeline } from '@/components/ui/Timeline';

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="From internships to cloud-native finance — building, testing, and shipping across domains."
    >
      <Timeline entries={experience} />
    </SectionWrapper>
  );
}
