import { UserSimple } from '../components/organisms/ProfileCard';

export async function GET(request: Request) {
  const sampleData: UserSimple[] = [
    {
      id: 1,
      avatarUrl: '/images/default-avatar.png',
      countryCode: 'DE',
      name: 'Abhishek Gupta',
      title: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 2,
      avatarUrl: '/images/default-avatar.png',
      countryCode: 'DE',
      name: 'Abhishek Gupta',
      title: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 3,
      avatarUrl: '/images/default-avatar.png',
      countryCode: 'DE',
      name: 'Abhishek Gupta',
      title: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 4,
      avatarUrl: '/images/default-avatar.png',
      countryCode: 'DE',
      name: 'Abhishek Gupta',
      title: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
  ];
  return Response.json(sampleData);
}
