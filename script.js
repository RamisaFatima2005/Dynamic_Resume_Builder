"use strict";
let resumeImage = document.getElementById("resumeImage");
let inputImage = document.getElementById("inputImage");
inputImage.onchange = () => {
    if (inputImage.files && inputImage.files[0]) {
        resumeImage.src = URL.createObjectURL(inputImage.files[0]);
    }
};
let GenerateResumeButton = document.getElementById("genrateBtn");
const allInputsField = document.querySelectorAll("input[required]");
const checkAllInput = () => {
    let IsValid = true;
    const allFields = document.querySelectorAll("input[required]");
    allFields.forEach((field) => {
        if (field.value.trim() === "") {
            IsValid = false;
            field.classList.add("error");
        }
        else {
            field.classList.remove("error");
            // field.classList.add('greenClass')
        }
    });
    GenerateResumeButton.disabled = !IsValid;
};
let firstUserName = document.getElementById("firstUserName");
let lastUserName = document.getElementById("lastUserName");
let profession = document.getElementById("profession");
let userPhone = document.getElementById("userPhone");
let userEmail = document.getElementById("userEmail");
let userAddress = document.getElementById("userAddress");
let userID = document.getElementById("userID");

let inputfName = document.getElementById("inputfName");
let inputlName = document.getElementById("inputlName");
let inputProfession = document.getElementById("inputProfession");
let inputNumber = document.getElementById("inputNumber");
let inputEmail = document.getElementById("inputEmail");
let inputCnic = document.getElementById("inputCnic");
let inputAddress = document.getElementById("inputAddress");

inputCnic.addEventListener("keypress", (event) => {
    const char = event.key;
    if (!/[0-9-]/.test(char)) {
        event.preventDefault();
    }
});

const AddMoreEducations = () => {
    const AddMoreEdu = document.getElementsByClassName("Education-Section")[0];
    let WrapperDiv = document.createElement("div");
    WrapperDiv.classList.add("inputWrape");
    let inputOne = document.createElement("input");
    inputOne.classList.add("EducationTitle");
    inputOne.setAttribute("placeholder", "Field of study (e.g.,Computer Science)");
    inputOne.setAttribute("type", "text");
    let inputTwo = document.createElement("input");
    inputTwo.classList.add("EducationDetail");
    inputTwo.setAttribute("placeholder", "Degree, institution,and year");
    inputTwo.setAttribute("type", "text");
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreEdu.appendChild(WrapperDiv);
};

const AddMoreExperience = () => {
    const AddMoreExp = document.getElementsByClassName("Experience-Section")[0];
    let WrapperDiv = document.createElement("div");
    WrapperDiv.classList.add("inputWrape");
    let inputOne = document.createElement("input");
    inputOne.classList.add("Experience-title");
    inputOne.setAttribute("placeholder", "Job Title (e.g., Software Engineer)");
    inputOne.setAttribute("type", "text");
    let inputTwo = document.createElement("input");
    inputTwo.classList.add("Experience-detail");
    inputTwo.setAttribute("placeholder", "Company, years, key responsibilities");
    inputTwo.setAttribute("type", "text");
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreExp.appendChild(WrapperDiv);
};

const AddMoreSkills = () => {
    const AddMoreSkill = document.getElementsByClassName("Skills-Section")[0];
    let inputOne = document.createElement("input");
    inputOne.classList.add("Skills-class");
    inputOne.setAttribute("placeholder", "Skill/Expertise (e.g.,HTML,CSS) Enter a single skill here");
    inputOne.setAttribute("type", "text");
    AddMoreSkill.appendChild(inputOne);
};

let newUlDiv = document.createElement("ul"); //yahan mene new ul create kia hai
newUlDiv.classList.add("education-div");

let newUlDiv2 = document.createElement("ul"); //yahan mene new ul create kia hai
newUlDiv.classList.add("experience-div");

