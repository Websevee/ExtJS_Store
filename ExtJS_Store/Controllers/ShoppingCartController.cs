using ExtJS_Store.DAL;
using ExtJS_Store.Models;
using System.Linq;
using System.Web.Mvc;

namespace ExtJS_Store.Controllers
{
    public class ShoppingCartController : Controller
    {
        ApplicationContext storeDB = new ApplicationContext();

        // GET: /ShoppingCart/
        public JsonResult Index()
        {
            var cart = ShoppingCart.GetCart(this.HttpContext);

            var CartItems = cart.GetCartItems();
            var CartTotal = cart.GetTotal();

            // Return the JSON
            return Json(new
            {
                CartItems,
                CartTotal,
                success = true
            }, JsonRequestBehavior.AllowGet);
        }

        // GET: /Store/AddToCart/5
        public JsonResult AddToCart(int id)
        {
            // Retrieve the album from the database
            var addedProduct = storeDB.Products
                .Single(product => product.Id == id);

            // Add it to the shopping cart
            var cart = ShoppingCart.GetCart(this.HttpContext);

            cart.AddToCart(addedProduct);

            // Go back to the main store page for more shopping
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        // AJAX: /ShoppingCart/RemoveFromCart/5
        [HttpPost]
        public JsonResult RemoveFromCart(int id)
        {
            // Remove the item from the cart
            var cart = ShoppingCart.GetCart(this.HttpContext);

            // Get the name of the album to display confirmation
            string productName = storeDB.Carts
                .Single(item => item.RecordId == id).Product.Name;

            // Remove from cart
            int itemCount = cart.RemoveFromCart(id);
            return Json(new
            {
                Message = Server.HtmlEncode(productName) +
                    " has been removed from your shopping cart.",
                CartTotal = cart.GetTotal(),
                CartCount = cart.GetCount(),
                ItemCount = itemCount,
                DeleteId = id
            }, JsonRequestBehavior.AllowGet);
        }
    }
}