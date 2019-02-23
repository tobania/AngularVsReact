using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tobania.AngularVsReact.Models;
using Tobania.AngularVsReact.Repositories.Contracts;

namespace Tobania.AngularVsReact.Controllers
{
    [Route("api/todos")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository _todoRepository;

        // GET api/todos
        public TodoController(ITodoRepository todoRepository) => _todoRepository = todoRepository;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> Get() => Ok(await _todoRepository.All());

        // GET api/todos/9c282146-e855-4977-8093-292004c1b043
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> Get(Guid id)
        {
            var todo = await _todoRepository.ById(id);
            if (todo == null) return NotFound();
            return Ok(todo);
        }

        // POST api/todos
        [HttpPost]
        public async Task<ActionResult<Todo>> Create([FromBody] TodoWriteModel value)
        {
            if (value == null || !ModelState.IsValid) return BadRequest();

            var todo = new Todo(value.Title);
            await _todoRepository.Save(todo);

            return Ok(todo);
        }


        // Post api/todos/9c282146-e855-4977-8093-292004c1b043/items

        [HttpPost("{id}/items")]
        public async Task<ActionResult> CreateItem(Guid id, [FromBody] TodoItemWriteModel value)
        {
            var todo = await _todoRepository.ById(id);
            if (todo == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest();

            var todoItem = todo.AddTodoItem(value.Text);

            await _todoRepository.Save(todo);

            return Ok(todoItem);
        }

        // Post api/todos/9c282146-e855-4977-8093-292004c1b043/items/8a992226-d845-3977-8093-292004c1b023

        [HttpPost("{id}/items/{todoId}/toggle")]
        public async Task<ActionResult> ToggleItem(Guid id, Guid todoId)
        {
            var todo = await _todoRepository.ById(id);
            if (todo == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest();

            var item = todo.GetTodoItem(todoId);
            item.Toggle();

            await _todoRepository.Save(todo);

            return Ok();
        }

        // PUT api/todos/9c282146-e855-4977-8093-292004c1b043
        [HttpPut("{id}")]
        public async Task<ActionResult<Todo>> Update(Guid id, [FromBody] TodoWriteModel value)
        {
            var todo = await _todoRepository.ById(id);
            if (todo == null) return NotFound();

            if (value == null || !ModelState.IsValid) return BadRequest();

            todo.Update(value.Title);

            await _todoRepository.Save(todo);

            return Ok(todo);
        }

        // DELETE api/todos/9c282146-e855-4977-8093-292004c1b043
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var todo = await _todoRepository.ById(id);

            if (todo == null) return NotFound();
            await _todoRepository.Delete(todo);

            return Ok();
        }
    }
}
