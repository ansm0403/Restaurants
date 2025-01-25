export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/user/mypage", "/stores/new", "/stores/:id/edit", "/user/likes"],
};