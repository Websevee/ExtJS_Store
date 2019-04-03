using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExtJS_Store.Models
{
    public class OrderItem
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [ForeignKey("Order")]
        public int OrderID { get; set; }

        [Required]
        [ForeignKey("Product")]
        public int ItemID { get; set; }

        [Required]
        public int ItemsCount { get; set; }

        [Required]
        public int Item_Price { get; set; }
    }
}