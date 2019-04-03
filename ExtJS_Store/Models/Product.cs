using System.ComponentModel.DataAnnotations;

namespace ExtJS_Store.Models
{
    public class Product
    {
        public int ID { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public string Code { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }

        [StringLength(30, ErrorMessage = "Category cannot be longer than 30 characters.")]
        public string Category { get; set; }
    }
}