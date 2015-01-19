<%@ Page Title="" Language="C#" MasterPageFile="~/base.Master" AutoEventWireup="true" CodeBehind="addpvp.aspx.cs" Inherits="BoostWow.addpvp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <section class="wrapper style1">
        <div class="container">
            <div class="row 50%">
                <div class="12u">
                     <asp:Label runat="server" class="text-danger" Text="" ID="labelErreurConnection"></asp:Label>
                </div>
            </div>

            <div class="row 50%">
                <div class="12u">
                    <input type="text" name="titre" id="titre" placeholder="Titre" />
                </div>
            </div>
            <div class="row 50%">
                <div class="12u">
                    <input type="text" name="keyword" id="keyword" placeholder="Mots clefs" />
                </div>
            </div>
            <div class="row 50%">
                <div class="12u">
                    <textarea name="message" id="message" placeholder="Message">

                    </textarea>
                </div>
            </div>
           
            <div class="row 50%">
                <div class="12u">
                    <ul class="actions">
                        <li>
                            <asp:button runat="server" type="submit" ID="log" class="button alt" Text="Ajouter message" OnClick="addpvp_Click"></asp:button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
      <script>
          $(document).ready(function () {
              $(".current").removeClass("current");
              $("#pvp").addClass("current");
          });
</script> 
</asp:Content>
