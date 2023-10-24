
  
    inputModifyTask = document.querySelector("input-modify_tittle")


    btnDeleteTask = document.querySelector(".btn-delete_task")
    btnModifyTask = document.querySelector(".btn-modify-task")
    btnAcceptTask= document.querySelector(".btn-accept_modify")

    tittleTask = document.querySelector(".tittle_task")

    modifyGoal = document.querySelector(".modify_goal")
    ModifyCompleted = document.querySelector(".modify_completed")

    ModifyRaiseGoal = document.querySelector(".raise_goal")
    ModifyLowerGoal = document.querySelector(".lower_goal")

    ModifyRaiseGoal.addEventListener("click",(e)=>{
        objetivo.textContent = parseInt(objetivo.textContent) + 1
    })

    ModifyLowerGoal.addEventListener("click",(e)=>{
        objetivo.textContent = parseInt(objetivo.textContent) -1 
    })

    btnModifyTask.addEventListener("click", (e)=>{

        titulo.style.display = "none"
        inputTexto.style.display = "inline-block"

    })

    btnAcceptTask.addEventListener("click",(e)=>{
        
    })



    // 

    containerTask.innerHTML = `
    <span">${titleTask} <span style="margin-left: 20px;" class="task-number-complete">0</span> / <span class="task-number-goal">${numberGoal}</span></span>
    <button class="btn-modify-task"> : </button>
    <button class="btn-select-task"> * </button>
    `


    `
    <span class="tittle_task">${titleTask}</span>
    <input type="text" style="display: none;" class="inputText">
    <span style="margin-left: 20px;" class="task_number-complete">0</span> /
    <span class="task-number-goal">${numberGoal}</span>
    <button class="btn-modify-task"> : </button>
    <button class="btn-select-task"> * </button>
  
    <div class="container-task_options">
      <div style="margin: 20px 0px;">
        <span>Completed</span>
        <input class="modify_completed" type="number" style="width: 40px; height: 20px;">
        <span>Meta</span>
        <span class="modify_goal">0</span>
        <button class="raise_goal"><i class="fas fa-arrow-up"></i></button>
        <button class="lower_goal"><i class="fas fa-arrow-down"></i></button>
      </div>
  
      <div>
        <button class="btn-delete_task">Delete</button>
        <button class="btn-cancel_options">Cancel</button>
        <button class="btn-accept_modify">Accept</button>
      </div>
    </div>
  `;







  `
    <span class='tittle_task'">${titleTask}  <span style="margin-left: 20px;" class="task-number-complete">0</span> / <span class="task-number-goal">${numberGoal}</span></span>
    <button class="btn-modify-task"> : </button>
    <button class="btn-select-task"> * </button>

    <div class="container-task_options">
      <div style="margin: 20px 0px;">
        <span>Completed</span>
        <input class="modify_completed" type="number" style="width: 40px; height: 20px;">
        <span>Goal</span>
        <span class="modify_goal">0</span>
        <button class="raise_goal"><i class="fas fa-arrow-up"></i></button>
        <button class="lower_goal"><i class="fas fa-arrow-down"></i></button>
      </div>
  
      <div>
        <button class="btn-delete_task">Delete</button>
        <button class="btn-cancel_options">Cancel</button>
        <button class="btn-accept_modify">Accept</button>
      </div>
    </div>
    
    `