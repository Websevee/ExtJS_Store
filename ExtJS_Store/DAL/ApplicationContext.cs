using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using ExtJS_Store.Models.User;

namespace ExtJS_Store.DAL
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public ApplicationContext() : base("Database") { }

        public static ApplicationContext Create()
        {
            return new ApplicationContext();
        }

        public System.Data.Entity.DbSet<ExtJS_Store.Models.Product> Products { get; set; }

        public System.Data.Entity.DbSet<ExtJS_Store.Models.Order> Orders { get; set; }
    }
}