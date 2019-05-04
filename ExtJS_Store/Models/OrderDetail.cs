using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtJS_Store.Models
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ItemId { get; set; }
        public int ItemsCount { get; set; }
        public int ItemPrice { get; set; }
    }
}