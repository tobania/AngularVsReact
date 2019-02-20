
using System;
using System.Collections.Generic;
using System.Linq;

namespace Tobania.AngularVsReact.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime CreatedDate { get; set; }

        public ICollection<TodoItem> TodoItems { get; set; } = new List<TodoItem>();
        public Todo() { }

        public Todo(string title)
        {
            Id = Guid.NewGuid();
            Title = title;
            CreatedDate = DateTime.UtcNow;
        }

        public void Update(string title) => Title = title;

        public TodoItem AddTodoItem(string text)
        {
            var item = new TodoItem(this, text);
            TodoItems.Add(item);

            return item;
        }

        public TodoItem GetTodoItem(Guid id) => TodoItems.FirstOrDefault(i => i.Id == id);
    }
}