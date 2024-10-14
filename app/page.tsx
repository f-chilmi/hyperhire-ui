import { Footer, Navbar } from './components/organisms';
import Toolbar from '@mui/material/Toolbar';
import { LandingCheckboxesMobile } from './fragments';
import dynamic from 'next/dynamic';
import { UserSimple } from './components/organisms/ProfileCard';

const LandingFirstTooltip = dynamic(() => import('./fragments/LandingFirstTooltip'));
const LandingHighlightedPoints = dynamic(() => import('./fragments/LandingHighlightedPoints'));
const LandingSubtitle = dynamic(() => import('./fragments/LandingSubtitle'));
const LandingTitle = dynamic(() => import('./fragments/LandingTitle'));
const LandingRightSection = dynamic(() => import('./fragments/LandingRightSection'));
const LandingSimpleSwiperWrapper = dynamic(() => import('./fragments/LandingSimpleSwiperWrapper'));

async function fetchData(): Promise<UserSimple[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function Home() {
  const data: UserSimple[] = await fetchData(); // Fetch data server-side

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
