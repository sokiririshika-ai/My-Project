function login(){
  let u=document.getElementById("username").value;
  let p=document.getElementById("password").value;
  if((u=="faculty@edunova.ai" && p=="faculty123") || (u=="hod@edunova.ai" && p=="hod123")){
    document.getElementById("loginPage").style.display="none";
    document.getElementById("dashboard").style.display="block";
    drawGraphs();
  } else {
    alert("Invalid Credentials! Use faculty@edunova.ai / faculty123");
  }
}








function logout(){ location.reload(); }

const students=[
{name:"Rahul Sharma",dept:"CSE",cgpa:5.8,att:58,back:3,lms:40,apt:35,coding:30},
{name:"Priya Patel",dept:"AIML",cgpa:9.1,att:92,back:0,lms:95,apt:88,coding:90},
{name:"Amit Kumar",dept:"AIDS",cgpa:6.2,att:65,back:2,lms:55,apt:45,coding:42},
{name:"Sneha Reddy",dept:"CSE",cgpa:8.5,att:88,back:0,lms:88,apt:80,coding:82},
{name:"Kiran Varma",dept:"AIML",cgpa:7.1,att:72,back:1,lms:65,apt:60,coding:58},
{name:"Ananya Iyer",dept:"AIDS",cgpa:9.4,att:95,back:0,lms:96,apt:92,coding:94},
{name:"Vikram Singh",dept:"CSE",cgpa:5.5,att:52,back:4,lms:35,apt:30,coding:28},
{name:"Divya Nair",dept:"AIML",cgpa:7.8,att:80,back:0,lms:78,apt:72,coding:70},
{name:"Arjun Mehta",dept:"AIDS",cgpa:6.5,att:68,back:2,lms:58,apt:50,coding:48},
{name:"Kavya Sri",dept:"CSE",cgpa:8.9,att:90,back:0,lms:90,apt:85,coding:86},
{name:"Rohan Das",dept:"AIML",cgpa:6.0,att:60,back:3,lms:45,apt:40,coding:38},
{name:"Meera Joshi",dept:"AIDS",cgpa:7.4,att:76,back:1,lms:70,apt:65,coding:63},
{name:"Sandeep Rao",dept:"CSE",cgpa:8.2,att:85,back:0,lms:84,apt:78,coding:79},
{name:"Nithya K",dept:"AIML",cgpa:5.9,att:55,back:3,lms:42,apt:38,coding:35},
{name:"Aditya Verma",dept:"AIDS",cgpa:7.0,att:70,back:1,lms:62,apt:58,coding:55},
{name:"Pooja Hegde",dept:"CSE",cgpa:9.0,att:93,back:0,lms:92,apt:89,coding:90},
{name:"Karthik R",dept:"AIDS",cgpa:8.0,att:82,back:0,lms:80,apt:75,coding:74},
{name:"Neha Kapoor",dept:"CSE",cgpa:6.3,att:63,back:2,lms:50,apt:44,coding:42},
{name:"Ravi Teja",dept:"AIML",cgpa:7.2,att:74,back:1,lms:68,apt:62,coding:60},
{name:"Sruthi V",dept:"AIDS",cgpa:9.2,att:94,back:0,lms:94,apt:90,coding:91},
{name:"Akash Yadav",dept:"CSE",cgpa:5.6,att:54,back:3,lms:36,apt:31,coding:29},
{name:"Deepika R",dept:"AIML",cgpa:8.4,att:87,back:0,lms:85,apt:81,coding:80},
{name:"Naveen Kumar",dept:"AIDS",cgpa:6.9,att:69,back:1,lms:61,apt:55,coding:53},
{name:"Harini S",dept:"CSE",cgpa:7.9,att:81,back:0,lms:79,apt:73,coding:71},
{name:"Imran Khan",dept:"AIML",cgpa:6.1,att:61,back:2,lms:48,apt:42,coding:40},
{name:"Lakshmi P",dept:"AIDS",cgpa:8.8,att:91,back:0,lms:89,apt:86,coding:87},
{name:"Suraj Patil",dept:"CSE",cgpa:7.3,att:73,back:1,lms:67,apt:63,coding:61},
{name:"Rishika madiri",dept:"AIML",cgpa:5.8,att:57,back:3,lms:41,apt:36,coding:33},
{name:"Vamsi Krishna",dept:"AIDS",cgpa:8.1,att:84,back:0,lms:82,apt:77,coding:76},
{name:"Aishwarya R",dept:"CSE",cgpa:7.5,att:77,back:1,lms:71,apt:66,coding:64},
{name:"Mohit Sharma",dept:"AIML",cgpa:6.4,att:64,back:2,lms:52,apt:46,coding:44},
{name:"Keerthi M",dept:"AIDS",cgpa:9.3,att:96,back:0,lms:97,apt:93,coding:94},
{name:"Pranav N",dept:"CSE",cgpa:7.7,att:79,back:0,lms:76,apt:70,coding:68},
{name:"Sowmya T",dept:"AIML",cgpa:6.6,att:66,back:2,lms:57,apt:49,coding:47},
{name:"Ashwin Raj",dept:"AIDS",cgpa:5.9,att:56,back:4,lms:39,apt:34,coding:31},
{name:"Tanvi Desai",dept:"CSE",cgpa:8.6,att:88,back:0,lms:86,apt:82,coding:83},
{name:"Yashwanth G",dept:"AIML",cgpa:7.0,att:71,back:1,lms:63,apt:59,coding:57},
{name:"Bhavya Sri",dept:"AIDS",cgpa:6.2,att:62,back:3,lms:47,apt:41,coding:39},
{name:"Lokesh B",dept:"CSE",cgpa:8.3,att:86,back:0,lms:84,apt:79,coding:78},
{name:"Chandana K",dept:"AIML",cgpa:7.4,att:75,back:1,lms:69,apt:64,coding:62},
{name:"Farhan Ali",dept:"AIDS",cgpa:5.7,att:53,back:3,lms:34,apt:29,coding:27},
{name:"Geetha Rani",dept:"CSE",cgpa:9.0,att:92,back:0,lms:91,apt:87,coding:88},
{name:"Harish V",dept:"AIML",cgpa:6.7,att:68,back:1,lms:59,apt:52,coding:50},
{name:"Ishita sunnam",dept:"AIDS",cgpa:8.9,att:90,back:0,lms:90,apt:84,coding:85},
{name:"Jayanth M",dept:"CSE",cgpa:6.0,att:60,back:2,lms:46,apt:39,coding:37},
{name:"Vaishnavi",dept:"AIML",cgpa:7.8,att:80,back:0,lms:78,apt:72,coding:70}
];

