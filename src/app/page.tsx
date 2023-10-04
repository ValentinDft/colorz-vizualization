import { Metadata } from 'next';
import Main from '@/app/_components/Main/Main';

export const metadata: Metadata = {
  title: 'Colorz Vizualization',
  description:
    'Colorz Vizialization gives you a preview of the colors you want to use in your portfolio.',
};

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
