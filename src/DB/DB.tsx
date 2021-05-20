import {IUser,IProject} from "../App"

export const MockProjects:IProject[] = [
  {
    _id: "36565163132",
    name: "Project ass",
    status: "todo",
    dateStarted: "now",
    users: [{ _id: "1561584213" }, { _id: "1535453424" }, { _id: "1322897527" }],
  },
  {
    _id: "4524532445241",
    name: "Project peepee",
    status: "done",
    dateStarted: "later",
    users: [{ _id: "1561584213" }, { _id: "1535453424" }],
  },
  {
    _id: "453242104205",
    name: "Project poopoo",
    status: "doing",
    dateStarted: "before",
    users: [{ _id: "1322897527" }],
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
