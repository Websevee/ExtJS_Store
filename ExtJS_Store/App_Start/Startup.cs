using Microsoft.Owin;
using Owin;
using ExtJS_Store.Models.User;
using Microsoft.Owin.Security.Cookies;
using Microsoft.AspNet.Identity;
using ExtJS_Store.DAL;

[assembly: OwinStartup(typeof(ExtJS_Store.Startup))]

namespace ExtJS_Store
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext<ApplicationContext>(ApplicationContext.Create);
            app.CreatePerOwinContext<MyUserManager>(MyUserManager.Create);

            // регистрация менеджера ролей
            app.CreatePerOwinContext<MyRoleManager>(MyRoleManager.Create);

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Account/Login"),
            });
        }
    }
}