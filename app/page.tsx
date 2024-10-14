import { Footer, Navbar } from './components/organisms';
import Toolbar from '@mui/material/Toolbar';
import { LandingCheckboxesMobile } from './fragments';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';

const LandingFirstTooltip = dynamic(() => import('./fragments/LandingFirstTooltip'));
const LandingHighlightedPoints = dynamic(() => import('./fragments/LandingHighlightedPoints'));
const LandingSubtitle = dynamic(() => import('./fragments/LandingSubtitle'));
const LandingTitle = dynamic(() => import('./fragments/LandingTitle'));
const LandingRightSection = dynamic(() => import('./fragments/LandingRightSection'));
const LandingSimpleSwiperWrapper = dynamic(() => import('./fragments/LandingSimpleSwiperWrapper'));

interface DataItem {
  id: number;
  name: string;
  description: string;
}

interface Props {
  data: DataItem[];
}

async function fetchData(): Promise<DataItem[]> {
  const response = await fetch('http://localhost:3000/api');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function Home() {
  const data: any = await fetchData(); // Fetch data server-side

  return (
    <div className="bg-[#FBFBFB] w-screen overflow-y-auto">
      <div className="bg-left-top bg-local bg-cover bg-no-repeat bg-mobile xl:bg-desktop">
        <div className="flex flex-col justify-center items-center">
          <Navbar />
          <div className="container px-4 sm:px-0 pb-[80px] flex flex-col gap-y-10">
            <Toolbar />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-y-10">
                <LandingFirstTooltip />
                <LandingTitle />
                <LandingSubtitle />
                <LandingHighlightedPoints />
              </div>
              <LandingRightSection data={data} />
              <LandingCheckboxesMobile />
            </div>
            <LandingSimpleSwiperWrapper />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/data'); // Adjust the URL if needed
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
