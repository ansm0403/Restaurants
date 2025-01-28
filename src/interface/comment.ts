import { StoreType } from "./store";

export interface CommentInterface {
    id: number;
    storeId: number;
    userId: number;
    store?: StoreType;
    body: string;
    user?: UserType;
    createdAt: Date;
}

interface UserType {
    id: number;
    email: string;
    name?: string | null;
    image?: string | null;
  }

export interface CommentApiResponse {
    data: CommentInterface[];
    totalPage?: number;
    page?: number;
}