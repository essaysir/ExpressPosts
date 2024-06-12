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
import { ExpressData } from '@/type/expressTypes';
import formatDate from '@/features/common/util';

export default function ExpressPostsPage({
  expressPosts,
}: {
  expressPosts: ExpressData;
}) {
  const terminalInfos = expressPosts.terminalInfo;
  return (
    <main className="w-full h-[100vh] dark text-foreground bg-background">
      <PostsHeader editTime={expressPosts.editTime} />
      <div className="p-4">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>터미널명</TableColumn>
            <TableColumn>남은 갯수 및 마감시간 </TableColumn>
          </TableHeader>
          <TableBody>
            {terminalInfos.map((terminalInfo) => (
              <TableRow key={terminalInfo.terminalId}>
                <TableCell>{terminalInfo.terminalName}</TableCell>
                <TableCell>
                  <p className="text-bold text-sm capitalize">
                    {terminalInfo.terminalRemainCount}개
                  </p>
                  <p className="text-bold text-sm text-default-400">
                    {formatDate(terminalInfo.terminalDeadline)} 까지
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
