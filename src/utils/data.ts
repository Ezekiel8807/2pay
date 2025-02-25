//Task type
type Tasks = {
  id: number;
  name: string;
  level: number;
  price: number;
  link: string;
  media: {
    type: "link" | "image" | "video";
    file: string;
  };
  ispaid: boolean;
  instruction: string;
};

//user type
type Users = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  rank: number;
  type: "user" | "admin";
  task?: {
    id: number;
    name: string;
    level: number;
    price: number;
    link: string;
    state: string;
    media: {
      type: "link" | "image" | "video";
      file: string;
    };
    ispaid: boolean;
    instruction: string;
  }[];
  missedTask: number;
  completedTask: number;
  account: {
    balance: number;
    withdrawer: {
      bankName: string;
      bankAcctNo: number;
    };
  };
};

//task data
export const tasks: Tasks[] = [
  {
    id: 1,
    name: "facebook Post",
    level: 2,
    price: 300,
    link: "",
    media: {
      type: "image",
      file: "",
    },
    ispaid: true,
    instruction: "string",
  },
  {
    id: 2,
    name: "Instagram Post",
    level: 3,
    price: 400,
    link: "",
    media: {
      type: "image",
      file: "",
    },
    ispaid: false,
    instruction: "string",
  },
  {
    id: 3,
    name: "facebook Likes",
    level: 1,
    price: 200,
    link: "",
    media: {
      type: "link",
      file: "",
    },
    ispaid: true,
    instruction: "string",
  },
  {
    id: 4,
    name: "facebook Post",
    level: 2,
    price: 300,
    link: "",
    media: {
      type: "image",
      file: "",
    },
    ispaid: false,
    instruction: "string",
  },
  {
    id: 5,
    name: "Youtube subcribe",
    level: 1,
    price: 200,
    link: "",
    media: {
      type: "link",
      file: "",
    },
    ispaid: false,
    instruction: "string",
  },
];

//user data
export const users: Users[] = [
  {
    id: 1,
    firstname: "Ezekiel",
    lastname: "Ayebidun",
    email: "ayeoluwaseyi@gmail.com",
    rank: 5,
    type: "admin",
    task: [
      {
        id: 1,
        name: "facebook Post",
        level: 2,
        price: 300,
        link: "",
        state: "",
        media: {
          type: "video",
          file: "",
        },
        ispaid: true,
        instruction:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, consequatur beatae totam eos quod dolores esse. Eos, id tempora! Vel inventore accusantium a quia ea maiores, non quis culpa assumenda.",
      },
    ],
    missedTask: 0,
    completedTask: 0,
    account: {
      balance: 7000,
      withdrawer: {
        bankName: "fcmb",
        bankAcctNo: 5091361015,
      },
    },
  },
  {
    id: 2,
    firstname: "Pelmi",
    lastname: "Ayebidun",
    email: "ayebidunpelumi@gmail.com",
    rank: 3,
    type: "user",
    task: [],
    missedTask: 0,
    completedTask: 0,
    account: {
      balance: 0,
      withdrawer: {
        bankName: "monipoint",
        bankAcctNo: 5091361015,
      },
    },
  },
];
