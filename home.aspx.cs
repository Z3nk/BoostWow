using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BoostWow.Model;

namespace BoostWow
{
    public partial class home : System.Web.UI.Page
    {

        protected List<User> toDisplay;
        protected void Page_Load(object sender, EventArgs e)
        {
            using (BoostWowEntities m = new BoostWowEntities())
            {
                toDisplay = m.User.Where(p => p.Pseudo == "Po")
                    .ToList<User>();
            }
        }
    }
}