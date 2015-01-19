using BoostWow.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BoostWow
{
    public partial class addpvp : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public void addpvp_Click(object sender, EventArgs e)
        {
            String titre = Request.Form["titre"];
            String keyword = Request.Form["keyword"];
            String message = Request.Form["message"];
            String login = Session["login"].ToString();
            String password = Session["password"].ToString();

            using (var dbCtx = new BoostWowEntities())
            {
                List<User> v = dbCtx.User.Where(p => p.Pseudo.Equals(login)).Where(p => p.Password.Equals(password)).ToList<User>();
                if (v.Count == 1)
                {
                    MessagePvP m = new MessagePvP();
                    m.IdUser = v[0].Id;
                    m.Titre = titre;
                    m.Keyword = keyword;
                    m.Message = message;
                    m.PseudoCreateur = login;
                    dbCtx.MessagePvP.Add(m);
                    dbCtx.SaveChanges();
                    Response.Redirect("/pvp.aspx");
                }
            }
        }
    }
}