using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using ExtJS_Store.Models.User;
using ExtJS_Store.Models;

namespace ExtJS_Store.DAL
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public ApplicationContext() : base("Database") { }

        public static ApplicationContext Create()
        {
            return new ApplicationContext();
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Cart> Carts { get; set; }

        public DbSet<OrderDetail> OrderDetails { get; set; }
    }
}