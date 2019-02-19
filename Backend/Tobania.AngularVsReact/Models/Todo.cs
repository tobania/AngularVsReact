
using System;
namespace Tobania.AngularVsReact.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public bool Checked { get; set; } = false;
        public DateTime CreatedDate { get; set; }

        public Todo() { }

        public Todo(string title)
        {
            Id = Guid.NewGuid();
            Title = title;
            CreatedDate = DateTime.UtcNow;
        }

        public void Update(string title, bool isChecked = false)
        {
            Title = title;
            Checked = isChecked;
        }
    }
}