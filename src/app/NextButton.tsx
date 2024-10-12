'use client';

import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router"; // pages router 용
import { useRouter } from "next/navigation"; // app router 용

type Props = {
    targetDt: string;
}

export function NextButton({targetDt}:Props) {
    const router = useRouter();
    // const searchParams = useSearchParams();
    return <button onClick={()=>{
        // const date = searchParams.get('targetDt');
        router.push(`?targetDt=${dayjs(targetDt).add(1, 'day').format('YYYYMMDD') }`);
    }}>다음</button>
}
