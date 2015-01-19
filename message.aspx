<%@ Page Title="" Language="C#" MasterPageFile="~/base.Master" AutoEventWireup="true" CodeBehind="message.aspx.cs" Inherits="BoostWow.message" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <div class="4u 12u(narrower)">
                    <div id="sidebar">

                        <!-- Sidebar -->

                        <section>
                            <div class="box post">
								<a href="#" class="image left"><img src="images/pic01.jpg" alt="" /></a>
								<div class="inner">
									<h3><%= m.PseudoCreateur %></h3>
                             <p>   Destructeur de monde
                            </p>
                                    </div>
                                </div>
                            <footer>
                                <a href="#" class="button">Je suis intéréssé</a>
                            </footer>
                        </section>

                    </div>
                </div>
                <div class="8u  12u(narrower) important(narrower)">
                    <div id="content">

                        <article>
                            <header class="major">
                                <h2><%= m.Titre %></h2>
                                <p>PvP</p>
                            </header>
                            <p>
                                <%= m.Message %>
                            </p>
                        </article>
                    </div>
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