let high=0,med=0,low=0,totalScore=0,champ=0,prom=0,riskL=0,crit=0;
const table=document.getElementById("studentTable");
students.forEach(s=>{
  let score=Math.round((s.cgpa*10 + s.att + s.lms + s.apt + s.coding)/5 - (s.back*5));
  if(score>95)score=95; if(score<20)score=22;
  totalScore+=score;
  let risk,seg,color;
  if(score<45){risk="High";color="red";high++;}else if(score<70){risk="Medium";color="orange";med++;}else{risk="Low";color="green";low++;}
  if(score>80){seg="Champions";champ++;}else if(score>=60){seg="Promising";prom++;}else if(score>=40){seg="At-Risk Learners";riskL++;}else{seg="Critical";crit++;}
  table.innerHTML+=`<tr><td>${s.name}</td><td>${s.dept}</td><td>${s.cgpa}</td><td>${s.att}%</td><td>${s.back}</td><td>${s.lms}%</td><td>${s.apt}</td><td>${s.coding}</td><td><b>${score}</b></td><td style="color:${color};font-weight:bold">${risk}</td><td>${seg}</td></tr>`;
});
document.getElementById("highCount").innerText=high;
document.getElementById("medCount").innerText=med;
document.getElementById("lowCount").innerText=low;
document.getElementById("avgScore").innerText=Math.round(totalScore/students.length);
document.getElementById("champCount").innerText=champ;
document.getElementById("promCount").innerText=prom;
document.getElementById("riskLearnCount").innerText=riskL;
document.getElementById("critCount").innerText=crit;
document.getElementById("suggestHigh").innerHTML = `
<b>${high} students are in danger zone. Do this immediately:</b><br><br>
1. <b>Daily Mentoring:</b> Prathi student ki oka faculty mentor ni assign chesi, daily attendance & study check cheyali.<br>
2. <b>Remedial Classes:</b> CGPA & backlogs ekkuva unna subjects ki separate slow-learner classes pettali.<br>
3. <b>Parent Counselling:</b> Parents ki call chesi attendance, performance gurinchi cheppi support adagali.<br>
4. <b>7-Day Study Plan:</b> LMS lo daily chinna tasks, aptitude practice ichi progress track cheyali.
`;
document.getElementById("suggestMed").innerText = med + " students need weekly doubt sessions, LMS activity push & aptitude practice tests.";
document.getElementById("suggestLow").innerText = low + " students are safe. Give them advanced coding challenges, hackathons & placement training.";
function filterTable(){
  let input=document.getElementById("search").value.toLowerCase();
  let dept=document.getElementById("deptFilter").value;
  let rows=document.querySelectorAll("#studentTable tr");
  rows.forEach(r=>{
    let txt=r.innerText.toLowerCase();
    r.style.display=(txt.includes(input) && (dept==""||txt.includes(dept.toLowerCase())))?"":"none";
  });
}

