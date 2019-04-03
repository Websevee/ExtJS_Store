using Microsoft.AspNet.Identity.EntityFramework;

namespace ExtJS_Store.Models.User
{
    public class MyRole : IdentityRole
    {
        public MyRole() { }

        public string Description { get; set; }
    }
}