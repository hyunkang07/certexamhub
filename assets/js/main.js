// 파일 데이터 구조
const fileData = {
    "전산회계": {
        "전산회계2급": [
            {
                exam: "제111회",
                files: [
                    { name: "제111회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제111회-전산회계2급-A형.pdf" },
                    { name: "제111회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제111회-전산회계2급-B형.pdf" },
                    { name: "제111회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제111회-전산회계2급-확정답안.pdf" },
                    { name: "제111회-전산세무회계-수험용데이터.zip", type: "zip", path: "전산회계/전산회계2급/제111회-전산세무회계-수험용데이터.zip" }
                ]
            },
            {
                exam: "제112회",
                files: [
                    { name: "제112회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제112회-전산회계2급-A형.pdf" },
                    { name: "제112회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제112회-전산회계2급-B형.pdf" },
                    { name: "제112회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제112회-전산회계2급-확정답안.pdf" },
                    { name: "제112회-전산세무회계-수험용데이터-1.zip", type: "zip", path: "전산회계/전산회계2급/제112회-전산세무회계-수험용데이터-1.zip" }
                ]
            },
            {
                exam: "제114회",
                files: [
                    { name: "제114회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제114회-전산회계2급-A형.pdf" },
                    { name: "제114회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제114회-전산회계2급-B형.pdf" },
                    { name: "제114회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제114회-전산회계2급-확정답안.pdf" },
                    { name: "제114회-전산세무회계-수험용데이터-1.zip", type: "zip", path: "전산회계/전산회계2급/제114회-전산세무회계-수험용데이터-1.zip" }
                ]
            },
            {
                exam: "제115회",
                files: [
                    { name: "제115회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제115회-전산회계2급-A형.pdf" },
                    { name: "제115회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제115회-전산회계2급-B형.pdf" },
                    { name: "제115회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제115회-전산회계2급-확정답안.pdf" },
                    { name: "제115회-전산세무회계-수험용데이터.zip", type: "zip", path: "전산회계/전산회계2급/제115회-전산세무회계-수험용데이터.zip" }
                ]
            },
            {
                exam: "제116회",
                files: [
                    { name: "제116회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제116회-전산회계2급-A형.pdf" },
                    { name: "제116회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제116회-전산회계2급-B형.pdf" },
                    { name: "제116회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제116회-전산회계2급-확정답안.pdf" },
                    { name: "제116회-전산세무회계-수험용데이터.zip", type: "zip", path: "전산회계/전산회계2급/제116회-전산세무회계-수험용데이터.zip" }
                ]
            },
            {
                exam: "제117회",
                files: [
                    { name: "제117회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제117회-전산회계2급-A형.pdf" },
                    { name: "제117회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제117회-전산회계2급-B형.pdf" },
                    { name: "제117회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제117회-전산회계2급-확정답안.pdf" },
                    { name: "제117회-전산세무회계-수험용데이터.zip", type: "zip", path: "전산회계/전산회계2급/제117회-전산세무회계-수험용데이터.zip" }
                ]
            },
            {
                exam: "제118회",
                files: [
                    { name: "제118회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제118회-전산회계2급-A형.pdf" },
                    { name: "제118회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제118회-전산회계2급-B형.pdf" },
                    { name: "제118회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제118회-전산회계2급-확정답안.pdf" },
                    { name: "제118회-전산세무회계-수험용데이터.zip", type: "zip", path: "전산회계/전산회계2급/제118회-전산세무회계-수험용데이터.zip" }
                ]
            },
            {
                exam: "제119회",
                files: [
                    { name: "제119회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제119회-전산회계2급-A형.pdf" },
                    { name: "제119회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제119회-전산회계2급-B형.pdf" },
                    { name: "제119회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제119회-전산회계2급-확정답안.pdf" },
                    { name: "제119회-전산세무회계-수험용데이터-3.zip", type: "zip", path: "전산회계/전산회계2급/제119회-전산세무회계-수험용데이터-3.zip" }
                ]
            },
            {
                exam: "제120회",
                files: [
                    { name: "제120회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제120회-전산회계2급-A형.pdf" },
                    { name: "제120회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제120회-전산회계2급-B형.pdf" },
                    { name: "제120회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제120회-전산회계2급-확정답안.pdf" },
                    { name: "제120회-전산회계2급.zip", type: "zip", path: "전산회계/전산회계2급/제120회-전산회계2급.zip" },
                    { name: "2025년-6월-수험용데이터.zip", type: "zip", path: "전산회계/전산회계2급/2025년-6월-수험용데이터.zip" }
                ]
            },
            {
                exam: "제121회",
                files: [
                    { name: "제121회-전산회계2급-A형.pdf", type: "pdf", path: "전산회계/전산회계2급/제121회-전산회계2급-A형.pdf" },
                    { name: "제121회-전산회계2급-B형.pdf", type: "pdf", path: "전산회계/전산회계2급/제121회-전산회계2급-B형.pdf" },
                    { name: "제121회-전산회계2급-확정답안.pdf", type: "pdf", path: "전산회계/전산회계2급/제121회-전산회계2급-확정답안.pdf" },
                    { name: "제121회-전산세무회계-수험용데이터-3.zip", type: "zip", path: "전산회계/전산회계2급/제121회-전산세무회계-수험용데이터-3.zip" }
                ]
            },
            {
                exam: "제122회",
                files: [
                    { name: "제122회-전산회계2급-A형-1.pdf", type: "pdf", path: "전산회계/전산회계2급/제122회-전산회계2급-A형-1.pdf" },
                    { name: "제122회-전산회계2급-B형-1.pdf", type: "pdf", path: "전산회계/전산회계2급/제122회-전산회계2급-B형-1.pdf" },
                    { name: "제122회-전산회계2급-확정답안-1.pdf", type: "pdf", path: "전산회계/전산회계2급/제122회-전산회계2급-확정답안-1.pdf" },
                    { name: "제122회-2025년-10월-수험용데이터-1.zip", type: "zip", path: "전산회계/전산회계2급/제122회-2025년-10월-수험용데이터-1.zip" }
                ]
            }
        ]
    }
};

