# API 사용 가이드

외부에서 certexamhub API를 사용하는 다양한 방법을 안내합니다.

## 📡 API 엔드포인트

```
https://hyunkang07.github.io/certexamhub/api/data.json
```

## 🚀 빠른 시작

### 1. 브라우저에서 직접 확인

브라우저 주소창에 아래 URL을 입력하면 JSON 데이터를 바로 볼 수 있습니다:
```
https://hyunkang07.github.io/certexamhub/api/data.json
```

### 2. JavaScript (웹 페이지)

#### 기본 사용법
```javascript
// Fetch API 사용
fetch('https://hyunkang07.github.io/certexamhub/api/data.json')
  .then(response => response.json())
  .then(data => {
    console.log('데이터 로드 완료:', data);
    // 여기서 데이터 사용
  })
  .catch(error => console.error('오류:', error));
```

#### async/await 사용
```javascript
async function loadExamData() {
  try {
    const response = await fetch('https://hyunkang07.github.io/certexamhub/api/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터 로드 실패:', error);
    return null;
  }
}

// 사용 예시
const data = await loadExamData();
if (data) {
  console.log('자격증 종류:', Object.keys(data));
}
```

#### 특정 자격증만 가져오기
```javascript
async function getCategoryData(categoryName) {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/data.json');
  const data = await response.json();
  return data[categoryName] || null;
}

// 전산회계2급 데이터만 가져오기
const jeonsanData = await getCategoryData('전산회계2급');
console.log(jeonsanData);
```

#### 특정 회차만 가져오기
```javascript
async function getExamByNumber(examNumber) {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/data.json');
  const data = await response.json();
  
  const results = [];
  Object.entries(data).forEach(([category, subCategories]) => {
    Object.values(subCategories).forEach(exams => {
      exams.forEach(exam => {
        if (exam.exam === examNumber) {
          results.push({ category, exam });
        }
      });
    });
  });
  
  return results;
}

// 제122회 자료만 가져오기
const exam122 = await getExamByNumber('제122회');
console.log(exam122);
```

#### 모든 파일 목록 추출
```javascript
async function getAllFiles() {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/data.json');
  const data = await response.json();
  
  const baseUrl = 'https://hyunkang07.github.io/certexamhub/';
  const files = [];
  
  Object.entries(data).forEach(([category, subCategories]) => {
    Object.values(subCategories).forEach(exams => {
      exams.forEach(exam => {
        exam.files.forEach(file => {
          // 전체 URL 생성
          const encodedPath = file.path.split('/')
            .map(segment => encodeURIComponent(segment))
            .join('/');
          const fullUrl = baseUrl + encodedPath;
          
          files.push({
            category,
            exam: exam.exam,
            name: file.name,
            type: file.type,
            url: fullUrl
          });
        });
      });
    });
  });
  
  return files;
}

// 모든 파일 가져오기
const allFiles = await getAllFiles();
console.log(`총 ${allFiles.length}개의 파일`);
allFiles.forEach(file => {
  console.log(`${file.category} - ${file.exam} - ${file.name}`);
});
```

### 3. Python

#### 기본 사용법
```python
import requests

url = 'https://hyunkang07.github.io/certexamhub/api/data.json'
response = requests.get(url)
data = response.json()

print("자격증 종류:", list(data.keys()))
```

#### 특정 자격증만 가져오기
```python
import requests

url = 'https://hyunkang07.github.io/certexamhub/api/data.json'
response = requests.get(url)
data = response.json()

# 전산회계2급 데이터만
jeonsan_data = data.get('전산회계2급', {})
print(jeonsan_data)
```

#### 특정 회차만 가져오기
```python
import requests

url = 'https://hyunkang07.github.io/certexamhub/api/data.json'
response = requests.get(url)
data = response.json()

# 제122회 자료만 찾기
exam_122 = []
for category, sub_categories in data.items():
    for sub_category, exams in sub_categories.items():
        for exam in exams:
            if exam['exam'] == '제122회':
                exam_122.append({
                    'category': category,
                    'exam': exam
                })

print(exam_122)
```

#### 파일 다운로드
```python
import requests
import os
from urllib.parse import quote

def download_file(file_path, save_path):
    base_url = 'https://hyunkang07.github.io/certexamhub/'
    # 한글 경로 인코딩
    encoded_path = '/'.join(quote(segment, safe='') for segment in file_path.split('/'))
    file_url = base_url + encoded_path
    
    response = requests.get(file_url)
    if response.status_code == 200:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        with open(save_path, 'wb') as f:
            f.write(response.content)
        print(f'다운로드 완료: {save_path}')
    else:
        print(f'다운로드 실패: {file_url}')

# 사용 예시
url = 'https://hyunkang07.github.io/certexamhub/api/data.json'
data = requests.get(url).json()

# 첫 번째 파일 다운로드
first_file = data['전산회계2급']['전산회계2급'][0]['files'][0]
download_file(first_file['path'], f"./downloads/{first_file['name']}")
```

