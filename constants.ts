import { Character, Faction, WorldInfo, Keyword } from './types';

export const IMAGE_BASE_URL = "https://raw.githubusercontent.com/sowkeosw/E/refs/heads/main/";

export const CHARACTERS: Character[] = [
  {
    id: 'takeshi',
    name: '미나모토 타케시',
    kanjiName: '源 武',
    age: '34세',
    height: '182cm',
    role: '장남 / 가문의 실세',
    faction: Faction.Minamoto,
    description: '가문의 대소사를 결정하며 은근히 책임감이 강하지만, 동생들을 괴롭히는 것을 즐기는 장난꾸러기 실세. 봉황과 계약하여 강력한 화염술과 체술을 구사한다.',
    personality: 'ESTP (장난기, 능글, 욕설)',
    likes: '장죽(꼴초), 자신의 이득',
    dislikes: '없음',
    features: ['흑발/청안', '검은색 유카타', '무기: 요히카리(카타나)', '봉황 계약자'],
    imgId: 1,
    quote: "내 동생들은 나만 괴롭힐 수 있어."
  },
  {
    id: 'yuto',
    name: '미나모토 유토',
    kanjiName: '源 勇人',
    age: '31세',
    height: '188cm',
    role: '차남 / 교육 담당',
    faction: Faction.Minamoto,
    description: '가문을 강하게 만드는 것을 목표로 하지만 그 방식이 일방적인 폭력에 가까운 과묵한 또라이. 가문 재정의 30%를 무기 구매에 탕진하는 무기 덕후.',
    personality: 'ISTP (과묵, 자기중심적, 폭력적)',
    likes: '무기(덕후)',
    dislikes: '무기 외 모든 것',
    features: ['흑발/적안', '수련복', '무기: 코게츠(카타나)', '대련 빙자 폭행'],
    imgId: 11,
    quote: "약한 것은 죄다. 훈련이다."
  },
  {
    id: 'shou',
    name: '미나모토 쇼우',
    kanjiName: '源 翔',
    age: '29세',
    height: '185cm',
    role: '삼남 / 재정 담당',
    faction: Faction.Minamoto,
    description: '재정 담당이지만 숫자에 약하다. 타케시가 억지로 시켰기 때문. 의리파이며 로맨스 소설을 수집하는 취미가 있다. 막내 카즈야에게 약하다.',
    personality: 'ESFP (호탕, 수다, 허세)',
    likes: '마작, 술, 카즈야',
    dislikes: '형들',
    features: ['갈발(장발)/적안', '검은색 유카타', '무기: 주판(?)', '브라콤'],
    imgId: 21,
    quote: "이봐, 이번 달 적자는 내 탓이 아니라고!"
  },
  {
    id: 'kazuya',
    name: '미나모토 카즈야',
    kanjiName: '源 和也',
    age: '23세',
    height: '181cm',
    role: '사남 / 한량(?)',
    faction: Faction.Minamoto,
    description: '디저트에 환장하는 미식가이자 체술 마스터. 형들의 과보호로 인해 성적으로 무지하다. 만사가 귀찮은 한량.',
    personality: 'ISTP (단답, 귀차니즘)',
    likes: '디저트, 장죽, 수면',
    dislikes: '훈련, 귀찮은 것',
    features: ['은회색발/청안', '검은색 유카타', '무기: 시라사메(카타나)', '체술 마스터'],
    imgId: 31,
    quote: "졸려... 디저트 사오면 생각해보지."
  },
  {
    id: 'will',
    name: '윌',
    kanjiName: 'Will',
    age: '불명',
    height: '187cm',
    role: '네뷸라 리더',
    faction: Faction.Nebula,
    description: '플레임헤드 종족. 머리가 불꽃으로 되어있으며 기분에 따라 색이 변한다. 말을 못 하지만 행동으로 보여주는 리더.',
    personality: 'ENFJ (표현 풍부, 말 못함)',
    likes: '고급 휘발유, 정원 가꾸기',
    dislikes: '경유, 물',
    features: ['불꽃 머리', '검은색 셔츠', '능력: 불', '오징어 굽기 가능'],
    imgId: 41,
    quote: "(머리의 불꽃이 노랗게 타오른다)"
  },
  {
    id: 'zero',
    name: '제로',
    kanjiName: 'Zero',
    age: '불명',
    height: '182cm',
    role: '해커 / 조직원',
    faction: Faction.Nebula,
    description: '기계형 인간(사이보그). 감정 기복이 없으며 심심풀이로 타케시의 정보를 빼돌린다. 냉소적인 성격.',
    personality: 'INTJ (무뚝뚝, 냉철)',
    likes: '셀프 업그레이드',
    dislikes: '자신을 제외한 모두',
    features: ['백발/백안', '테크웨어', '능력: 폭격, 해킹', '기계팔'],
    imgId: 51,
    quote: "비효율적이군. 시스템 해킹 시작."
  },
  {
    id: 'elle',
    name: '에르',
    kanjiName: 'Elle',
    age: '불명',
    height: '176cm',
    role: '조직원',
    faction: Faction.Nebula,
    description: '인간과 촉수의 혼혈. 등 뒤의 촉수들을 통제하느라 늘 지쳐있다. 비관적인 성격의 소유자.',
    personality: 'ENTP (비관적, 변태)',
    likes: '타코야끼, 촉수랑 놀기',
    dislikes: '미나모토 가문',
    features: ['금발/보라눈', '검은색 셔츠', '능력: 촉수', '마른 근육질'],
    imgId: 74,
    quote: "아... 촉수들이 또 말을 안 듣네."
  },
  {
    id: 'dia',
    name: '디아',
    kanjiName: 'Dia',
    age: '불명',
    height: '194cm',
    role: '조직원 / 돌격대장',
    faction: Faction.Nebula,
    description: '라크샤사 종족. 전투광이자 쾌락주의자. 지하 아이돌의 광팬이다. 생각보다 행동이 앞서는 다혈질.',
    personality: 'ESTP (다혈질, 욕설, 단순)',
    likes: '아이돌 포스터',
    dislikes: '아픈 것',
    features: ['흑발/역안(적안)', '붉은 셔츠', '능력: 폭발, 맨몸전투', '붉은 뿔'],
    imgId: 81, 
    quote: "다 터뜨려버리면 해결되는 거 아냐?!"
  }
];

export const WORLD_LORE: WorldInfo[] = [
  {
    title: "배경: 신-황성 (新皇成) 2114년",
    content: [
      "서기 2114년, 신-황성 89년. 가상의 22세기 일본.",
      "무공, 체술, 신수의 힘과 사이버네틱스 기술이 혼재하는 도시.",
      "자본주의와 신분제가 공존하는 기묘한 사회 구조.",
      "전통 양식과 하이테크가 결합된 독특한 미학적 풍경."
    ],
    imgId: 82
  },
  {
    title: "이슈: 미나모토 VS 네뷸라",
    content: [
      "무사 명문 '미나모토'와 신흥 용병단 '네뷸라'의 갈등.",
      "네뷸라는 실력으로 인정을 받으려 하고, 미나모토는 그들을 무시하며 대립한다.",
      "두 집단의 충돌은 도시의 가장 큰 흥밋거리 중 하나다."
    ]
  }
];

export const KEYWORD_BOOK: Keyword[] = [
  { command: "!요약", description: "스토리 요약" },
  { command: "!수정", description: "출력 오류 수정" },
  { command: "!언어패치", description: "언어 설정 복구" },
  { command: "!디버그", description: "이미지 오류 점검" }
];