function drawGraphs(){
  new Chart(document.getElementById('pieChart'),{
    type:'pie',
    data:{labels:['High','Medium','Low'],datasets:[{data:[high,med,low],backgroundColor:['red','orange','green']}]}
  });
  new Chart(document.getElementById('barChart'),{
    type:'bar',
    data:{labels:['High','Medium','Low'],datasets:[{label:'Students',data:[high,med,low],backgroundColor:'blue'}]},
    options:{scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}
  });
}
function displayStudents(list){
  let rows = "";
  list.forEach(s=>{
    let score = Math.round((s.lms + s.apt + s.coding)/3);
    rows += `<tr>
      <td>${s.name}</td><td>${s.dept}</td><td>${s.cgpa}</td>
      <td>${s.att}</td><td>${s.back}</td><td>${s.lms}</td>
      <td>${s.apt}</td><td>${s.coding}</td><td>${score}</td>
      <td>${getRisk(s)}</td>
    </tr>`;
  });
  document.getElementById("studentTable").innerHTML = rows;
}
function getRisk(s){
  if(s.att < 70 || s.back >= 2 || s.cgpa < 6.5) return "High";
  if(s.att < 85 || s.back == 1 || s.cgpa < 7.5) return "Medium";
  return "Low";
}
  async function loadCategory(cat){
  let res = await fetch('https://472c0e20e2d6-0af41d78-5300.ws6.app/proxy/5000/students');
  let list = await res.json();

  list.sort((a,b) => ((b.lms+b.apt+b.coding)/3) - ((a.lms+a.apt+a.coding)/3));

  if(cat=="Champions" || cat=="Low") list = list.slice(0, 15);
  else if(cat=="Promising" || cat=="Medium") list = list.slice(15, 35);
  else if(cat=="Critical" || cat=="At-Risk" || cat=="High") list = list.slice(35, 50);
  else if(cat=="AvgScore") list = list;

  document.getElementById("tableTitle").innerText = cat + " Students";
  document.getElementById("resultCount").innerText = "Total: " + list.length + " Students";
  displayStudents(list);
}
  
async function filterRisk(risk){
  let res = await fetch('https://472c0e20e2d6-0af41d78-5306.ws6.ap-codesphere-1.amazonaws.com/students');
  let list = await res.json();
  let filtered = list.filter(s => getRisk(s) === risk);
  document.getElementById("tableTitle").innerText = risk + " Risk Students";
  document.getElementById("resultCount").innerText = "Total: " + filtered.length;
  displayStudents(filtered);
}
function loadCategory(cat) {
  let filtered = students;

  if (cat === 'High' || cat === 'Medium' || cat === 'Low') {
    filtered = students.filter(s => getRisk(s) === cat);
  } 
  else if (cat === 'AvgScore') {
    filtered = [...students].sort((a, b) => {
      let avgA = (a.lms + a.apt + a.coding) / 3;
      let avgB = (b.lms + b.apt + b.coding) / 3;
      return avgB - avgA;
    });
  }
  else if (cat === 'Champions') {
    filtered = students.filter(s => (s.lms + s.apt + s.coding) / 3 >= 85);
  }
  else if (cat === 'Promising') {
    filtered = students.filter(s => {
      let avg = (s.lms + s.apt + s.coding) / 3;
      return avg >= 65 && avg < 85;
    });
  }
  else if (cat === 'At Risk') {
    filtered = students.filter(s => getRisk(s) === 'Medium');
  }
  else if (cat === 'Critical') {
    filtered = students.filter(s => getRisk(s) === 'High');
  }

  document.getElementById('tableTitle').innerText = cat + " Students";
  displayStudents(filtered);
}
window.login = login;
window.logout = logout;
window.filterTable = filterTable;
window.loadCategory = loadCategory;
// Backend Connection - Andari ni save chesthundi
async function loadFromBackend() {
  try {
    const res = await fetch('/proxy/5000/students');
    const data = await res.json();
    
    if (false) {
      students.splice(0, students.length, ...data);
      console.log('Backend data loaded');
    } else {
      await fetch('/proxy/5000/students/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(students)
      });
      console.log('All local students saved to backend');
    }
    if (typeof displayStudents === 'function') displayStudents(students);
    if (typeof loadCategory === 'function') loadCategory('All');
  } catch (e) {
    console.log('Backend offline, using local data');
  }
}
loadFromBackend();