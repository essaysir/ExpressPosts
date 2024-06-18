import { ExpressData } from '@/type/expressTypes';

export default function ExpressPostsPage({
  expressPosts,
}: {
  expressPosts: ExpressData;
}) {
  console.log(expressPosts);
  return <main className="w-full h-[100vh]" />;
}