### 4. Node.js

```javascript
const https = require('https');
const fs = require('fs');

const url = 'https://hyunkang07.github.io/certexamhub/api/data.json';

https.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    const jsonData = JSON.parse(data);
    console.log('자격증 종류:', Object.keys(jsonData));
    
    // 데이터 저장
    fs.writeFileSync('exam_data.json', JSON.stringify(jsonData, null, 2));
    console.log('데이터가 exam_data.json에 저장되었습니다.');
  });
}).on('error', (err) => {
  console.error('오류:', err.message);
});
```

### 5. cURL (터미널)

```bash
# JSON 데이터 가져오기
curl https://hyunkang07.github.io/certexamhub/api/data.json

# 파일로 저장
curl -o exam_data.json https://hyunkang07.github.io/certexamhub/api/data.json

# 예쁘게 출력 (jq 필요)
curl -s https://hyunkang07.github.io/certexamhub/api/data.json | jq .
```

### 6. Excel/Google Sheets

Google Sheets에서:
```
=IMPORTDATA("https://hyunkang07.github.io/certexamhub/api/data.json")
```

## 📊 데이터 구조

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
  },
  "전산세무1급": {
    "전산세무1급": [
      {
        "exam": "제122회",
        "files": [...]
      }
    ]
  }
}
```

## 🔗 파일 URL 생성

파일 경로를 전체 URL로 변환하는 방법:

### JavaScript
```javascript
const baseUrl = 'https://hyunkang07.github.io/certexamhub/';
const filePath = '전산회계/전산회계2급/제122회-전산회계2급-A형-1.pdf';

// 한글 경로 인코딩
const encodedPath = filePath.split('/')
  .map(segment => encodeURIComponent(segment))
  .join('/');

const fullUrl = baseUrl + encodedPath;
console.log(fullUrl);
// https://hyunkang07.github.io/certexamhub/%EC%A0%84%EC%82%B0%ED%9A%8C%EA%B3%84/%EC%A0%84%EC%82%B0%ED%9A%8C%EA%B3%842%EA%B8%89/...
```

### Python
```python
from urllib.parse import quote

base_url = 'https://hyunkang07.github.io/certexamhub/'
file_path = '전산회계/전산회계2급/제122회-전산회계2급-A형-1.pdf'

# 한글 경로 인코딩
encoded_path = '/'.join(quote(segment, safe='') for segment in file_path.split('/'))
full_url = base_url + encoded_path

print(full_url)
```

## 💡 활용 예시

### 1. 웹사이트에 자료 목록 표시
```html
<!DOCTYPE html>
<html>
<head>
    <title>시험 자료 목록</title>
</head>
<body>
    <div id="exam-list"></div>
    <script>
        fetch('https://hyunkang07.github.io/certexamhub/api/data.json')
            .then(res => res.json())
            .then(data => {
                const listDiv = document.getElementById('exam-list');
                Object.keys(data).forEach(category => {
                    const h2 = document.createElement('h2');
                    h2.textContent = category;
                    listDiv.appendChild(h2);
                });
            });
    </script>
