'use client';

import { Divider } from '@nextui-org/react';
import formatDate from '@/features/common/util';

export default function PostsHeader({ editTime }: { editTime: string }) {
  return (
    <div className="max-w-md p-4">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">CJ 대한통운 주차장 현황</h4>
        <p className="text-small text-default-400">수정일시 : {formatDate(editTime)}</p>
        <Divider className="my-10" />
      </div>
    </div>
  );
}
