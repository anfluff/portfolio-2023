<ProjectHeader
  title="Kvetun CRM"
  description="Custom production and business management system for fencing equipment factory"
  roles="{['Fullstack Developer']}"
/>

<div class="project-story">
  <div class="text">
    The integration of the system into production took place as it was developed. It solved the critical issues of production.
    <br>
    Transferring the product base to the platform required a lot of time for managers,
    to facilitate the work, the emphasis in the visual solution was on usability: content and actions on the first plan, no distracting graphic elements.

    <h2>Orders</h2>
    The central component of the system is the Order as the basic unit of business.
    For the head of the sales department, it is important to see the number of completed orders, the production stages, and the amount of revenue.
  </div>
  <img src="/src/images/projects/kvetun/0.png" alt="Nicolay Apraksin / Kvetun /  Orders table">

  <div class="text">
    The Order itself is a rather complex unit.
    <br>
    Business spread all over the world, so the calculation is in different currencies.
    The order is filled with products. Products are customized from modules, descriptions and requirements for characteristics are attached to them.
    <br>
    Based on the complexity of the order, the production scopes are determined.
    For each order, invoices are generated in accordance with the needs of postal services.
    <br>
    To avoid production errors, all order changes are logged. You can allways view changes and return to previous state.
  </div>
  <img src="/src/images/projects/kvetun/1.png" alt="Nicolay Apraksin / Kvetun / Order detail">

  <div class="text">
    Boxes management: distribute order product in boxes to make it easy with postal servises.
    <br>
    The administrator can specify the amount and weight of the boxes.
    Each box is supplied with documentation for postal and customs servises.
  </div>
  <img src="/src/images/projects/kvetun/2.png" alt="Nicolay Apraksin / Kvetun / Boxes system">

  <div class="text">
    Payment system is included.
    After the order is formed, the manager can send a link for payment to the client.
  </div>
  <img src="/src/images/projects/kvetun/3.png" alt="Nicolay Apraksin / Kvetun / Payment page">

  <div class="text">
    <h2>Products</h2>
    Kvetun manufacture and sale a wide range of fencing equipment: fencing weapons, protective gear, equipment.
    <br>
    Each product can be customized according to the customer's requirements: size, material, color. So there are millions of combinations.
    To solve the accounting problem we developed <b>product customization system</b>.
    <br>
    Each customizable element holds list of possible variations:
  </div>
  <img src="/src/images/projects/kvetun/4.png" alt="Nicolay Apraksin / Kvetun / Product module creation">
  <div class="text">
    Products are formed with <b>list of modifiable modules</b>. The image below shows the modules for the saber.
  </div>
  <img src="/src/images/projects/kvetun/5.png" alt="Nicolay Apraksin / Kvetun / Product modules set">
  <div class="text">
    Manager indicates the client's requirements for product customization.
  </div>
  <img src="/src/images/projects/kvetun/6.png" alt="Nicolay Apraksin / Kvetun / Product in order customisation">

  <div class="text">
    <h2>Production summary table</h2>
    This interface shows the production plan for the month.
    All products that need to be manufactured are collected and organized by type, the cost of materials is calculated.
    Based on these data, a PDF document is formed with the assignment of tasks to production departments.
  </div>
  <img src="/src/images/projects/kvetun/8.png" alt="Nicolay Apraksin / Kvetun / Summary">

  <div class="text">
    <h2>Task system</h2>
    Communication within the system between employees occurs through a tasks manager.
    In terms of functionality, it corresponds to common task trackers, but it is tailored for a specific area of activity.
    <br>
    As an example, a task can be connected to an order, multiple orders, or specific products in an order.
    From the order page, the manager can mark the problematic products, the tasks will be assigned to the appropriate production department.
  </div>
  <img src="/src/images/projects/kvetun/9.png" alt="Nicolay Apraksin / Kvetun / Task labels">
  <img src="/src/images/projects/kvetun/10.png" alt="Nicolay Apraksin / Kvetun / Task detail">
</div>

<PageFooter excludeId="kvetun" />

<script>
import ProjectHeader from '../../../components/projects/ProjectHeader.svelte'
import PageFooter from '../../../components/PageFooter.svelte'
</script>
