# certexamhub

자격증 시험 자료를 정리하고 제공하는 웹사이트입니다.

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
│   └── data.json          # 시험 자료 데이터 (JSON API)
└── 전산회계/
    └── 전산회계2급/        # 실제 파일들
```

## 🔌 API 사용법

이 프로젝트는 JSON 파일을 API처럼 제공합니다. 다른 프로젝트에서 데이터를 가져와 사용할 수 있습니다.

### API 엔드포인트

```
https://hyunkang07.github.io/certexamhub/api/data.json
```

### 데이터 구조

```json
{
  "전산회계": {
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

### JavaScript에서 사용하기

```javascript
// Fetch API 사용
fetch('https://hyunkang07.github.io/certexamhub/api/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // 데이터 사용
    Object.entries(data).forEach(([category, subCategories]) => {
      console.log(category);
      Object.entries(subCategories).forEach(([subCategory, exams]) => {
        console.log(subCategory, exams);
      });
    });
  })
  .catch(error => console.error('Error:', error));

// async/await 사용
async function loadData() {
  try {
    const response = await fetch('https://hyunkang07.github.io/certexamhub/api/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터 로드 실패:', error);
  }
}
```

### Python에서 사용하기

```python
import requests
import json

url = 'https://hyunkang07.github.io/certexamhub/api/data.json'
response = requests.get(url)
data = response.json()

# 데이터 사용
for category, sub_categories in data.items():
    print(category)
    for sub_category, exams in sub_categories.items():
        print(f"  {sub_category}")
        for exam in exams:
            print(f"    {exam['exam']}")
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

새로운 시험 자료를 추가하려면 `api/data.json` 파일을 수정하세요:

1. `api/data.json` 파일 열기
2. 적절한 위치에 새 데이터 추가
3. GitHub에 커밋 및 푸시

예시:
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
- ✅ JSON API 제공

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.