// 필터 관련 변수
let currentCategoryFilter = 'all';
let currentExamFilter = 'all';
let currentTypeFilter = 'all';
let currentSortOrder = 'newest'; // 기본값: 최신순

// DOM 요소
const contentArea = document.getElementById('contentArea');
const categoryFilter = document.getElementById('categoryFilter');
const examFilter = document.getElementById('examFilter');
const typeFilter = document.getElementById('typeFilter');
const sortFilter = document.getElementById('sortFilter');

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    renderContent();
    setupEventListeners();
});

// 필터 초기화
function initializeFilters() {
    // 카테고리 필터 초기화
    const categories = Object.keys(fileData);
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // 시험 회차 필터 초기화
    updateExamFilter();
}

// 시험 회차 필터 업데이트
function updateExamFilter() {
    examFilter.innerHTML = '<option value="all">전체</option>';
    
    const examSet = new Set();
    
    if (currentCategoryFilter === 'all') {
        // 모든 카테고리에서 회차 수집
        Object.values(fileData).forEach(category => {
            Object.values(category).forEach(subCategory => {
                subCategory.forEach(exam => {
                    examSet.add(exam.exam);
                });
            });
        });
    } else {
        // 선택된 카테고리의 회차만 표시
        const category = fileData[currentCategoryFilter];
        if (category) {
            Object.values(category).forEach(subCategory => {
                subCategory.forEach(exam => {
                    examSet.add(exam.exam);
                });
            });
        }
    }
    
    // 회차 번호 기준으로 정렬 (최신순)
    const sortedExams = Array.from(examSet).sort((a, b) => {
        const numA = extractExamNumber(a);
        const numB = extractExamNumber(b);
        return numB - numA; // 내림차순 (최신순)
    });
    
    sortedExams.forEach(exam => {
        const option = document.createElement('option');
        option.value = exam;
        option.textContent = exam;
        examFilter.appendChild(option);
    });
}

// 회차 번호 추출 (정렬용)
function extractExamNumber(examString) {
    const match = examString.match(/제(\d+)회/);
    return match ? parseInt(match[1], 10) : 0;
}

// 시험 데이터 정렬
function sortExams(exams, sortOrder) {
    const sorted = [...exams];
    sorted.sort((a, b) => {
        const numA = extractExamNumber(a.exam);
        const numB = extractExamNumber(b.exam);
        if (sortOrder === 'newest') {
            return numB - numA; // 내림차순 (최신순)
        } else {
            return numA - numB; // 오름차순 (오래된순)
        }
    });
    return sorted;
}

// 이벤트 리스너 설정
function setupEventListeners() {
    categoryFilter.addEventListener('change', (e) => {
        currentCategoryFilter = e.target.value;
        currentExamFilter = 'all';
        examFilter.value = 'all';
        updateExamFilter();
        renderContent();
    });

    examFilter.addEventListener('change', (e) => {
        currentExamFilter = e.target.value;
        renderContent();
    });

    typeFilter.addEventListener('change', (e) => {
        currentTypeFilter = e.target.value;
        renderContent();
    });

    sortFilter.addEventListener('change', (e) => {
        currentSortOrder = e.target.value;
        renderContent();
    });
}

