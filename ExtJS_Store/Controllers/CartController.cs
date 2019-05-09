using ExtJS_Store.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJS_Store.Controllers
{
    public class CartController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        // GET: /ShoppingCart/
        public JsonResult GetCart(int userid)
        {
        }
    }
}