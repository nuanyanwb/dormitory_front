/**
 * 用户类别
 */
export type UserType = {
    id: number;
    username: string;
    name: string;
    age: number;
    gender: number;
    avatar?: string;
    phone: string;
    email: string;
    major: string;
    description?: string;
    status: number;
    tags: string[];
    role: string;
    createTime: Date;

}