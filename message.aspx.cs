using BoostWow.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BoostWow
{
    public partial class message : System.Web.UI.Page
    {
        protected MessagePvP m;
        protected void Page_Load(object sender, EventArgs e)
        {
            using (var dbCtx = new BoostWowEntities())
            {
                int i = int.Parse(Request.QueryString["id"]);
                m = dbCtx.MessagePvP
                    .Where(p => p.Id == i)
                    .FirstOrDefault();
            }
        }
    }
}