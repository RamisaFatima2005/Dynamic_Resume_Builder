let resumeImage: HTMLImageElement = document.getElementById(
    "resumeImage"
  ) as HTMLImageElement;
  let inputImage: HTMLInputElement = document.getElementById(
    "inputImage"
  ) as HTMLInputElement;
  
  inputImage.onchange = () => {
    if (inputImage.files && inputImage.files[0]) {
      resumeImage.src = URL.createObjectURL(inputImage.files[0]);
    }
  };
  
  
  let GenerateResumeButton = document.getElementById(
    "genrateBtn"
  ) as HTMLButtonElement;
  const allInputsField = document.querySelectorAll(
    "input[required]"
  ) as NodeListOf<HTMLInputElement>;
  
  const checkAllInput = () => {
    let IsValid: boolean = true;
    const allFields = document.querySelectorAll(
      "input[required]"
    ) as NodeListOf<HTMLInputElement>;
  
    allFields.forEach((field) => {
      if (field.value.trim() === "") {
        IsValid = false;
        field.classList.add("error");
      } else {
        field.classList.remove("error");
      }
    });
    GenerateResumeButton.disabled = !IsValid;
  };
  
  let firstUserName: HTMLElement = document.getElementById(
    "firstUserName"
  ) as HTMLElement;
  let lastUserName: HTMLElement = document.getElementById(
    "lastUserName"
  ) as HTMLElement;
  let profession: HTMLElement = document.getElementById(
    "profession"
  ) as HTMLElement;
  let userPhone: HTMLElement = document.getElementById(
    "userPhone"
  ) as HTMLElement;
  let userEmail: HTMLElement = document.getElementById(
    "userEmail"
  ) as HTMLElement;
  let userAddress: HTMLElement = document.getElementById(
    "userAddress"
  ) as HTMLElement;
  let userID: HTMLElement = document.getElementById("userID") as HTMLElement;
  
  let inputfName: HTMLInputElement = document.getElementById(
    "inputfName"
  ) as HTMLInputElement;
  let inputlName: HTMLInputElement = document.getElementById(
    "inputlName"
  ) as HTMLInputElement;
  let inputProfession: HTMLInputElement = document.getElementById(
    "inputProfession"
  ) as HTMLInputElement;
  let inputNumber: HTMLInputElement = document.getElementById(
    "inputNumber"
  ) as HTMLInputElement;
  let inputEmail: HTMLInputElement = document.getElementById(
    "inputEmail"
  ) as HTMLInputElement;
  let inputCnic: HTMLInputElement = document.getElementById(
    "inputCnic"
  ) as HTMLInputElement;
  let inputAddress: HTMLInputElement = document.getElementById(
    "inputAddress"
  ) as HTMLInputElement;
  
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
  
    inputOne.setAttribute(
      "placeholder",
      "Field of study (e.g.,Computer Science)"
    );
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
    inputOne.setAttribute(
      "placeholder",
      "Skill/Expertise (e.g.,HTML,CSS) Enter a single skill here"
    );
    inputOne.setAttribute("type", "text");
  
    AddMoreSkill.appendChild(inputOne);
  };
  
  let newUlDiv: HTMLUListElement = document.createElement("ul"); 
  newUlDiv.classList.add("education-div");
  
  let newUlDiv2: HTMLUListElement = document.createElement("ul"); 
  newUlDiv.classList.add("experience-div");
  
  const GenerateResumeFunction = (e: Event) => {
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
  
    const educationsTitle = document.getElementsByClassName(
      "EducationTitle"
    ) as HTMLCollectionOf<HTMLInputElement>;
    const educationsDetail = document.getElementsByClassName(
      "EducationDetail"
    ) as HTMLCollectionOf<HTMLInputElement>;
  
    let TitleArray: any = [...educationsTitle];
    let DetailArray: any = [...educationsDetail];
  
    const listItems = TitleArray.map((title: any, index: number) => {
      const detail = DetailArray[index] ? DetailArray[index].value : "";
  
      return `
        <li class="title">${title.value}</li>
        <li class="detail">${detail}</li>
      `;
    }).join("");
  
    if (newUlDiv) {
      newUlDiv.innerHTML = listItems;
    }
  
    let educationContainer: HTMLDivElement = document.getElementById(
      "education-container"
    ) as HTMLDivElement;
    educationContainer.appendChild(newUlDiv);
  
  
    const jobTitle = document.getElementsByClassName(
      "Experience-title"
    ) as HTMLCollectionOf<HTMLInputElement>;
    const jobDetail = document.getElementsByClassName(
      "Experience-detail"
    ) as HTMLCollectionOf<HTMLInputElement>;
  
    let jobTitleArray: any = [...jobTitle];
    let jobDetailArray: any = [...jobDetail];
  
    const listItemsjob = jobTitleArray
      .map((title: any, index: number) => {
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
  
    let experiencecontainer: HTMLDivElement = document.getElementById(
      "experience-container"
    ) as HTMLDivElement;
    experiencecontainer.appendChild(newUlDiv2);
  
  
    const skills = document.getElementsByClassName(
      "Skills-class"
    ) as HTMLCollectionOf<HTMLInputElement>;
  
    let skillsArray: any = [...skills];
  
    const skillsLoop = skillsArray
      .map((title: any, index: number) => {
        return `
        <li>${title.value}</li>
      `;
      })
      .join("");
  
    let skillsContainer = document.getElementById("skills-container");
  
    if (skillsContainer) {
      skillsContainer.innerHTML = skillsLoop;
    }
  
    const FormContainer: HTMLDivElement = document.getElementById(
      "container-form"
    ) as HTMLDivElement;
    const ResumeContainer: HTMLDivElement = document.getElementById(
      "container-resume"
    ) as HTMLDivElement;
  
    FormContainer.style.display = "none";
    ResumeContainer.style.display = "flex";
  
  
  
  
  const languageCheckboxes = document.querySelectorAll('input[name="language"]') as NodeListOf<HTMLInputElement>;
  
  let languageUl = document.getElementById('language-ul') as HTMLUListElement;
  languageUl.innerHTML = '';
  
    languageCheckboxes.forEach((li) => {
      if (li.checked) {
        let listItem = `<li class="language">${li.value}</li>`;
        languageUl.insertAdjacentHTML('beforeend', listItem); 
      }
    });
  
  
  
  
  
    
  
  
  
  
  };
  
  
  
  
  allInputsField.forEach((input: HTMLInputElement) => {
    input.addEventListener("input", checkAllInput);
  });
  
  GenerateResumeButton.disabled = true;
  GenerateResumeButton.addEventListener("click", GenerateResumeFunction);
  
  const PrintResume = () => {
    document.title =  `${window.location.origin}?name=${encodeURIComponent(firstUserName.innerText)}`;
    window.print();
  };
  
  
  const Edit = () => {
    const FormContainer: HTMLDivElement = document.getElementById(
      "container-form"
    ) as HTMLDivElement;
    const ResumeContainer: HTMLDivElement = document.getElementById(
      "container-resume"
    ) as HTMLDivElement;
  
    FormContainer.style.display = "flex";
    ResumeContainer.style.display = "none";
  }
  
  
  
  const Delete= () => {
    window.location.reload();
  }
  
  
  
  const shareable = () => {
    if (navigator.share) {
      navigator.share({
        title: `${firstUserName.innerText} Resume`,
        text: `Hey ${firstUserName.innerText} here is your shareable link`,
        url: `${window.location.href}/${firstUserName.innerText}/resume`
      })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  }
  
  
  