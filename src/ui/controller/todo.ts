import { todoRepository } from "@ui/repository/todo";

interface TodoControllerGetParams {
  page: number;
}

async function get(params: TodoControllerGetParams) {
  return todoRepository.get({
    page: params.page,
    limit: 5,
  });
}

export const todoController = {
  get,
};
