// 작업물은 최신순(주업무 위주)으로 정렬
export const workContent = {
  // KB 데이터허브
  KBdatahub: { // router path와 동일한 이름
    type: 'website',
    sub: {
      en: 'KB LAND DATAHUB',
      kr: 'KB부동산 데이터허브 구축 및 운영',
      path: 'KBdatahub'
    },
    title: 'KB부동산 데이터허브 \n구축 및 운영',
    do: '퍼블리싱 / 반응형',
    url: 'https://data.kbland.kr/',
    subtit: 'KB부동산 빅데이터 통계 분석 플랫폼',
    perform: '데이터허브는 KB부동산이 보유한 다양한 데이터를 시각화하여 제공하는 플랫폼으로, 웹 기반의 반응형 사이트입니다. 이 프로젝트는 vue.js(2.0) 환경에서 구축되었으며, 공통 UI를 컴포넌트 단위로 구조화하는 작업을 통해 코드의 재사용성을 고민할 수 있었습니다. 또한, vue 디렉티브 활용, 이벤트 핸들링, 라이프사이클 관리 경험을 통해 프레임워크에 대한 이해도를 높일 수 있었습니다. 서비스 운영 단계에서는 유지 보수와 지속적인 개선 작업을 수행하며 신규 페이지 퍼블리싱과 SEO 최적화 업무를 진행했습니다. 초기 구축 시 공통화되지 않은 부분들을 개선하기 위해 퍼블리싱 가이드를 생성하고, 통일되지 않은 코드를 공통화함으로써 서비스 운영에 유연하게 대응했습니다. 이 프로젝트는 구축부터 운영까지 참여하며 다양한 업무와 협업의 중요성을 경험할 수 있었습니다.',
    info: [
      {tit: '기술 스택', text: 'Vue, HTML, CSS, Javascript'},
      {tit: '프로젝트 기간', text: '2021.10 - 2024.12'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 - 구축 40% · 대응,운영 100%'}
    ],
    webimg: ['img_datahub_detail01', 'img_datahub_detail02', 'img_datahub_detail03', 'img_datahub_detail04'],
    dark: true // 디테일 인트로 영역 폰트 컬러 설정
  },
  // 시월뮤직
  siwolmusic: {
    type: 'admin',
    sub: {
      en: 'siwolmusic',
      kr: '시월뮤직 플랫폼 구축',
      path: 'siwolmusic'
    },
    title: '시월뮤직 음원 \n서비스 구축',
    do: '퍼블리싱 / 반응형',
    url: '../project/siwolmusic/guide/directory.html',
    code: 'https://github.com/shinssuji/cocosuji/tree/master/public/works/siwolmusic',
    subtit: '음원 제작부터 수익 정산까지 가능한 플랫폼',
    perform: '시월뮤직은 음원 제작과 수익 정산 기능을 제공하는 플랫폼으로, 외주 요청을 받아 진행한 프로젝트입니다. 이 프로젝트는 랜딩 페이지, 회원가입·로그인 페이지, 관리자 페이지로 구성된 반응형 사이트로 모바일 환경에서는 하이브리드 앱 형태로 구현되었습니다. 일정이 촉박했던 만큼 데드라인 준수를 최우선으로 하여 진행되었으며, 디자인 시스템을 활용해 공통 믹스인 스타일을 생성함으로써 코드 재사용성을 높여 작업 효율을 극대화했습니다. 또한, 자주 사용하는 아이콘 목록은 SVG 파일을 Data URI로 변환한 뒤 SCSS 함수로 관리하여 네트워크 요청을 줄이고 유지 보수와 재사용성을 강화했습니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, SCSS, Javascript'},
      {tit: '프로젝트 기간', text: '2024.07.18 - 2024.08.20'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 - 100%'}
    ],
    dark: false
  },
  // BRANDY ACTION
  brandyaction: {
    type: 'landing',
    sub: {
      en: 'brandy action service',
      kr: '디지털 마케팅 대행사 랜딩',
      path: 'brandyaction'
    },
    title: '디지털 마케팅 \n대행사 랜딩',
    do: '퍼블리싱 / 반응형',
    url: '../project/brandyaction',
    code: 'https://github.com/shinssuji/cocosuji/tree/master/public/works/brandyaction',
    subtit: '브랜디액션의 디지털 마케팅 대행 서비스',
    perform: '브랜디액션은 디지털 마케팅 대행 서비스를 제공하는 업체입니다. 이 프로젝트는 브랜디액션에서 제공하는 각 분야의 서비스를 소개하는 랜딩 페이지입니다. 외주 요청을 받아 진행한 업무로 병원과 마케팅 서비스가 여기에 해당됩니다. 각 서비스는 독립된 프로젝트로 진행하였고, 추후 유지 보수 측면에서 좋지 않다고 판단하여 이를 개선하기 위해 전체 디렉토리 구조 및 스타일시트 공통화 작업을 진행하였습니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, SCSS, Jquery'},
      {tit: '프로젝트 기간', text: '2024.01.08 - 2024.01.15\n2024.01.29 - 2024.01.31'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
    ],
    dark: false
  },
  // 페이앱 
  payapp: {
    type: 'website',
    sub: {
      en: 'payapp',
      kr: '페이앱 홈페이지 리뉴얼',
      path: 'payapp'
    },
    title: '페이앱 홈페이지 \n리뉴얼',
    do: 'UI / 퍼블리싱 / 웹 / 모바일',
    url: '../project/payapp/',
    code: 'https://github.com/shinssuji/cocosuji/tree/master/public/works/payapp',
    subtit: '온/오프라인 결제가 가능한 무료 통합 결제 솔루션',
    perform: '페이앱은 온/오프라인 어디서나 신용카드, 휴대폰 등으로 결제 받을 수 있는 무료 통합 결제 솔루션입니다. 기존에 오래 유지된 기업 홈페이지를 전면 개편한 프로젝트로 디자인 시스템 정의 후에 퍼블리싱 작업에 착수했습니다. 전체 레이아웃은 부트스트랩을 기반으로 한 클래스를 사용하여 마크업 하였고, scss로 유지보수 및 소스 관리에 용이하도록 작업했습니다. 다양한 동적 효과로 사용자의 이목을 끌고 요소에 집중할 수 있도록 구성하였습니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, SCSS, Jquery, Design'},
      {tit: '프로젝트 기간', text: '2020.10.26 - 2020.12.31'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 80% · 디자인 20%'}
    ],
    dark: false
  },
  // 유캔싸인
  ucansign: {
    type: 'admin',
    sub: {
      en: 'ucansign',
      kr: '유캔싸인 솔루션 구축',
      path: 'ucansign'
    },
    title: '유캔싸인 솔루션 \n구축',
    do: '퍼블리싱 / 반응형',
    url: '../project/ucansign/guide/directory.html',
    code: 'https://github.com/shinssuji/cocosuji/tree/master/public/works/ucansign',
    subtit: '효율적인 계약업무를 위한 전자서명 솔루션',
    perform: '유캔싸인은 직관적인 이용방법으로 간편함과 보안성을 동시에 제공하는 전자계약 서비스입니다. 일정이 촉박하여 데드라인에 맞추기 위해 최선을 다했던 프로젝트입니다. vue.js 환경에서 개발로 일부 화면이 구현된 상태에서 UI 및 퍼블리싱 작업을 진행하였습니다. 프레임워크 내에서 기존에 사용하는 템플릿의 스타일은 유지하며 추가되는 화면에 맞게 UI 구현을 위해 노력했습니다. 이 서비스는 반응형 관리자로 제작하였지만 일부 사인 편집 기능 및 에디터 기능은 웹 환경 기준입니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, CSS, Vue(HTML 전달)'},
      {tit: '프로젝트 기간', text: '2021.03 - 2021.07'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 80%'}
    ],
    dark: false
  },
  // 하이컴AS
  hicomAS: {
    type: 'website',
    sub: {
      en: 'hicomAS',
      kr: '하이컴 홈페이지 리뉴얼',
      path: 'hicomAS'
    },
    title: '하이컴AS 홈페이지 \n리뉴얼',
    do: '퍼블리싱 / 반응형',
    url: 'https://www.hicomas.com/',
    subtit: '컴퓨터 A/S부터 설치까지 한번에',
    perform: '하이컴AS는 컴퓨터 A/S 솔루션으로, 프로그램 설치부터 가맹점 관리까지 운영하는 전문 업체입니다. 기존에 오래 유지된 사이트를 전면 개편한 프로젝트입니다. 작업 시 중점적으로 생각했던 부분은 실시간 접수 현황 테이블과 A/S 신청 페이지입니다. 이 페이지들은 직관적으로 보여주는 것이 중요하기 때문에 어떠한 환경에서도 내용 전달이 잘 이루어질 수 있도록 반응형으로 설계하였으며 접근성과 크로스브라우징에 대응하여 작업했습니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, SCSS, Jquery'},
      {tit: '프로젝트 기간', text: '2021.02.19 - 2021.05.14'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
    ],
    dark: false
  },
  // 100bang
  '100bang': {
    type: 'mobile',
    sub: {
      en: '100-bang',
      kr: '백방 웹 앱 구축',
      path: '100bang'
    },
    title: '백방 웹 앱 구축',
    do: '퍼블리싱 / 모바일',
    url: '../project/100bang',
    code: 'https://github.com/shinssuji/cocosuji/tree/master/public/works/100bang',
    subtit: '백명의 견적을 제공하는 장기렌트 견적 플랫폼',
    perform: '장기렌트 견적을 제공하는 플랫폼입니다. 모바일 화면 기준으로 작업되었습니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, CSS, Jqeury'},
      {tit: '프로젝트 기간', text: '2021.10.18 - 2021.10.30'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
    ],
    dark: false
  },
  // UDID
  udid: {
    type: 'website',
    sub: {
      en: 'UDID',
      kr: '유디아이디 홈페이지 리뉴얼',
      path: 'udid'
    },
    title: '유디아이디 홈페이지 \n리뉴얼',
    do: 'UI / 퍼블리싱 / 반응형',
    url: 'https://udid.co.kr/',
    subtit: 'U Dream I Do - UDID',
    perform: '유디아이디는 간편결제 솔루션 및 O2O 서비스의 개발/공급/운영을 주력하는 핀테크 전문 기업입니다. 기존의 페이지 이동 방식의 불편함을 반영하여 기업 소개를 위한 원페이지 사이트로 작업했습니다. 기업에서 제공하는 서비스의 확장성이 높았기 때문에 추후 업데이트 필요시 작업을 최소화할 수 있게 디자인 및 퍼블리싱 진행하였습니다. 뷰포트에 따라 반응하는 반응형 사이트입니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, SCSS, Jquery, Design'},
      {tit: '프로젝트 기간', text: '2020.07.20 - 2020.08.14'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 100% · 디자인 80%'}
    ],
    dark: false
  },
  // shopskin
  shopskin: {
    type: 'website',
    sub: {
      en: 'shoppingmall skin type',
      kr: '블로그페이 무료 스킨 메인 구축',
      path: 'shopskin'
    },
    title: '블로그페이 무료 스킨 \n메인 구축',
    do: 'UI / 퍼블리싱 / 반응형',
    url: '../project/shopskins/type1/',
    subtit: '블로그페이 무료 스킨',
    perform: '이 사이트는 블로그페이 서비스에서 무료로 제공하는 쇼핑몰 스킨 메인 페이지입니다. 사용자가 직접 편집할 수 있도록 제공하고자 했기 때문에 편집이 가능한 영역마다 모듈화되어 있으며, 분기된 파일로 구성되어 있습니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, CSS, Jquery, Design'},
      {tit: '프로젝트 기간', text: '2019'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 80% · 디자인 100%'}
    ],
    dark: false
  },

  // SINGSINGSALAD
  singsing: {
    type: 'landing',
    sub: {
      en: 'singsingsalad',
      kr: '싱싱샐러드 랜딩',
      path: 'singsing'
    },
    title: '싱싱샐러드 랜딩 \n구축',
    do: '퍼블리싱 / 반응형',
    url: 'https://singsingsalad.co.kr/',
    subtit: '살아 숨 쉬는 식재료로 건강하게',
    perform: '싱싱샐러드 랜딩사이트 입니다.',
    info: [
      {tit: '기술 스택', text: 'HTML, CSS, Jquery'},
      {tit: '프로젝트 기간', text: '2023.10.09 - 2023.10.16'},
      {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
    ],
    dark: false
  },

  // smart u mes
  // samrtumes: {
  //   type: 'mobile',
  //   sub: {
  //     en: 'SMART U MES',
  //     kr: 'SMART U MES 하이브리드앱 구축',
  //     path: 'samrtumes'
  //   },
  //   title: 'SMART U MES \n하이브리드앱 구축',
  //   do: '퍼블리싱 / 모바일',
  //   url: '',
  //   subtit: '생산관리부터 재고현황까지 한번에',
  //   perform: 'SAMRT U MES는 생산 계획부터 작업 정보, 불량정보 등의 기능을 고객 친화적으로 재구성하고 산출 후 업체에서 관리까지 가능하도록 구성된 혁신적인 앱 서비스입니다, 해당 프로젝트는 외주 요청을 받아 진행한 업무입니다. 사용자의 편의를 위해 간소화된 절차와 단순화된 UI를 제공하고 있습니다. 관리자 솔루션에서 사용할 수 있는 공통 컴포넌트를 구조화하여 개발단에서 페이지 생성 시 전체 레이아웃이 틀어지지 않도록 작업하였습니다.',
  //   info: [
  //     {tit: '기술 스택', text: 'HTML, CSS, Jqeury'},
  //     {tit: '프로젝트 기간', text: '2019.11.18 - 2019.11.22'},
  //     {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
  //   ],
  //   dark: false
  // },


  
  
  // SHOBIZ
  // shobiz: { // 소스 없음
  //   type: 'website',
  //   sub: {
  //     en: 'SHOBIZ HOMPAGE',
  //     kr: '쇼비즈 홈페이지 구축',
  //     path: 'shobiz'
  //   },
  //   title: '쇼비즈 홈페이지 \n구축',
  //   do: 'UI / 퍼블리싱 / 웹 / 모바일',
  //   url: '',
  //   subtit: '전문 지식 없이 가능한 쇼핑몰 구축 솔루션',
  //   perform: '쇼비즈는 쇼핑몰 분야에서 혁신적인 기능과 간편성을 결합한 서비스를 제공합니다. 전체 페이지의 퍼블리싱뿐만 아니라 고객센터와 디자인 스킨 등의 일부 UI 제작에도 참여하였습니다. 쇼비즈 프로젝트는 쇼핑몰 제작 솔루션 서비스로, 사용자를 위한 관리자 페이지 및 쇼핑몰 에디터, 서비스 소개를 위한 홈페이지 구축을 포함합니다. 홈페이지 구축 단계에서는 PC와 모바일 화면을 분기하여 작업하였습니다. scss를 활용하여 코드 작성의 효율성을 높이고 유지보수를 용이하게 하였습니다. 또한, 각 메뉴별로 효과적인 인터랙션을 제안하여 결과물의 완성도를 높였습니다.',
  //   info: [
  //     {tit: '기술 스택', text: 'HTML, SCSS, Jquery, Design'},
  //     {tit: '프로젝트 기간', text: '2020.02.01 - 2020.03.27'},
  //     {tit: '프로젝트 기여도', text: '퍼블리싱 80% · 디자인 20%'}
  //   ],
  //   dark: false
  // },
  
  // Cheonan Cultural City
  // cheonan: {
  //   type: 'landing',
  //   title: '천안문화도시 \n랜딩   제목 수정 필요',
  //   do: '퍼블리싱 / 반응형',
  //   url: '',
  //   subtit: '',
  //   perform: '',
  //   info: [
  //     {tit: '기술 스택', text: 'HTML, CSS, Jquery'},
  //     {tit: '프로젝트 기간', text: '2021.11.12 - 2021.11.15'},
  //     {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
  //   ],
  //   dark: false
  // },


  // blogpay service
  // blogpay: {
  //   type: 'landing',
  //   title: '',
  //   do: '퍼블리싱 / 반응형',
  //   url: '',
  //   subtit: '',
  //   perform: '',
  //   info: [
  //     {tit: '기술 스택', text: 'HTML, CSS, Jquery'},
  //     {tit: '프로젝트 기간', text: '2021.11.12 - 2021.11.15'},
  //     {tit: '프로젝트 기여도', text: '퍼블리싱 100%'}
  //   ],
  //   dark: false
  // },

};