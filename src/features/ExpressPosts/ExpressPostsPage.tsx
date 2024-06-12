'use client';

import PostsHeader from '@/features/ExpressPosts/PostsHeader';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';

export default function ExpressPostsPage() {
  return (
    <main className="w-full h-[100vh] dark text-foreground bg-background">
      <PostsHeader />
      <div className="p-4">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>터미널명</TableColumn>
            <TableColumn>남은 갯수 및 마감시간 </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>마포 A</TableCell>
              <TableCell>
                <p className="text-bold text-sm capitalize">2개</p>
                <p className="text-bold text-sm text-default-400">2024-06-12 06시 까지</p>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>마포 AMP</TableCell>
              <TableCell>
                <p className="text-bold text-sm capitalize">2개</p>
                <p className="text-bold text-sm text-default-400">2024-06-12 06시 까지</p>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>마포 B</TableCell>
              <TableCell>
                <p className="text-bold text-sm capitalize">2개</p>
                <p className="text-bold text-sm text-default-400">2024-06-12 06시 까지</p>
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>은평 A</TableCell>
              <TableCell>
                <p className="text-bold text-sm capitalize">2개</p>
                <p className="text-bold text-sm text-default-400">2024-06-12 06시 까지</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
