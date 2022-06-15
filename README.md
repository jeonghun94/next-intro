# Next.js Learn Restart!!

## Page

1. 페이지 기본 / 경로는 index만 가능 다른건 파일명으로 경로를 찾아감
2. 무조건 export default로 시작 해야함

## Router

1. a태그 혼자만 사용 불가 Nextjs의 Link 사용 해야함
2. 단 Link에는 href만 적용 스타일 등등은 a태그에만 사용해야함

## Css, JSX

1. 모듈 파일로 만들어서 사용 가능함 -> imoprt styles from .... -> style.active
2. 단 모듈은 파일을 더 만들어야 해서 비추
3. 그 대안이 jsx 이며 <script jsx>{``}</script>로 가능 옵션으로 global이 있음

## \_app.js

1. 앱이 실행되기전 불러올수 있는게 있음
2. 공통 컴포넌트나, css, jsx등
