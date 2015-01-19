<%@ Page Title="" Language="C#" MasterPageFile="~/base.Master" AutoEventWireup="true" CodeBehind="pvp.aspx.cs" Inherits="BoostWow.pvp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="wrapper style1">
        <div class="container">
            <div class="row 50%">
                <div class="12u">
                    <asp:Button runat="server" type="submit" ID="log" class="button alt" Text="Nouveau" OnClick="nouveau_Click"></asp:Button>
                </div>
            </div>
            <br />
        </div>
        <table class="default">
            <thead>
                <tr>
                    <th>Auteur</th>
                    <th>Titre</th>
                    <th>Mots Clefs</th>
                </tr>
            </thead>
            <tbody>
                <%for (int i = 0; i < listToDisplay.Count; i++)
                  { %>
                <a href="/home.aspx">
                    <tr id="<%=listToDisplay[i].Id %>" style="cursor:pointer" onmouseover="ChangeColor(this, true);" onmouseout="ChangeColor(this, false);" >
                        <td><%=listToDisplay[i].PseudoCreateur %></td>
                        <td><%=listToDisplay[i].Titre %></td>
                        <td><%=listToDisplay[i].Keyword %></td>
                    </tr>
                </a>
                <%} %>
            </tbody>
        </table>
    </section>


    <script>
        $(document).ready(function () {
            $(".current").removeClass("current");
            $("#pvp").addClass("current");
        });


        $(function () {
            $("table tr").click(function (e) {
                window.location = "/message.aspx?id=" + $(this).attr('id');
                return true;
            });
        });

    function ChangeColor(tableRow, highLight)
    {
        if (highLight)
        {
            tableRow.style.backgroundColor = '#dcfac9';
        }
        else
        {
            tableRow.style.backgroundColor = 'white';
        }
    }


    </script>
</asp:Content>
