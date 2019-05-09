using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExtJS_Store.Models
{
    public enum Status
    {
        New, Progress, Comleted
    }

    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        public int CustomerId { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Order_Date { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Shipment_Date { get; set; }

        public int Order_Number { get; set; }

        public string Status { get; set; }

        public decimal Total { get; set; }

        public List<OrderDetail> OrderDetails { get; set; }
    }
}