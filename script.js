  // Resume

  {
    "name"; "Muthu Krishnan",
    "contact"; {
      "email"; "Krish31150183@gmail.com",
      "phone"; "+91 9710490771",
      "address"; "No.3M,G1, Supreme Amor Basil avanue main road sithalapakkam chennai-600126"
    };
    "summary"; 'Experienced in fiber design roles - FTTH , FTTP'
    "education"; [
      {
        "degree": "Master of Commerce",
        "Univerristy": "University of Madras",
        "graduation_year": 2020
      }
    ],
    "experience"; [
      {
        "position": "Network processing new associate",
        "company": "Accenture india pvt ltd.",
        "start_date": "2020-11-19",
        "end_date": "NA",
        "responsibilities": [
          "Responsible to design the client specified area with using of existing infrastruture.",
          "Collaborated with cross-functional teams to deliver high-quality design production.",
        ]
      },
    ],
  
    "skills"; [
      "PNI",
      "Smallworld",
      "Problem Solving",
      "Team Collaboration"
    ],
    "languages"; [
      {
        "language": "English",
        "proficiency": "Intermediate",
      },
      {
        "language": "Tamil",
        "proficiency": "Expert"
      }
    ],
  ""}

  // for loop function

const json1 = {
    "name": "Muthu Krishnan",
    "age": 26
  };
  
  for (let key in json1) {
    console.log(key + ": " + json1[key]);
  }
 // for in loop function
  const json2 = {
    "name": "Muthu Krishnan",
    "age": 26
  };
  
  for (let key in json2) {
    console.log(key + ": " + json2[key]);
  }

  // for of

  const jsonArray = [
    { "name": "Muthu Krishnan", "age": 26,"Education": "M.com" },

  ];
  
  for (let obj of jsonArray) {
    for (let key in obj) {
      console.log(key + ": " + obj[key]);
    }
  }

  // For each

  const jsonArray2 = [
    { "name": "John", "age": 25 , "Education":"M.com"},
  
  ];
  
  jsonArray.forEach(obj => {
    for (let key in obj) {
      console.log(key + ": " + obj[key]);
    }
  });
