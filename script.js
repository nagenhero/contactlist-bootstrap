const slider = document.getElementById("slider");
const searchInputField =document.getElementById("search");
const apiURL= "https://randomuser.me/api?results=10";
console.log(slider);
let contactList = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Luis",
      last: "Ruiz",
    },
    location: {
      street: {
        number: 1699,
        name: "Calle de Atocha",
      },
      city: "Pozuelo de Alarcón",
      state: "Comunidad de Madrid",
      country: "Spain",
      postcode: 88207,
      coordinates: {
        latitude: "-33.3630",
        longitude: "-68.7849",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "luis.ruiz@example.com",
    login: {
      uuid: "bd326b8d-5c70-49ac-9bb2-ad84342d1925",
      username: "silvercat672",
      password: "ralph",
      salt: "wVCdJOVM",
      md5: "ccf490c0dabff5d0a578b66e111d3d88",
      sha1: "7ebfc6529606041d2d3006df563cdb4eb119858b",
      sha256:
        "4da03e138b10fd59239ad6370c9713fca7b78ce009fd4f5be8cb1ea5368ef1c8",
    },
    dob: {
      date: "1993-07-17T08:01:30.382Z",
      age: 31,
    },
    registered: {
      date: "2012-12-04T18:06:00.061Z",
      age: 11,
    },
    phone: "923-181-613",
    cell: "645-318-126",
    id: {
      name: "DNI",
      value: "16060036-L",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Taylor",
      last: "Rodriquez",
    },
    location: {
      street: {
        number: 4196,
        name: "Forest Ln",
      },
      city: "Moreno Valley",
      state: "Indiana",
      country: "United States",
      postcode: 15641,
      coordinates: {
        latitude: "-16.1319",
        longitude: "7.1350",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "taylor.rodriquez@example.com",
    login: {
      uuid: "42d14a29-1a10-4596-baec-b564941f82dd",
      username: "purpleostrich640",
      password: "richie",
      salt: "7HkY2jO7",
      md5: "f7549e018570f9b4d87444195994a6b0",
      sha1: "9a21e42cc9c8e0eb6d51bc55cc559103f25bed08",
      sha256:
        "30c5f4021fa31f388617147e289f9408c428b1dbaa7088d8eda4aec455d464c1",
    },
    dob: {
      date: "1968-09-25T02:58:18.826Z",
      age: 56,
    },
    registered: {
      date: "2006-03-07T19:28:37.524Z",
      age: 18,
    },
    phone: "(948) 435-7971",
    cell: "(297) 242-9148",
    id: {
      name: "SSN",
      value: "111-23-2595",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
    },
    nat: "US",
  },
];
slider.addEventListener("change", (e) => {
  console.log(e.target.value);
  const { value } = e.target;

  if (value < 70) {
    slider.value = 0;
  } else {
    playAudio();
    displayAppScreen();
  }
});

searchInputField.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  // const { value } = e.target;
  //check if the input filed is in th user full name
  const filterContactList= contactList.filter((item)=>
  {
    const fullName=item.name.first.toLowerCase() + "" + item.name.last.toLowerCase();
    return fullName.includes(e.target.value.toLowerCase());


  });
  console.log(filterContactList);
  displayContactList(filterContactList);
});

const displayScreen = (screenName) => {
  const screens = document.getElementsByClassName("screen");
  console.log(screens);

  for (screen of screens) {
    screen.style.display = "none";
  }
  const mainScreen = document.getElementById(screenName);
  mainScreen.style.display = "block";
};

const displayAppScreen = () => {
  displayScreen("appScreen");
};



const playAudio =()=> { 
  var x = document.getElementById("myAudio");
  console.log(x);
  x.play();
}

const playAudio1 = () => {
  var y = document.getElementById("myAudio1");
  console.log(y);
  y.play();
};

const pauseAudio1 = () => {
  var y = document.getElementById("myAudio1");
  console.log(y);
  y.pause();
};


const displayContactList =(userList)=>
{
  const userNumber =userList.length;
  const userCountElement=document.getElementById("userCount");

  userCountElement.innerText=userNumber;
  //update the contact accordain
  const cA = document.getElementById("contactAccordain");
  cA.innerHTML="";

  userList.map((item,index)=>
  {
    console.log(item);
    const accItem = `
      <div class="accordion-item h-10">
    <h2 class="accordion-header">
      <button class="accordion-button "  type="button" data-bs-toggle="collapse" data-bs-target="#contact-${index}" aria-expanded="true" aria-controls="collapseOne">
        <img src="${item.picture.thumbnail}" width="50px" height="50px" class="rounded-circle">
        <div class="d-flex flex-column justify-content-between m-2">
            <div> ${item.name.title} ${item.name.first} ${item.name.last}</div>
            
        
             <small>  ${item.location.postcode} ${item.location.state}</small>
            
           </div>
      </button>
    </h2>
    <div id="contact-${index}" class="accordion-collapse collapse " data-bs-parent="#contactAccordain">
      <div class="accordion-body d-flex  flex-column justify-content-center align-items-center">
        <!-- iamges center -->
        <div>
            <img src="${item.picture.large}" width="80px" height="80px" class="rounded-circle">
        </div>
        <div class="d-flex mt-3 flex-column justify-content-center ">
            <div>
                <i class="bi bi-person-lines-fill"></i>
                <span>${item.name.title}${item.name.first} ${item.name.last}</span>
            </div>
            <div>
                <i class="bi bi-phone"></i>
                <span>${item.cell}</span>
            </div>
            <div>
                <i class="bi bi-envelope"></i>
                <span>${item.email}/span>
            </div>
            <div>
                <i class="bi bi-geo-alt"></i>
                <span>${item.location.postcode}</span>
            </div>
            


        </div>
       
      </div>
    </div>
  </div>
  
           `;
    cA.innerHTML += accItem;


  });

}

// displayScreen("contactListScreen");
// displayContactList(contactList);
const displayContactListScreen= async()=>
{
  //display contact list screren
  displayScreen("contactListScreen");
  //before fetching data
  //1.show spinner
  const a= document.getElementById("spinner");
  a.style.display= "block";
   const b = document.getElementById("contact-list");
   b.style.display="none";

  //hide contact list
  //
  //fetch contact data
  const response= await fetch(apiURL);
  console.log("response data",response);
  const data= await response.json();
  console.log("data json dispaluyu", data);
  contactList= data.results;
  a.style.display = "none";
   b.style.display = "block";


  
  
  //populate contact list

  displayContactList(contactList);
}
