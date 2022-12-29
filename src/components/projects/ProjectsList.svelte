<div class="projects">
  {#each filteredProjects as project}
    <ProjectsListItem
      id="{project.id}"
      role="{project.role}"
      title="{project.title}"
      description="{project.description}"
    />
  {/each}
</div>

<script>
  export let excludeId

  import ProjectsListItem from './ProjectsListItem.svelte'

  const projects = [
    {
      id: 'ivy',
      role: 'Senior Frontend Dev',
      title: 'Ivy',
      description: 'Embedded lending for the gig economy'
    },
    {
      id: 'lsmp',
      role: 'Fullstack Frontend Dev',
      title: 'LondonSMP',
      description: 'Learning Management System'
    },
    {
      id: 'hemagon',
      role: 'Fullstack Dev',
      title: 'Hemagon',
      description: 'Platform for hosting sport competitions and ranking system'
    },
    {
      id: 'evenedium',
      role: 'Game Designer',
      title: 'Evenedium',
      description: 'Stategy Board Game'
    },
    {
      id: 'altera',
      role: 'Senior Product Designer',
      title: 'AlteraInvest',
      description: 'Uber for brokers'
    },
    {
      id: 'zzapp',
      role: 'Fullstack Dev',
      title: 'Zzapp',
      description: 'Educational web base quiz game'
    },
    {
      id: 'kvetun',
      role: 'Fullstack Dev',
      title: 'Kvetun',
      description: 'Custom CRM for leading fencing equipment producer'
    }
  ]
  const filteredProjects = excludeId
    ? projects.filter(project => project.id !== excludeId)
    : projects
</script>
