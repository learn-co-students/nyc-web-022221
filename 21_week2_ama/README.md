# AMA 

- sessions_controller vs application_controller


- Since controller methods follow a template in Rails (new, create, show, etc) is there a way to just generate everything, including the usualy method implementations? (like @user = User.New, the simple starter code stuff)


- form_tag


<h1>Products:</h1>
<ul>
<% cart.each do |product| %>
    <li><%=  %></li>
<%  end %>
</ul>

<%= form_tag ({controller: 'products', action: 'add', method: 'post'}) do %>
    <input name=product>
    <input type=submit value='add to cart'>
<% end %>