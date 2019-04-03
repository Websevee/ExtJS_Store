namespace ExtJS_Store.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class OrderController : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        OrderID = c.Int(nullable: false, identity: true),
                        CustomerID = c.Int(nullable: false),
                        Order_Date = c.DateTime(nullable: false),
                        Shipment_Date = c.DateTime(nullable: false),
                        Order_Number = c.Int(nullable: false),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.OrderID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Orders");
        }
    }
}
