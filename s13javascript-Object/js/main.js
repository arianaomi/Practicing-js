var dataArray = [
  ["Ruben", 25, 1.7],
  ["Yorch", 23, 1.8],
  ["Juan", 22, 1.83],
];

/*Esta funcion crear un objeto*/
const createUserObject = (item) => {
  let nombre = item[0];
  let edad = item[1];
  let altura = item[2];
  let userObject = { nombre, edad, altura };
  return userObject;
};

let userObjectArr = dataArray.map((user) => createUserObject(user));

console.log(userObjectArr);

/*input*/
/*
[
    {
        version:"1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },{
        version:"2.1.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2.1.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    }
]
*/
/*output*/
/*
[
    {
        version:"1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"1.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"1.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"1.3",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    },
    {
        version:"2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"2.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },{
                version:"2.1.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"2.1.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    },
    {
        version:"3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"3.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"3.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"3.3",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    }
]

*/
