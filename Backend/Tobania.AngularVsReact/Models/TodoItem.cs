
using System;

namespace Tobania.AngularVsReact.Models
{
    public class TodoItem
    {
        public Guid Identifier { get; set; }
        public string Text { get; set; }
        public bool Checked { get; set; }

        public TodoItem() { }

        public TodoItem(Todo parent, string text)
        {
            Identifier = Guid.NewGuid();
            Text = text;
            // Parent = parent;
        }

        public void Update(string text, bool isChecked = false)
        {
            Text = text;
            Checked = isChecked;
        }

        public void Toggle() => Checked = !Checked;

    }
}