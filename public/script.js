const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');

// /api/v1/tasksからタスクを読み込む
const showTasks = async () => {
  try {
    // 自作のAPIを叩く
    // dataという名前のもとを探してきて、tasksという名前で格納する
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);

    //タスクを出力
    const allTasks = tasks.map((task) => {
      // console.log(task);
      const {
        completed,
        _id,
        name,
      } = task;

      return `<div class="single-task aaaaaa">
      <h5>
        <span>
          <i class="far fa-check-circle"></i>
        </span>
        ${name}
      </h5>
      <div class="task-links">
        <!-- 編集リンク -->
        <a href="#" class="edit-link">
          <i class="fas fa-edit"></i>
        </a>
        <!-- ゴミ箱リンク -->
        <button type="button" class="delete-btn" data-id="${_id}">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>`;
    });  
    tasksDOM.innerHTML = allTasks.join('');
    console.log(allTasks);
  } catch (err) {
    console.log(err);
  }
};

showTasks();

//タスクを新規作成する
formDOM.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = taskInputDOM.value;
  try {
    await axios.post('/api/v1/tasks', {
      name: name
    });
    showTasks();
    taskInputDOM.value = '';
  } catch (err) {
    console.log(err);
  }
});

//タスクを削除する
tasksDOM.addEventListener('click', async (event) => {
  event.preventDefault();
  const element = event.target;
  // console.log(element.parentElement.classList);
  if (element.parentElement.classList.contains('delete-btn')) {
    const id = element.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (err) {
      console.log(err)
    }
  }
})