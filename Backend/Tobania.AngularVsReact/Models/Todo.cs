
using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Tobania.AngularVsReact.Models
{
    public class Todo
    {
        [BsonId]
        public ObjectId InternalId { get; set; }
        public Guid Identifier { get; set; }
        public string Title { get; set; }
        public DateTime CreatedDate { get; set; }

        public ICollection<TodoItem> TodoItems { get; set; } = new List<TodoItem>();

        [BsonIgnore] // to track if it is newly created
        public bool __IsNew { get; set; }
        public Todo() { }

        public Todo(string title)
        {
            Identifier = Guid.NewGuid();
            Title = title;
            CreatedDate = DateTime.UtcNow;
            __IsNew = true;
        }

        public void Update(string title) => Title = title;

        public TodoItem AddTodoItem(string text)
        {
            var item = new TodoItem(this, text);
            TodoItems.Add(item);

            return item;
        }

        public TodoItem GetTodoItem(Guid id) => TodoItems.FirstOrDefault(i => i.Identifier == id);
    }
}