import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import IntroduceButton from "./IntroduceButton";

export default function Introduce03({ setMoveTo }) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);

  return (
    <div className="contentEnter">
      <div style={{ padding: "1rem" }}>
        <h1>꿈이 많은 어른 아이</h1>
      </div>
      <div id="introduceContentBody">
        <p id="impactText">그 외에 다양하게 한 일들</p>
        <ul>
          <li>
            <Button
              id="listBtn"
              variant="outline-light"
              onClick={() => setFirst(!first)}
            >
              <p>whosbax 후즈박스</p>
            </Button>
            {first && (
              <div className="detailStyle">
                <a href="https://linktr.ee/whosbax" target={"_blank"}>
                  <p id="impactText">▷ 음악 들어보기</p>
                </a>
                <p>→ 작사, 작곡, 편곡, 엔지니어링 참여</p>
                <p>→ 음원플랫폼 뿐만 아니라 사운드클라우드를 통해 무료곡 공개</p>

                <Image
                  src={"/images/introduce/whosbax.png"}
                  id="introduceImg"
                  style={{ margin: "auto" }}
                />
                <br/>
                <p>
                  <b>발매 및 참여 음원 (음원플랫폼)</b>
                </p>
                <p>
                  <b>2020.07</b> Purple Sunset (Feat. whosbax) (Prod. by Blue
                  caramel)
                </p>
                <p>
                  <b>2020.09</b> Aurora Caffeine (Prod. 9una)
                </p>
                <p>
                  <b>2020.09</b> 잘난놈 (feat. whosbax)
                </p>
                <p>
                  <b>2020.10</b> Another Sight (Feat. kishy) (Prod. 9una)
                </p>
                <p>
                  <b>2020.10</b> True (Prod. 9una)
                </p>
                <p>
                  <b>2021.12</b> Moonlight
                </p>
                <p>
                  <b>2021.12</b> Paradise
                </p>
                <p>
                  <b>2021.12</b> With no Stop
                </p>
                <p>
                  <b>2021.12</b> Goodbye (Feat. DOPA)
                </p>
                <p>
                  <b>2021.12</b> Don’t taste me (Feat. 가우(GOW))
                </p>
                <p>
                  <b>2021.12</b> Color
                </p>
                <p>
                  <b>2021.12</b> Way out
                </p>
                <p>
                  <b>2022.01</b> 괜찮아 (Feat. NØVA, whosbax)
                </p>
                <p>
                  <b>2022.01</b> Do it (Feat. whosbax, UMiN(유민))
                </p>
                <p>
                  <b>2022.04</b> I'm not alone
                </p>
              </div>
            )}
          </li>
          <li>
            <Button
              id="listBtn"
              variant="outline-light"
              onClick={() => setSecond(!second)}
            >
              <p>창업서포터즈</p>
            </Button>
            {second && (
              <div className="detailStyle">
                <a
                  href="https://www.youtube.com/channel/UC6jjjbb21Ox3Rak-dZ2wTnA/videos"
                  target={"_blank"}
                >
                  <p id="impactText">▷ 유튜브 채널 청년창업가 바리마리</p>
                </a>
                <p>
                  → 고려대학교 세종창업교육센터에서 주관하는{" "}
                  <b>창업서포터즈 6기</b> 팀원 활동
                </p>{" "}
                <p>
                  → <b>영상 촬영 및 편집, 출연</b> 등 매주 팀원들과 모여 컨텐츠
                  회의를 진행하고 촬영 및 편집 관련 인원을 분배하여 진행
                </p>
                <p>
                  → 창업정석검사, 창업교육센터소개, 교육청 창업아이디어경진대회,
                  청년창업특강 등 총 8개의 영상
                </p>
                <Image
                  src={"/images/introduce/kustartup-youtube.png"}
                  id="introduceImg"
                />
              </div>
            )}
          </li>
          <li>
            <Button
              id="listBtn"
              variant="outline-light"
              onClick={() => setThird(!third)}
            >
              <p>세종 UNION 창업캠프</p>
            </Button>
            {third && (
              <div className="detailStyle">
                <p>
                  → <b>세종 UNION 창업캠프</b>에 참여하여, 팀원들과 함께{" "}
                  <b>최우수상을 수상</b>
                </p>
                <p>
                  → 명품을 대여해주는 시스템으로, 구독 시스템을 이용하여 수익을
                  낼 수 있는 아이템 구상
                </p>
                <Image
                  src={"/images/introduce/startup-최우수상.jpg"}
                  id="introduceImg"
                  style={{ width: "40%", height: "40%", margin: "auto" }}
                />
              </div>
            )}
          </li>
          <li>
            <Button
              id="listBtn"
              variant="outline-light"
              onClick={() => setFourth(!fourth)}
            >
              <p>푸른나무재단</p>
            </Button>
            {fourth && (
              <div className="detailStyle">
                <a href="https://btf.or.kr/" target={"_blank"}>
                  <p id="impactText">▷ 푸른나무재단 홈페이지</p>
                </a>
                <p>
                  → 청소년들의 앞날과 더 좋은 세상을 위해서 조금이나마 기부 시작
                </p>
                <Image
                  src={"/images/introduce/blue-tree-foundation.png"}
                  id="introduceImg"
                  style={{ width: "40%", height: "40%", margin: "auto" }}
                />
              </div>
            )}
          </li>
          <li>
            <Button
              id="listBtn"
              variant="outline-light"
              onClick={() => setFifth(!fifth)}
            >
              <p>정보처리기사</p>
            </Button>
            {fifth && (
              <div className="detailStyle">
                <a href="https://whothatsme.tistory.com/19" target={"_blank"}>
                  <p id="impactText">▷ 티스토리 블로그내 공부 기록</p>
                </a>
                <a
                  href="https://www.notion.so/whosbax/5d4fd29b74974a9a8117038c22d656e1"
                  target={"_blank"}
                >
                  <p id="impactText">▷ 정보처리기사 필기 오답노트</p>
                </a>
                <p>
                  → 정보처리기사 <b>필기</b> 합격 (8월 10일 합격증 수령 예정)
                </p>
                <Image
                  src={"/images/introduce/blue-tree-foundation.png"}
                  id="introduceImg"
                  style={{ width: "40%", height: "40%", margin: "auto" }}
                />
              </div>
            )}
          </li>
        </ul>
      </div>
      <IntroduceButton clickMove={setMoveTo} />
    </div>
  );
}
