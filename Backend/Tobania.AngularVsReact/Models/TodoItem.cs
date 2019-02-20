
using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Tobania.AngularVsReact.Models
{
    public class TodoItem
    {
        [BsonId]
        public ObjectId InternalId { get; set; }
        public Guid Id { get; set; }
        public string Text { get; set; }
        public bool Checked { get; set; }

        public Todo Parent { get; set; }

        public TodoItem() { }

        public TodoItem(Todo parent, string text)
        {
            Id = Guid.NewGuid();
            Text = text;
            Parent = parent;
        }

        public void Update(string text, bool isChecked = false)
        {
            Text = text;
            Checked = isChecked;
        }

        public void Toggle() => Checked = !Checked;

    }
}