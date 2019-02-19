using System.ComponentModel.DataAnnotations;

namespace Tobania.AngularVsReact.Models
{
    public class TodoWriteModel
    {
        [Required]
        public string Title { get; set; }
        public bool Checked { get; set; } = false;
    }
}