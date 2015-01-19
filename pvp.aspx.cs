using BoostWow.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BoostWow
{
    public partial class pvp : System.Web.UI.Page
    {
        protected List<MessagePvP> listToDisplay;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (listToDisplay == null)
            {
                using (var dbCtx = new BoostWowEntities())
                {
                    listToDisplay = dbCtx.MessagePvP.ToList<MessagePvP>();
                }
            }
        }

        public void nouveau_Click(object sender, EventArgs e)
        {
            if (Session["log"] == "1")
            {
                Response.Redirect("/addpvp.aspx");
            }
            else
            {
                Response.Redirect("/login.aspx");
            }

        }
    }
}