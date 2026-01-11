
const donationCauses = [
   {
      id: 1,
      title: "Medical Help for Ayesha",
      shortDesc: "Funds required for urgent surgery",
      fullDesc: "Ayesha is a 9-year-old child suffering from a serious heart condition. Immediate surgery is required to save her life.",
      requiredAmount: 500000,
      collectedAmount: 320000,
      category: "Medical",
      city: "Lahore",
      contactPerson: "Ayesha's Father",
      contactNumber: "03XX-XXXXXXX",
      verified: true,
      urgent: true
   },
   {
      id: 2,
      title: "Education Support for Orphans",
      shortDesc: "Help children continue their education",
      fullDesc: "This cause supports school fees, books, and uniforms for orphan children studying in government schools.",
      requiredAmount: 300000,
      collectedAmount: 180000,
      category: "Education",
      city: "Karachi",
      contactPerson: "Hope Welfare Trust",
      contactNumber: "03XX-XXXXXXX",
      verified: true,
      urgent: false
   },
   {
      id: 3,
      title: "Flood Relief Families",
      shortDesc: "Support families affected by floods",
      fullDesc: "Funds are needed to provide food, shelter, and basic necessities to flood-affected families.",
      requiredAmount: 800000,
      collectedAmount: 610000,
      category: "Emergency",
      city: "Sindh",
      contactPerson: "Relief Camp Head",
      contactNumber: "03XX-XXXXXXX",
      verified: true,
      urgent: true
   }
];


const donationGivers = [
   {
      donorName: "Ali Raza",
      amount: 5000,
      donationType: "One-time",
      date: "2026-01-05",
      message: "May Allah help them"
   },
   {
      donorName: "Anonymous",
      amount: 10000,
      donationType: "Monthly",
      date: "2026-01-06",
      message: ""
   },
   {
      donorName: "Sara Khan",
      amount: 2500,
      donationType: "One-time",
      date: "2026-01-07",
      message: "Happy to support"
   },
   {
      donorName: "Ahmed",
      amount: 8000,
      donationType: "Monthly",
      date: "2026-01-08",
      message: ""
   }
];

const showModalData = (title) => {
   console.log("Cause Title", title);
   const cause = donationCauses.filter(cause => cause.title === title);
   console.log("Cause", cause);

   document.getElementsByClassName("modal-title")[0].innerText = cause.title;


   if (cause[0].verified) {
      console.log("Verified");
      
      document.getElementById("verified").classList.remove("d-none");
   }
   if (cause[0].urgent) {
      console.log("urgent");
      const urgent = document.getElementById("urgent");
      if (urgent.classList.contains("d-none")) {
         urgent.classList.remove("d-none");
         urgent.innerText = "Urgent";
      }
   }
   const category = document.getElementById("category")
   if (cause[0].category == "Medical") {
      category.classList.remove("bg-orange")
      category.classList.remove("text-bg-primary")
      category.classList.add("text-bg-info");
      category.innerText = "Medical";
   } else if (cause[0].category == "Education") {
      category.classList.remove("bg-orange")
      category.classList.remove("text-bg-info");
      category.classList.add("text-bg-primary");
      category.innerText = "Education";
   }
   else if (cause[0].category == "Emergency") {
   
      category.classList.remove("text-bg-primary")
    category.classList.remove("text-bg-info");
      category.classList.add("bg-orange");
      category.innerText = "Emergency";
   }

   document.getElementsByClassName("description")[0].innerText = cause[0].fullDesc;
   document.getElementsByClassName("required")[0].innerText = cause[0].requiredAmount;
   document.getElementsByClassName("collected")[0].innerText = cause[0].collectedAmount;
   document.getElementsByClassName("city")[0].innerText = cause[0].city;
   document.getElementsByClassName("contactPerson")[0].innerText = cause[0].contactPerson;
   document.getElementsByClassName("contactNo")[0].innerText = cause[0].contactNumber;
}

const calculatePercentage = (collected, required) => {
   const percentage = (collected / required) * 100;
   return percentage
}
console.log(calculatePercentage(610000, 800000));
// 500,000</p>
//  <p>Amount Collected: Rs. 320,000