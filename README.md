# certexamhub

자격증 시험 자료, 검정고시, 모의고사 자료를 정리하고 제공하는 웹사이트입니다.

## 🌐 배포 주소

- GitHub Pages: https://hyunkang07.github.io/certexamhub/

## 📁 프로젝트 구조

```
certexamhub/
├── index.html              # 메인 페이지
├── assets/
│   ├── css/
│   │   └── style.css      # 스타일시트
│   └── js/
│       └── main.js        # JavaScript 로직
├── api/
│   ├── data.json          # 전산회계 시험 자료 데이터 (JSON API)
│   ├── geomsi.json        # 검정고시 자료 데이터 (JSON API)
│   ├── mockexam.json      # 모의고사 자료 데이터 (JSON API)
│   ├── example.html       # API 사용 예제 페이지
│   └── USAGE.md           # 상세 API 사용 가이드
├── 전산회계/              # 전산회계 시험 자료
│   ├── 전산회계2급/
│   ├── 전산세무1급/
│   └── 전산세무2급/
├── 검정고시/              # 검정고시 자료
│   ├── 초등학교졸업검정고시/
│   └── 충학교졸업검정고시/
└── 모의고사/              # 모의고사 자료
    └── 고3/
        ├── 2025-고3-10월모의고사/
        └── 2025-고3-수능기출문제/
```

## 🔌 API 사용법

이 프로젝트는 JSON 파일을 API처럼 제공합니다. 다른 프로젝트에서 데이터를 가져와 사용할 수 있습니다.

### 📍 API 엔드포인트

#### 전산회계 시험 자료
```
https://hyunkang07.github.io/certexamhub/api/data.json
```

#### 검정고시 자료
```
https://hyunkang07.github.io/certexamhub/api/geomsi.json
```

#### 모의고사 자료
```
https://hyunkang07.github.io/certexamhub/api/mockexam.json
```

### 🎯 실시간 예제

**브라우저에서 바로 테스트:**
- 예제 페이지: https://hyunkang07.github.io/certexamhub/api/example.html
- 또는 로컬에서 `api/example.html` 파일을 열어보세요

### 데이터 구조

#### 전산회계 (data.json)
```json
{
  "전산회계2급": {
    "전산회계2급": [
      {
        "exam": "제122회",
        "files": [
          {
            "name": "제122회-전산회계2급-A형-1.pdf",
            "type": "pdf",
            "path": "전산회계/전산회계2급/제122회-전산회계2급-A형-1.pdf"
          }
        ]
      }
    ]
  }
}
```

#### 검정고시 (geomsi.json)
```json
{
  "초등학교졸업검정고시": {
    "초등학교졸업검정고시": [
      {
        "exam": "2025년도 1차",
        "files": [
          {
            "name": "2025년도_1차시험_초졸학력_국어_문제.pdf",
            "type": "pdf",
            "path": "검정고시/초등학교졸업검정고시/2025년도_1차시험_초졸학력_국어_문제.pdf"
          }
        ]
      }
    ]
  }
}
```

#### 모의고사 (mockexam.json)
```json
{
  "2025-고3-10월모의고사": {
    "2025-고3-10월모의고사": [
      {
        "exam": "2025년 고3 10월 모의고사",
        "files": [
          {
            "name": "2025년-고3-10월-모의고사-국어-문제.pdf",
            "type": "pdf",
            "category": "문제",
            "path": "모의고사/고3/2025-고3-10월모의고사/2025년-고3-10월-모의고사-국어-문제.pdf"
          },
          {
            "name": "2025년-고3-10월-모의고사-국어-해설.pdf",
            "type": "pdf",
            "category": "해설",
            "path": "모의고사/고3/2025-고3-10월모의고사/2025년-고3-10월-모의고사-국어-해설.pdf"
          },
          {
            "name": "2025학년도-10월-3학년-영어-듣기평가.mp3",
            "type": "mp3",
            "category": "듣기파일",
            "path": "모의고사/고3/2025-고3-10월모의고사/2025학년도-10월-3학년-영어-듣기평가.mp3"
          }
        ]
      }
    ]
  }
}
```

**파일 카테고리:**
- `문제`: 문제 PDF 파일
- `해설`: 해설 PDF 파일
- `정답`: 정답 PDF 파일 (수능기출문제에만 있음)
- `듣기대본`: 듣기 대본 PDF 파일
- `듣기파일`: 듣기 평가 MP3 파일

### JavaScript에서 사용하기