</body>
</html>
```

### 2. 최신 자료만 가져오기
```javascript
async function getLatestExams() {
    const response = await fetch('https://hyunkang07.github.io/certexamhub/api/data.json');
    const data = await response.json();
    
    const latest = {};
    Object.entries(data).forEach(([category, subCategories]) => {
        Object.values(subCategories).forEach(exams => {
            // 가장 높은 회차 찾기
            const sorted = exams.sort((a, b) => {
                const numA = parseInt(a.exam.match(/\d+/)[0]);
                const numB = parseInt(b.exam.match(/\d+/)[0]);
                return numB - numA;
            });
            latest[category] = sorted[0];
        });
    });
    
    return latest;
}
```

## ⚠️ 주의사항

1. **CORS**: GitHub Pages는 CORS를 허용하므로 외부에서 접근 가능합니다.
2. **캐싱**: 브라우저나 CDN에서 캐시될 수 있으므로, 최신 데이터가 필요하면 캐시를 고려하세요.
3. **한글 경로**: 파일 경로에 한글이 포함되어 있으므로 URL 인코딩이 필요합니다.
4. **에러 처리**: 네트워크 오류나 파일이 없을 경우를 대비해 에러 처리를 추가하세요.

## 📝 예제 파일

더 많은 예제는 `api/example.html` 파일을 참고하세요:
- https://hyunkang07.github.io/certexamhub/api/example.html

---

## 📚 모의고사 API (mockexam.json)

고1, 고2, 고3 모의고사 데이터를 제공하는 API입니다.

### API 엔드포인트

```
https://hyunkang07.github.io/certexamhub/api/mockexam.json
```

### 데이터 구조

```json
{
  "2025-고1-3월모의고사": {
    "2025-고1-3월모의고사": [
      {
        "exam": "2025년 고1 3월 학력평가",
        "files": [
          {
            "name": "2025년-3월_고1_국어.pdf",
            "type": "pdf",
            "category": "문제",
            "path": "모의고사/고1/2025-고1-3월모의고사/2025년-3월_고1_국어.pdf"
          },
          {
            "name": "2025년-3월_고1_국어-해설-1.pdf",
            "type": "pdf",
            "category": "해설",
            "path": "모의고사/고1/2025-고1-3월모의고사/2025년-3월_고1_국어-해설-1.pdf"
          }
        ]
      }
    ]
  },
  "2025-고2-3월모의고사": {
    "2025-고2-3월모의고사": [
      {
        "exam": "2025년 고2 3월 학력평가",
        "files": [...]
      }
    ]
  },
  "2025-고3-3월모의고사": {
    "2025-고3-3월모의고사": [
      {
        "exam": "2025년 고3 3월 학력평가",
        "files": [...]
      }
    ]
  }
}
```

### 사용 예시

#### 1. JavaScript - 특정 학년의 모의고사 가져오기

```javascript
async function getMockExamByGrade(grade) {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json');
  const data = await response.json();
  
  // 고1, 고2, 고3 데이터 필터링
  const filtered = {};
  Object.keys(data).forEach(key => {
    if (key.includes(`-고${grade}-`)) {
      filtered[key] = data[key];
    }
  });
  
  return filtered;
}

// 고2 모의고사만 가져오기
const grade2Data = await getMockExamByGrade(2);
console.log(grade2Data);
```

#### 2. JavaScript - 특정 월의 모의고사 가져오기

```javascript
async function getMockExamByMonth(month) {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json');
  const data = await response.json();
  
  const filtered = {};
  Object.keys(data).forEach(key => {
    if (key.includes(`${month}월`)) {
      filtered[key] = data[key];
    }
  });
  
  return filtered;
}

// 6월 모의고사만 가져오기
const juneData = await getMockExamByMonth(6);
console.log(juneData);
```

#### 3. JavaScript - 특정 과목의 파일만 가져오기

```javascript
async function getFilesBySubject(subject) {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json');
  const data = await response.json();
  
  const files = [];
  
  Object.values(data).forEach(category => {
    Object.values(category).forEach(exams => {
      exams.forEach(exam => {
        exam.files.forEach(file => {
          if (file.name.includes(subject)) {
            files.push({
              exam: exam.exam,
              file: file
            });
          }
        });
      });
    });
  });
  
  return files;
}

// 수학 파일만 가져오기
const mathFiles = await getFilesBySubject('수학');
console.log(mathFiles);
```

#### 4. JavaScript - 문제/해설/정답 분류별로 가져오기

```javascript
async function getFilesByCategory(category) {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json');
  const data = await response.json();
  
  const files = [];
  
  Object.values(data).forEach(examCategory => {
    Object.values(examCategory).forEach(exams => {
      exams.forEach(exam => {
        exam.files.forEach(file => {
          if (file.category === category) {
            files.push({
              exam: exam.exam,
              file: file
            });
          }
        });
      });
    });
  });
  
  return files;
}

// 해설 파일만 가져오기
const solutions = await getFilesByCategory('해설');
console.log(solutions);

// 문제 파일만 가져오기
const problems = await getFilesByCategory('문제');
console.log(problems);
```

#### 5. Python - 모의고사 데이터 가져오기

```python
import requests

def get_mock_exam_data():
    url = 'https://hyunkang07.github.io/certexamhub/api/mockexam.json'
    response = requests.get(url)
    return response.json()

# 전체 데이터 가져오기
data = get_mock_exam_data()

# 고2 데이터만 필터링
grade2_data = {
    key: value for key, value in data.items() 
    if '-고2-' in key
}

print(f"고2 모의고사: {list(grade2_data.keys())}")
```

#### 6. Python - 특정 과목의 파일 다운로드

```python
import requests
import os
from urllib.parse import quote

