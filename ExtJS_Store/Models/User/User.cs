using Microsoft.AspNet.Identity.EntityFramework;

namespace ExtJS_Store.Models.User
{
    public class User : IdentityUser
    {
        public int Year { get; set; }
        public User()
        {
        }
    }
}