```javascript
// 전산회계 데이터
fetch('https://hyunkang07.github.io/certexamhub/api/data.json')
  .then(response => response.json())
  .then(data => {
    console.log('전산회계 데이터:', data);
  });

// 검정고시 데이터
fetch('https://hyunkang07.github.io/certexamhub/api/geomsi.json')
  .then(response => response.json())
  .then(data => {
    console.log('검정고시 데이터:', data);
  });

// 모의고사 데이터
fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json')
  .then(response => response.json())
  .then(data => {
    console.log('모의고사 데이터:', data);
  });

// async/await 사용
async function loadAllData() {
  try {
    const [certData, geomsiData, mockData] = await Promise.all([
      fetch('https://hyunkang07.github.io/certexamhub/api/data.json').then(r => r.json()),
      fetch('https://hyunkang07.github.io/certexamhub/api/geomsi.json').then(r => r.json()),
      fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json').then(r => r.json())
    ]);
    return { certData, geomsiData, mockData };
  } catch (error) {
    console.error('데이터 로드 실패:', error);
  }
}
```

### Python에서 사용하기

```python
import requests

# 전산회계 데이터
cert_url = 'https://hyunkang07.github.io/certexamhub/api/data.json'
cert_data = requests.get(cert_url).json()

# 검정고시 데이터
geomsi_url = 'https://hyunkang07.github.io/certexamhub/api/geomsi.json'
geomsi_data = requests.get(geomsi_url).json()

# 모의고사 데이터
mock_url = 'https://hyunkang07.github.io/certexamhub/api/mockexam.json'
mock_data = requests.get(mock_url).json()

# 데이터 사용 예시
for category, sub_categories in cert_data.items():
    print(f"자격증: {category}")
    for sub_category, exams in sub_categories.items():
        print(f"  분류: {sub_category}")
        for exam in exams:
            print(f"    회차: {exam['exam']}")
            for file in exam['files']:
                print(f"      - {file['name']} ({file['type']})")
```

### 파일 URL 생성

파일 경로는 상대 경로로 제공됩니다. 전체 URL을 생성하려면:

```javascript
const baseUrl = 'https://hyunkang07.github.io/certexamhub/';
const filePath = '전산회계/전산회계2급/제122회-전산회계2급-A형-1.pdf';

// 한글 경로 인코딩
const encodedPath = filePath.split('/')
  .map(segment => encodeURIComponent(segment))
  .join('/');

const fullUrl = baseUrl + encodedPath;
console.log(fullUrl);
```

## 🚀 로컬 개발

1. 저장소 클론
```bash
git clone https://github.com/hyunkang07/certexamhub.git
cd certexamhub
```

2. 로컬 서버 실행 (Python 예시)
```bash
# Python 3
python -m http.server 8000

# 또는 Node.js (http-server 설치 필요)
npx http-server
```

3. 브라우저에서 열기
```
http://localhost:8000
```

## 📝 데이터 추가 방법

새로운 시험 자료를 추가하려면 해당 JSON 파일을 수정하세요:

### 전산회계 자료 추가
`api/data.json` 파일을 수정하세요.

### 검정고시 자료 추가
`api/geomsi.json` 파일을 수정하세요.

### 모의고사 자료 추가
`api/mockexam.json` 파일을 수정하세요.

**추가 절차:**
1. 해당 JSON 파일 열기
2. 적절한 위치에 새 데이터 추가
3. GitHub에 커밋 및 푸시

**예시 (전산회계):**
```json
{
  "exam": "제123회",
  "files": [
    {
      "name": "제123회-전산회계2급-A형.pdf",
      "type": "pdf",
      "path": "전산회계/전산회계2급/제123회-전산회계2급-A형.pdf"
    }
  ]
}
```

## 🎨 기능

- ✅ 표 형식 파일 목록
- ✅ 필터링 (자격증 분류, 시험 회차, 파일 유형)
- ✅ 정렬 (최신순/오래된순)
- ✅ 링크 복사 기능
- ✅ 반응형 디자인
- ✅ JSON API 제공 (전산회계, 검정고시, 모의고사 분리)

## 📚 제공 자료

### 전산회계
- 전산회계2급 (제111회 ~ 제122회)
- 전산세무1급 (제112회 ~ 제122회)
- 전산세무2급 (제112회 ~ 제122회)

### 검정고시
- 초등학교졸업검정고시 (2023년 제1회 ~ 2025년도 2차)
- 중학교졸업검정고시 (2023년 제1회 ~ 2025년도 2차)

### 모의고사
- 2025년 고3 10월 모의고사
- 2026학년도 대학수학능력시험 기출문제

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.
