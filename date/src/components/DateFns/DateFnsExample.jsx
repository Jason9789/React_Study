import React, { useRef, useState } from 'react';
// import dayjs from 'dayjs';
// import "dayjs/locale/ko"
// import utc from "dayjs/plugin/utc"
// import timezone from "dayjs/plugin/timezone"

import { add, sub, format } from 'date-fns'
import addWeeks from 'date-fns/addWeeks'
import { format as timezoneFormat } from 'date-fns-tz'
import { ko } from 'date-fns/locale'
import differenceInHours from 'date-fns/differenceInHours';

// dayjs.locale("ko")
// dayjs.extend(utc)
// dayjs.extend(timezone)

export default function DateFnsExample() {

  const dateFnsDate = new Date()
  const newDateFnsDate = add(dateFnsDate, { weeks: 1})
  const cloneNewDateFnsDate = addWeeks(newDateFnsDate, 1)

  const birthDayRef = useRef(null)
  const [day, setDay] = useState("")
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }))
  }

  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy/MM/dd")}
        <br />
        {format(newDateFnsDate, "yyyy/MM/dd")}
        <br />
        {format(cloneNewDateFnsDate, "yyyy/MM/dd")}
        <br />
        <br />

        {/* Summer Time 테스트 */}
        <div>Summer Time (New-york)</div>
        <div>
          2018년 3월 10일 13시에 하루 더하기 : 
          {/* { dayjs.tz("2018-03-13 13:00:00", "America/New_York").add(1, "day").format() } */}
          {timezoneFormat(add(
            new Date("2018-03-10 13:00:00"), {days: 1}), 
            "yyyy-MM-dd HH:mm:ssXXX",
            {
              timeZone: "America/New_York"
            }) }
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기 :
          {/* { dayjs.tz("2018-03-13 13:00:00", "America/New_York").add(24, "hour").format() } */}
          {timezoneFormat(add(
            new Date("2018-03-10 13:00:00"), {hours: 24}), 
            "yyyy-MM-dd HH:mm:ssXXX",
            {
              timeZone: "America/New_York"
            }) }
        </div>

        <br />
        <br />

        {/* 윤년 테스트 */}
        <div>Leap Year (Korea)</div>
        <div>
          2017년 1월 1일 1년 빼기 : 
          { format(sub(new Date("2017/01/01"), { years: 1 }), "yyyy/MM/dd") }
        </div>
        <div>
          2017년 1월 1일 365일 빼기 :
          { format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy/MM/dd") }
        </div>


        <br />
        <br />


        {/* 한국어로 format 표기 */}
        <div>한국어로 표기 02-06-2022를 2022년 2월 6일로 보기</div>
        <div>
          { format(new Date("02-06-2022"), "yyyy년 M월 d일") }
        </div>

        <br />
        <br />

        {/* 날짜를 통한 요일 표기 */}
        <div>특정 날짜 요일 찾기</div>
        <div>
          <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
          <div>무슨 요일이었을까?</div>
          <div>{day}</div>
        </div>


        <br />
        <br />

        {/* 두 날짜 비교 */}
        <div>두 날짜 비교</div>
        <div>2021-07-17 03:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
        <div>
          { `${differenceInHours(
            new Date(2021, 7, 17, 3, 0),
            new Date(2021, 7, 18, 2, 0)
          )}시간`}
        </div>
      </div>
    </div>
  );
}
