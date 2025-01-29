# My Restaurants
<br>

공공데이터인 서울시 식당 데이터와 조합하여 데이터로 제공된 모든 식당을 지도에 표시하고, 추가로 자신이 원하는 식당 데이터를 추가할 수 있는 서비스입니다.

---


## 프로젝트 소개


---
## 개발자 소개

<br>

* 안상문 : 프론트엔드 /  tkdans312@gmail.com, kirianir@naver.com

<br>

## 기술 스택


### Development

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) <br>
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

### Enviornment

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
 ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
 ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


### Config

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

<br>

## 주요 기능

* 카카오 맵 API를 이용하여 각 맛집 위치 정보 제공
* 만약 데이터에 없는 맛집이라면 직접 위치 정보를 제공하여 추가 가능
* 각 맛집의 리뷰를 댓글로 남겨 맛집 평가 가능
* 맛집 전체 리스트 검색 기능

<br>

## 실행 결과

https://my-restaurants.vercel.app

<br>

## 개선점

* ***Firebase 에서 Prisma + Supabase로*** : 성능의 개선을 바랬다기보다는 신입채용을 하는 회사들 중에 Sanity와 같은 CMS로 구축해본 적이 있는지 라는 사항을 보고 NoSQL을 사용하는 firebase가 아닌 Sanity처럼 직접 스키마를 작성하는 DB를 사용해보기 위해 교체하였다.
<br>

* ***무한 스크롤에서 페이지네이션으로*** : 이 역시 성능의 개선보다는 항상 다수의 데이터를 무한 스크롤로 처리해왔는데, 이번 맛집 데이터에는 1000개 이상의 정말 수 많은 맛집이 있는데 원하는 것을 찾을 때 까지 스크롤을 한다거나, 머릿속에 기억해놨던 가게를 찾기 위해 스크롤을 다시 위로 올리는 행위가 굉장히 불편했기때문에 차라리 페이지네이션이 낫다고 생각하여 페이지네이션으로 처리

<br>

## 후기

예전 인스타그램 프로젝트에서 Sanity로 스키마를 작성한 이후 처음 스키마를 작성해봤는데, 어떻게 스키마를 작성해야할지 고민하는 과정이 어려웠지만 재밌었다.<br>
사실 나는 모바일 앱을 사용할 때도 항상 무한 스크롤보단 페이지네이션을 선호했는데 이번에 구현할 기회가 생겨서 많이 고민하며 구현해보았다. <br>
그리고 이때까지 Next.js 앱을 만들며 항상 App router 로 작성했는데 혹시나 하는 마음에 경험에 없던 page router 로 직접 작성해보았다. <br>
확실히 App router 가 작성에는 편하긴 했지만 오히려 getStaticProps, getServerSideProps 등 개발자가 직접 하나하나 지정해서 사용하는 page router 가 더 직관적이라 괜찮았던 것 같다.
