import Image from 'next/image';

export default function ProjectOdysseyPage() {
  return (
    <Image
      src="/project-odyssey/cover.jpeg"
      alt="Project Odyssey Cover"
      layout="fill"
      objectFit="contain"
      priority
    />
  );
}
