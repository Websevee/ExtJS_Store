using ExtJS_Store.DAL;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;

namespace ExtJS_Store.Models.User
{
    public class MyUserManager : UserManager<User>
    {
        public MyUserManager(IUserStore<User> store)
                : base(store)
        {
        }
        public static MyUserManager Create(IdentityFactoryOptions<MyUserManager> options,
                                                IOwinContext context)
        {
            ApplicationContext db = context.Get<ApplicationContext>();
            MyUserManager manager = new MyUserManager(new UserStore<User>(db));
            return manager;
        }
    }
}