def download_mock_exam_file(file_path, save_path):
    base_url = 'https://hyunkang07.github.io/certexamhub/'
    encoded_path = '/'.join(quote(segment, safe='') for segment in file_path.split('/'))
    file_url = base_url + encoded_path
    
    response = requests.get(file_url)
    if response.status_code == 200:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        with open(save_path, 'wb') as f:
            f.write(response.content)
        print(f'다운로드 완료: {save_path}')
    else:
        print(f'다운로드 실패: {file_url}')

# 사용 예시
data = get_mock_exam_data()

# 고2 6월 모의고사의 첫 번째 파일 다운로드
if '2025-고2-6월모의고사' in data:
    first_file = data['2025-고2-6월모의고사']['2025-고2-6월모의고사'][0]['files'][0]
    download_mock_exam_file(
        first_file['path'], 
        f"./downloads/{first_file['name']}"
    )
```

#### 7. JavaScript - 전체 파일 목록과 URL 생성

```javascript
async function getAllMockExamFiles() {
  const response = await fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json');
  const data = await response.json();
  
  const baseUrl = 'https://hyunkang07.github.io/certexamhub/';
  const files = [];
  
  Object.entries(data).forEach(([examKey, examCategory]) => {
    Object.values(examCategory).forEach(exams => {
      exams.forEach(exam => {
        exam.files.forEach(file => {
          // 전체 URL 생성
          const encodedPath = file.path.split('/')
            .map(segment => encodeURIComponent(segment))
            .join('/');
          const fullUrl = baseUrl + encodedPath;
          
          files.push({
            examKey,
            exam: exam.exam,
            name: file.name,
            type: file.type,
            category: file.category,
            url: fullUrl
          });
        });
      });
    });
  });
  
  return files;
}

// 모든 파일 가져오기
const allFiles = await getAllMockExamFiles();
console.log(`총 ${allFiles.length}개의 파일`);

// 고3 파일만 필터링
const grade3Files = allFiles.filter(file => file.examKey.includes('-고3-'));
console.log(`고3 파일: ${grade3Files.length}개`);
```

### 카테고리 설명

- **category**: 파일 유형을 나타냅니다
  - `"문제"`: 문제지 파일
  - `"해설"`: 해설지 파일
  - `"정답"`: 정답 파일
  - `"듣기대본"`: 영어 듣기 대본 파일
  - `"듣기파일"`: 영어 듣기 MP3 파일

### 학년별 과목 구성

- **고1**: 국어, 수학, 영어, 한국사, 통합사회, 통합과학
- **고2**: 국어, 수학, 영어, 한국사, 과학탐구(물리학1, 화학1, 생명과학1, 지구과학1), 사회탐구(생활과윤리, 윤리와사상, 한국지리, 세계지리, 동아시아사, 세계사, 경제, 정치와법, 사회문화)
- **고3**: 국어, 수학, 영어, 한국사, 과학탐구(물리학1/2, 화학1/2, 생명과학1/2, 지구과학1/2), 사회탐구(생활과윤리, 윤리와사상, 한국지리, 세계지리, 동아시아사, 세계사, 경제, 정치와법, 사회문화)

### 활용 예시

#### 웹사이트에 모의고사 목록 표시

```html
<!DOCTYPE html>
<html>
<head>
    <title>모의고사 자료 목록</title>
</head>
<body>
    <div id="mock-exam-list"></div>
    <script>
        async function loadMockExams() {
            const response = await fetch('https://hyunkang07.github.io/certexamhub/api/mockexam.json');
            const data = await response.json();
            
            const listDiv = document.getElementById('mock-exam-list');
            
            Object.keys(data).forEach(examKey => {
                const h2 = document.createElement('h2');
                h2.textContent = examKey;
                listDiv.appendChild(h2);
                
                const exam = data[examKey][examKey][0];
                const ul = document.createElement('ul');
                
                exam.files.forEach(file => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <strong>${file.name}</strong> 
                        <span style="color: #666;">(${file.category})</span>
                    `;
                    ul.appendChild(li);
                });
                
                listDiv.appendChild(ul);
            });
        }
        
        loadMockExams();
    </script>
</body>
</html>
```

### 주의사항

1. **도메인**: `hyunkang07.github.io/certexamhub` 도메인을 사용합니다.
2. **한글 경로**: 파일 경로에 한글이 포함되어 있으므로 URL 인코딩이 필요합니다.
3. **파일 타입**: `type` 필드는 `"pdf"` 또는 `"mp3"`입니다.
4. **카테고리**: `category` 필드를 사용하여 문제/해설/정답을 구분할 수 있습니다.

