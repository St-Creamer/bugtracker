import {IUser,IProject, IBug} from "../App"

export const MockProjects:IProject[] = [
  {
    _id: "36565163132",
    name: "Project coke",
    status: "todo",
    dateStarted: "now",
    users: [{ _id: "1561584213" }, { _id: "1535453424" }, { _id: "1322897527" }],
    bugs: [{ _id: "4523123849345" }, { _id: "345844245384" }, { _id: "423232347748787" },{ _id:"786786786424241"}],
  },
  {
    _id: "4524532445241",
    name: "Project pepsi",
    status: "done",
    dateStarted: "later",
    users: [{ _id: "1561584213" }, { _id: "1535453424" }],
    bugs: [{ _id: "345844245384" }, { _id: "423232347748787" },{ _id:"786786786424241"}],

  },
  {
    _id: "453242104205",
    name: "Project 7up",
    status: "doing",
    dateStarted: "before",
    users: [{ _id: "1322897527" }],
    bugs: [{ _id: "4523123849345" }],
  },
];

export const members:IUser[]= [
    {
        _id:"1561584213",
        name:"Banana",
        password:"bananaman",
        email:"banana@man.com",
        role:"member",
        projects:[
            {_id:"36565163132"},
            {_id:"4524532445241"}
        ]
    },
    {
        _id:"1535453424",
        name:"Lizard",
        password:"People",
        email:"Lizard@People.com",
        role:"admin",
        projects:[
            {_id:"453242104205"},
            {_id:"453242104205"}
        ]
    },
    {
        _id:"1322897527",
        name:"Smart",
        password:"person",
        email:"smart@person.com",
        role:"member",
        projects:[
            {_id:"4524532445241"}
        ]
    }
]


export const bugs:IBug[] = [
  {
    _id: "4523123849345",
    name: "bugsbunny",
    priority: "1",
    dateStarted: "22/12/2022",
    status: "doing",
    lastUpdated: "23/12/2222",
    author: { _id: "1561584213" },
  },
  {
    _id: "345844245384",
    name: "bzzzzzzz",
    priority: "2",
    dateStarted: "20/10/2020",
    status: "todo",
    lastUpdated: "20/10/2020",
    author: { _id: "1535453424" },
  },
  {
    _id: "423232347748787",
    name: "weeeeeeeee",
    priority: "5",
    dateStarted: "22/12/2022",
    status: "done",
    lastUpdated: "23/12/2222",
    author: { _id: "1322897527" },
  },
  {
    _id: "786786786424241",
    name: "im hungry",
    priority: "3",
    dateStarted: "22/12/2022",
    status: "doing",
    lastUpdated: "23/12/2222",
    author: { _id: "1322897527" },
  }
];