import ExpressPostsPage from '@/features/ExpressPosts/ExpressPostsPage';
import path from 'path';
import fs from 'fs';

async function getExpressPosts() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'ExpressData.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function Page() {
  const expressPosts = await getExpressPosts();
  console.log(expressPosts);
  return <ExpressPostsPage />;
}
