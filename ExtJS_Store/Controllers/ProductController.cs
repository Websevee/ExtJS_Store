using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ExtJS_Store.DAL;
using ExtJS_Store.Models;

namespace ExtJS_Store.Controllers
{
    public class ProductController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        // ---- API
        List<Product> _list = new List<Product>();

        /*public ActionResult GetData()
        {
            _list = db.Products.ToList();
            return Json(new
            {
                data = _list,
                success = true
            }, JsonRequestBehavior.AllowGet);
        }*/

        // GET: Product
        public ActionResult Index()
        {
            var products = unitOfWork.ProductRepository.Get();
            return View(products.ToList());
        }


        /*

        // GET: Product/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }
        */
        // GET: Product/Create
        public ActionResult Create()
        {

            return View();
        }
        
        // POST: Product/Create
        // Чтобы защититься от атак чрезмерной передачи данных, включите определенные свойства, для которых следует установить привязку. Дополнительные 
        // сведения см. в статье https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Code,Name,Price,Category")] Product product)
        {
            if (ModelState.IsValid)
            {
                unitOfWork.ProductRepository.Insert(product);
                unitOfWork.Save();
                return RedirectToAction("Index");
            }

            return View(product);
        }
        
        // GET: Product/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = unitOfWork.ProductRepository.GetByID(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // POST: Product/Edit/5
        // Чтобы защититься от атак чрезмерной передачи данных, включите определенные свойства, для которых следует установить привязку. Дополнительные 
        // сведения см. в статье https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Code,Name,Price,Category")] Product product)
        {
            if (ModelState.IsValid)
            {
                unitOfWork.ProductRepository.Update(product);
                unitOfWork.Save();
                return RedirectToAction("Index");
            }
            return View(product);
        }
        
        // GET: Product/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = unitOfWork.ProductRepository.GetByID(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // POST: Product/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = unitOfWork.ProductRepository.GetByID(id);
            unitOfWork.ProductRepository.Delete(id);
            unitOfWork.Save();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