// GitHub Pages 경로 처리
function getBasePath() {
    // GitHub Pages인 경우 (hyunkang07.github.io 도메인)
    if (window.location.hostname === 'hyunkang07.github.io') {
        return '/certexamhub/';
    }
    // 로컬 개발 환경
    return './';
}

// 파일 경로 생성 (한글 경로 URL 인코딩)
function getFileUrl(path) {
    const basePath = getBasePath();
    // 경로의 각 부분을 인코딩 (슬래시는 유지)
    const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/');
    return basePath + encodedPath;
}

// 전체 URL 생성 (복사용)
function getFullUrl(path) {
    const relativePath = getFileUrl(path);
    // 이미 절대 경로로 시작하면 그대로 사용
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
        return relativePath;
    }
    // 상대 경로를 전체 URL로 변환
    const origin = window.location.origin;
    const basePath = relativePath.startsWith('/') ? relativePath : '/' + relativePath;
    return origin + basePath;
}

// 파일 아이콘 가져오기
function getFileIcon(type) {
    if (type === 'pdf') return '📄';
    if (type === 'zip') return '📦';
    return '📎';
}

// 클립보드에 복사
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        // 복사 성공 피드백
        const originalText = button.innerHTML;
        button.innerHTML = '✓ 복사됨';
        button.classList.add('copied');
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        // 클립보드 API가 지원되지 않는 경우 대체 방법
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const originalText = button.innerHTML;
            button.innerHTML = '✓ 복사됨';
            button.classList.add('copied');
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            alert('복사에 실패했습니다. 수동으로 복사해주세요.');
        }
        document.body.removeChild(textArea);
    }
}

// 콘텐츠 렌더링
function renderContent() {
    contentArea.innerHTML = '';

    let hasContent = false;

    Object.entries(fileData).forEach(([category, subCategories]) => {
        // 카테고리 필터 적용
        if (currentCategoryFilter !== 'all' && currentCategoryFilter !== category) {
            return;
        }

        Object.entries(subCategories).forEach(([subCategory, exams]) => {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = `${category} - ${subCategory}`;
            categorySection.appendChild(categoryTitle);

            // 정렬 적용
            const sortedExams = sortExams(exams, currentSortOrder);

            sortedExams.forEach(examData => {
                // 시험 회차 필터 적용
                if (currentExamFilter !== 'all' && currentExamFilter !== examData.exam) {
                    return;
                }

                // 파일 유형 필터 적용
                const filteredFiles = examData.files.filter(file => {
                    if (currentTypeFilter === 'all') return true;
                    return file.type === currentTypeFilter;
                });

                if (filteredFiles.length === 0) {
                    return;
                }

                hasContent = true;

                const examGroup = document.createElement('div');
                examGroup.className = 'exam-group';

                const examTitle = document.createElement('h3');
                examTitle.className = 'exam-title';
                examTitle.textContent = examData.exam;
                examGroup.appendChild(examTitle);

                const table = document.createElement('table');
                table.className = 'files-table';

                const thead = document.createElement('thead');
                thead.innerHTML = `
                    <tr>
                        <th>파일명</th>
                        <th>유형</th>
                        <th>작업</th>
                    </tr>
                `;
                table.appendChild(thead);

                const tbody = document.createElement('tbody');
                filteredFiles.forEach(file => {
                    const row = document.createElement('tr');
                    // GitHub Pages 경로에 맞게 URL 생성 (링크용)
                    const fileUrl = getFileUrl(file.path);
                    // 전체 URL 생성 (복사용)
                    const fullUrl = getFullUrl(file.path);
                    row.innerHTML = `
                        <td>
                            <a href="${fileUrl}" class="file-link" target="_blank">
                                <span class="file-icon">${getFileIcon(file.type)}</span>
                                ${file.name}
                            </a>
                        </td>
                        <td>
                            <span class="file-type ${file.type}">${file.type.toUpperCase()}</span>
                        </td>
                        <td>
                            <button class="copy-btn" data-url="${fullUrl.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" title="링크 복사">
                                📋 복사
                            </button>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
                table.appendChild(tbody);
                
                // 복사 버튼 이벤트 리스너 추가
                tbody.querySelectorAll('.copy-btn').forEach(btn => {
                    btn.addEventListener('click', async (e) => {
                        e.stopPropagation();
                        const url = btn.getAttribute('data-url');
                        await copyToClipboard(url, btn);
                    });
                });
                
                examGroup.appendChild(table);
                categorySection.appendChild(examGroup);
            });

            if (categorySection.children.length > 1) { // category-title 제외하고 내용이 있으면
                contentArea.appendChild(categorySection);
            }
        });
    });

    if (!hasContent) {
        contentArea.innerHTML = '<div class="empty-message">선택한 조건에 맞는 파일이 없습니다.</div>';
    }
}

