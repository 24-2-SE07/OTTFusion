# OTTFusion

## community page

local storage 사용,
타인의 게시글 확인을 위해 댓글 개수를 하드 코딩했음

데모 시 댓글 test는 user의 게시글에서 확인해야함
좋아요는 해당 사항 Xx으로 다른 게시글에서 test 가능

## search page

콘텐츠 데이터를 배열에 직접 넣었음 <- 필요 시 추가 가능

폴더 추가 버튼 클릭은 가능하나, 추가 기능은 구현해두지 않음
폴더 추가 기능은 main page에서 test할 것.

## main test
폴더 추가 기능 the glory 로 test 예정 
search.js -> the glory selected 상태에서 검색되도록 
OR 
Folder 에서 혹은 Main 에서 삭제 test 후 search test


## scenario
- Main 화면에서 시작
- 기본 채워진 하트 : 오징어 게임, 너의 이름은, 스파이더맨: 노 웨이 홈
1. 계정 테스트
    - 메뉴 클릭
    - 로그아웃 클릭
    - 로그인 클릭
    - 회원가입하기 클릭
    - 비운 상태로 회원가입 클릭
    - 닉네임 : test, 아이디 : testid, password : testpassword123 (아무렇게나 쳐도 상관없음)
    - 회원가입 클릭
    - 비운 상태로 로그인 클릭
    - 로그인 테스트는 회원가입한 아이디로 하지 않음. 이후 테스트를 위해 User로 로그인하기.
    - 아이디 : user, 패스워드 : userpassword (password는 아무렇게나 쳐도 됨)
2. 카테고리 테스트
    - 메뉴 클릭
    - 아무 카테고리나 선택 클릭
3. 커뮤니티 테스트
    - 댓글 0 게시글로 글 확인, 추천 test
    - 댓글 test는 글 쓰기 기능 test 이후 자신이 쓴 게시글에서 
    - 댓글 test 이후 삭제 test
    - 최신 게시글 클릭하면 게시글 카테고리 선택 가능
4. 서치 테스트
    - 태그 클릭 후 검색, 태그 다시 클릭하여 풀기
    - 키워드 e.g.) "더 글로리" -> "글로리" 로 검색 가능
6. 폴더 테스트
    - 언더바에 메인 화면(1번째 아이콘) 클릭
    - main에서 폴더 추가하기 및 콘텐츠 추가하기 테스트
        - 더 글로리 하트 클릭
        - 폴더 추가하기 클릭 
        - "테스트 폴더" 입력
        - 선택 박스 "여름" 클릭
        - 저장 클릭
        - 아무거나 빈 하트 클릭
        - 취소 클릭
    - 언더바에 폴더 화면(4번째 아이콘) 클릭
    - 폴더 추가하기 테스트
        - 폴더 추가하기 클릭
        - "테스트 폴더 2" 입력
    - 
