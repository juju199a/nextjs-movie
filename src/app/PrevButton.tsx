'use client';

import dayjs from "dayjs";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router"; // pages router 용
import { useRouter } from "next/navigation"; // app router 용

type Props = {
    targetDt: string;
}

export function PrevButton({targetDt}:Props) {
    const router = useRouter();
    // const searchParams = useSearchParams();
    return <button onClick={()=>{
        // const date = searchParams.get('targetDt');
        router.push(`?targetDt=${dayjs(targetDt).subtract(1, 'day').format('YYYYMMDD') }`);
        //location.
    }}>이전</button>
}