const GenerateResumeFunction = (e) => {
    e.preventDefault();
    console.log("running");
  
    firstUserName.innerText = inputfName.value;
    lastUserName.innerText = inputlName.value;
    profession.innerText = inputProfession.value;
    userPhone.innerText = inputNumber.value;
    userEmail.innerText = inputEmail.value;
    userID.innerText = inputCnic.value;
    console.log(inputCnic.value);
    userAddress.innerText = inputAddress.value;
    const educationsTitle = document.getElementsByClassName("EducationTitle");
    const educationsDetail = document.getElementsByClassName("EducationDetail");
    let TitleArray = [...educationsTitle];
    let DetailArray = [...educationsDetail];
    const listItems = TitleArray.map((title, index) => {
        const detail = DetailArray[index] ? DetailArray[index].value : "";
        return `
        <li class="title">${title.value}</li>
        <li class="detail">${detail}</li>
      `;
    }).join("");
    if (newUlDiv) {
        newUlDiv.innerHTML = listItems;
    }
    let educationContainer = document.getElementById("education-container");
    educationContainer.appendChild(newUlDiv);
    
    const jobTitle = document.getElementsByClassName("Experience-title");
    const jobDetail = document.getElementsByClassName("Experience-detail");
    let jobTitleArray = [...jobTitle];
    let jobDetailArray = [...jobDetail];
    const listItemsjob = jobTitleArray
        .map((title, index) => {
        const detail = jobDetailArray[index] ? jobDetailArray[index].value : "";
        return `
        <li class="title">${title.value}</li>
        <li class="detail">${detail}</li>
      `;
    })
        .join("");
    if (newUlDiv2) {
        newUlDiv2.innerHTML = listItemsjob;
    }
    let experiencecontainer = document.getElementById("experience-container");
    experiencecontainer.appendChild(newUlDiv2);
    
    const skills = document.getElementsByClassName("Skills-class");
    let skillsArray = [...skills];
    const skillsLoop = skillsArray
        .map((title, index) => {
        return `
        <li>${title.value}</li>
      `;
    })
        .join("");
    let skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = skillsLoop;
    }
   
    const FormContainer = document.getElementById("container-form");
    const ResumeContainer = document.getElementById("container-resume");
    FormContainer.style.display = "none";
    ResumeContainer.style.display = "flex";
    
    const languageCheckboxes = document.querySelectorAll('input[name="language"]');
    
    let languageUl = document.getElementById('language-ul');
    languageUl.innerHTML = ''; // List ko clear kar dena pehle
    languageCheckboxes.forEach((li) => {
        if (li.checked) {
            let listItem = `<li class="language">${li.value}</li>`;
            languageUl.insertAdjacentHTML('beforeend', listItem); // Append the checked items
        }
    });
}; 
allInputsField.forEach((input) => {
    input.addEventListener("input", checkAllInput);
});
GenerateResumeButton.disabled = true;
GenerateResumeButton.addEventListener("click", GenerateResumeFunction);

const PrintResume = () => {
    document.title = `${window.location.origin}?name=${encodeURIComponent(firstUserName.innerText)}`;
    window.print();
};

const Edit = () => {
    //Hide container-form input fields if genrated resume button clicked
    const FormContainer = document.getElementById("container-form");
    const ResumeContainer = document.getElementById("container-resume");
    FormContainer.style.display = "flex";
    ResumeContainer.style.display = "none";
};

const Delete = () => {
    window.location.reload();
};

const shareable = () => {
    if (navigator.share) {
        navigator.share({
            title: `${firstUserName.innerText} Resume`,
            text: `Hey ${firstUserName.innerText} here is your shareable link`,
            url: `${window.location.href}/${firstUserName.innerText}/resume`
        })
            .then(() => console.log("Shared successfully!"))
            .catch((error) => console.error("Error sharing:", error));
    }
    else {
        alert("Sharing not supported on this browser.");
    }
};
