using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Security.Cryptography;
using BoostWow.Model;
using System.Text;
namespace BoostWow.pages
{
    public partial class login : System.Web.UI.Page
    {
        protected MD5 md5Hash;
        protected void Page_Load(object sender, EventArgs e)
        {
            md5Hash = MD5.Create();
            if (IsPostBack)
            {

            }
        }

        private string GetMd5Hash(MD5 md5Hash, string input)
        {

            // Convert the input string to a byte array and compute the hash. 
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));

            // Create a new Stringbuilder to collect the bytes 
            // and create a string.
            StringBuilder sBuilder = new StringBuilder();

            // Loop through each byte of the hashed data  
            // and format each one as a hexadecimal string. 
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }

            // Return the hexadecimal string. 
            return sBuilder.ToString();
        }

        public void log_Click(object sender, EventArgs e)
        {
            String login = Request.Form["login"];
            String password = GetMd5Hash(md5Hash, Request.Form["password"]);

            using (var dbCtx = new BoostWowEntities())
            {
                List<User> v = dbCtx.User.Where(p => p.Pseudo.Equals(login)).Where(p => p.Password.Equals(password)).ToList<User>();
                if (v.Count == 1)
                {
                    labelErreurConnection.Text = "";
                    Session["log"] = "1";
                    Session["login"] = login;
                    Session["password"] = password;
                    Response.Redirect("/home.aspx");
                }

                else
                {
                    Session["log"] = "0";
                    labelErreurConnection.Text = "Identifiants incorrect";
                }
            }

        }
    }
}