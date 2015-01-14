<%@ Page Title="" Language="C#" MasterPageFile="~/base.Master" AutoEventWireup="true" CodeBehind="register.aspx.cs" Inherits="BoostWow.pages.register" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="wrapper style1">
        <div class="container">
            <div class="row 50%">
                <div class="12u">
                    <input type="text" name="login" id="login" placeholder="Pseudo" />
                </div>
            </div>
            <div class="row 50%">
                <div class="12u">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
            </div>
            <div class="row 50%">
                <div class="12u">
                     <asp:Label runat="server" class="text-danger" Text="" ID="labelErreurConnection"></asp:Label>
                </div>
            </div>
           
            <div class="row 50%">
                <div class="12u">
                    <ul class="actions">
                        <li>
                            <asp:button runat="server" type="submit" ID="log" class="button alt" Text="S'enregistrer" OnClick="log_Click"></asp:button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>

</asp:Content>
