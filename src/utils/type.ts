//user type
export type Users = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  rank: number;
  type: "user" | "admin" | "superAdmin";
  task?: {
    _id: string;
    name: string;
    level: number;
    price: number;
    link: string;
    state: "new" | "review" | "completed";
    media: {
      type: "image" | "video" | "others";
      content: string;
    };
    ispaid: boolean;
    instruction: string;
  }[];
  overallTask: number;
  completedTask: number;
  account: {
    balance: number;
    withdrawer: {
      bankName: string;
      bankAcctNo: number;
    };
  };
  password: string;
};

//Tasks type
export type Tasks = {
  _id?: string;
  name?: string;
  level?: number;
  price?: number;
  socialTarget: string;
  state?: string;
  link?: string;
  media?: {
    type?: "image" | "video" | "others";
    content?: string;
  };
  ispaid?: boolean;
  instruction?: string;
}[];
