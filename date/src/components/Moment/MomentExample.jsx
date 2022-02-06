import React, { useRef, useState } from 'react';
import moment from 'moment-timezone';
import "moment/locale/ko"

export default function MomentExample() {

  const momentDate = moment()
  const newMomentDate = momentDate.add(1, "week")
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week")

  const birthDayRef = useRef(null)
  const [day, setDay] = useState("")
  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"))
  }

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
        <br />
        <br />

        {/* Summer Time 테스트 */}
        <div>Summer Time (New-york)</div>
        <div>
          2018년 3월 10일 13시에 하루 더하기 : 
          { moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format() }
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기 :
          { moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format() }
        </div>

        <br />
        <br />

        {/* 윤년 테스트 */}
        <div>Leap Year (Korea)</div>
        <div>
          2017년 1월 1일 1년 빼기 : 
          { moment("2017-01-01 13:00:00").subtract(1, "year").format() }
        </div>
        <div>
          2017년 1월 1일 365일 빼기 :
          { moment("2017-01-01 13:00:00").subtract(365, "day").format() }
        </div>


        <br />
        <br />


        {/* 한국어로 format 표기 */}
        <div>한국어로 표기 02-06-2022를 2022년 2월 6일로 보기</div>
        <div>
          { moment("02-06-2022").format("YYYY년 M월 D일") }
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
          { `${moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hours")}시간` }
        </div>
      </div>
    </div>
  );
}
