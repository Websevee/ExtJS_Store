namespace ExtJS_Store.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity.EntityFramework;
    using ExtJS_Store.Models.User;
    using System.Web;
    using Microsoft.AspNet.Identity;

    internal sealed class Configuration : DbMigrationsConfiguration<ExtJS_Store.DAL.ApplicationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "ExtJS_Store.DAL.ApplicationContext";
        }

        protected override void Seed(ExtJS_Store.DAL.ApplicationContext context)
        {
            var userManager = new MyUserManager(new UserStore<User>(context));
            var roleManager = new MyRoleManager(new RoleStore<MyRole>(context));

            // создаем две роли
            var role1 = new MyRole { Name = "admin" };
            var role2 = new MyRole { Name = "user" };

            // добавляем роли в бд
            roleManager.Create(role1);
            roleManager.Create(role2);

            // создаем пользователей
            var user = new User { Email = "admin@mail.ru", UserName = "admin@mail.ru" };
            string password = "111111";
            var result = userManager.Create(user, password);

            // если создание пользователя прошло успешно
            if (result.Succeeded)
            {
                // добавляем для пользователя роли
                userManager.AddToRole(user.Id, role1.Name);
                userManager.AddToRole(user.Id, role2.Name);
            }

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
