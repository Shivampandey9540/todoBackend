const Todo = require("../model/TodoSchema");

const CreateTaks = async (req, res) => {
  const { Title, Task } = req.body;

  if (!Title) {
    return res.status(400).json({
      Success: false,
      Message: "data is unefficient for this process",
      Title: !!Title,
    });
  }

  try {
    const CreatedTodo = await Todo.create({
      Title: Title,
      tasks: [{ task: Task }],
    });

    res.status(200).json({
      Success: true,
      Message: "Todo has been Created",
      Todo: CreatedTodo,
    });
  } catch (error) {
    // duplication of data with same title
    if (error.index == 0) {
      return res.status(401).json({
        success: false,
        Error: "A Todo with Same Title already Exist change the title",
      });
    }
    // Title has been not pass
    else if (error.errors.Title.kind === "required") {
      return res.status(400).json({
        success: false,
        Error: "Title is required Here or it cannot be same as other",
      });
    }
    // Handling some other Error by this
    res.status(402).json({
      success: false,
      Error: "some Error has been occured Please try Again Later",
    });
  }
};

module.exports = CreateTaks;
