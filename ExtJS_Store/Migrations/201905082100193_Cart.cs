namespace ExtJS_Store.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Cart : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Carts",
                c => new
                    {
                        RecordId = c.Int(nullable: false, identity: true),
                        CartId = c.String(),
                        ProductId = c.Int(nullable: false),
                        Count = c.Int(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.RecordId)
                .ForeignKey("dbo.Products", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId);
            
            AddColumn("dbo.Orders", "Total", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.OrderDetails", "ProductId", c => c.Int(nullable: false));
            AddColumn("dbo.OrderDetails", "ProductCount", c => c.Int(nullable: false));
            AddColumn("dbo.OrderDetails", "ProductPrice", c => c.Int(nullable: false));
            DropColumn("dbo.OrderDetails", "ItemId");
            DropColumn("dbo.OrderDetails", "ItemsCount");
            DropColumn("dbo.OrderDetails", "ItemPrice");
        }
        
        public override void Down()
        {
            AddColumn("dbo.OrderDetails", "ItemPrice", c => c.Int(nullable: false));
            AddColumn("dbo.OrderDetails", "ItemsCount", c => c.Int(nullable: false));
            AddColumn("dbo.OrderDetails", "ItemId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Carts", "ProductId", "dbo.Products");
            DropIndex("dbo.Carts", new[] { "ProductId" });
            DropColumn("dbo.OrderDetails", "ProductPrice");
            DropColumn("dbo.OrderDetails", "ProductCount");
            DropColumn("dbo.OrderDetails", "ProductId");
            DropColumn("dbo.Orders", "Total");
            DropTable("dbo.Carts");
        }
    }
}
