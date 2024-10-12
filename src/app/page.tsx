import dayjs from "dayjs";

import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";

type Props = {
  searchParams: {
    targetDt?: string;
  }
}

const today = dayjs().subtract(1, 'day').format('YYYYMMDD');

export default async function Home({searchParams: { targetDt = today } }:Props) {

  const key = '38822ae27494db7feee3341504461c69';
  const baseUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  const url = `${baseUrl}?key=${key}&targetDt=${targetDt}`;

  const response = await fetch(url);
  const json: ResponseType = await response.json();


  return (
    <div className="w-[350px] mx-auto">
      <div className="flex justify-between">
        {/* <a href={'?targetDt=' + dayjs(targetDt).subtract(1, 'day').format('YYYYMMDD')}>이전</a> */}
        {/* <Link></Link> */}
        {/* <button>이전</button> */}
        <PrevButton targetDt={targetDt}/>
        {dayjs(targetDt).format('YYYY년 MM월 DD일')}
        <NextButton targetDt={targetDt}/>
      </div>
      <ol className="divide-y *:py-4 mt-4">
        {
          json.boxOfficeResult.dailyBoxOfficeList.map((item: ItemType) => (
            <li key={item.rank}>{item.rank}위 -{' '}
                {item.movieNm}
              { item.rankOldAndNew === 'NEW' && <span className="ml-1 text-xs text-red-500">N</span> }
            </li>
          ))
        }
      </ol>
    </div>
  );
}

type ResponseType = {
  boxOfficeResult: {
    boxofficeType: string,
    showRange: string,
    dailyBoxOfficeList: ItemType[],
  }
}

type ItemType = {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}
