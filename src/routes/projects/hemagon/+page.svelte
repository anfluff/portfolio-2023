<ProjectHeader
  title="Hemagon"
  description="Platform for organizing sport competitions and ranking system focused on HEMA fencing."
  link="https://hemagon.com"
  roles="{['Senior Product Designer']}"
/>

<div class="project-story">
  <div class="text">
    In 2008 I took up historical fencing, by 2010 I competed on my first tournament.
    At that time, the tournaments were held on paper and I realized that it doesn't suite the moment. Everything should be online.
    Unfortunately my developing experience was too poor.
    <br>
    In 2017 I moved to another fencing team.
    Near at hand they had to host the main Russian longsword tournament: FechtTerra.
    <br>
    I had already become a fairly experienced developer.
    I realized that my time had come and claimed that I would make my own system to host the tournament.

    <h2>Hemagon 1.0</h2>
    There was not much time, so the solution had to be fast and reliable.
    <b>I developed the desktop application on electron + vue</b>: score counting and a ranking system to manage the tournament.
    <br>
    Tournament was run on my platform.
    <b>The system reduced the duration of the tournament, as all calculations were instant</b>.
    The organizers were delighted.
    <br>
    It became clear that by the next year I need to develop a full-fledged version of this program: consistant backend, realtime data exchange, and so on.

    <h2>Hemagon 2.0</h2>
    The fist version was totaly offline: only the organizers had all the data but the fighters did not have access to them.
    <br>
    <b>The obvious step was to create an accessible onine platform</b>,
    receiving in realtime all the data from the tournament and sharing it to participants, organisers and spectators.
    <br>
    So the development begin...

    <h2>Hemagon now</h2>
    Fencing tournament is a set of consecutive stages.
    <br>
    The most popular scheme is the group stage followed by playoffs.
  </div>
  <img src="/src/images/projects/hemagon/2a.png" alt="Nicolay Apraksin / Hemagon / Tournament">
  <div class="text">
    Based on the tournament results, an overall rating by weapon is formed.
    <b>The rating is calculated according to the Glicko2 system and updates automatically</b> on tournament ending.
  </div>
  <img src="/src/images/projects/hemagon/4.png" alt="Nicolay Apraksin / Hemagon / Rating">
  <div class="text">
    You can learn a lot about each fighter: their achievements, favorite weapons, win percentage and more.
  </div>
  <img src="/src/images/projects/hemagon/6a.png" alt="Nicolay Apraksin / Hemagon / Fighter profile">

  <div class="text">
    <b>Big data</b> made it possible to build interesting graphs.
    <br>
    You can see <b>a social graph</b> below. It represents the proximity of the fighters to each other.
  </div>
  <img src="/src/images/projects/hemagon/6b.png" alt="Nicolay Apraksin / Hemagon / Fighter profile">

  <div class="text">
    <h2>Organizer interface</h2>
    Organisers general scenario is <b>creating and describing tournaments</b>.
    Each tournament nomination has many settings that affect the behavior of the system.
    <br>
    Most important one is <b>the rating mode</b>: way of calculating the rating. One values a win percentage, the other depends on match points.
    <br>
    Are double hits important? Do Warnings and appeals count?
  </div>
  <img src="/src/images/projects/hemagon/7a.png" alt="Nicolay Apraksin / Hemagon / Nomination creation">
  <div class="text">
    After creating a nomination, the organiser <b>sets its stages</b>.
    <br>
    Most popular scheme is pools to eliminations.
    The organizer can create pools <b>automatically based on the rating</b> or their own will
    <br>
    The drag-and-drop scheme is most suitable for this scenario.
  </div>
  <img src="/src/images/projects/hemagon/7.png" alt="Nicolay Apraksin / Hemagon / Pool creation">
  <div class="text">
    <h2>Hosting a tournament</h2>
    Secretary follows the referee commands and adds fights scores to the db.
    <br>
    <b>Usability of the operator interface</b> was most important factor: all actions are on hotkeys, there is no need in mouse.
    <br>
    <b>Scoring history</b> is accessible.
  </div>
  <img src="/src/images/projects/hemagon/9.png" alt="Nicolay Apraksin / Hemagon / Fight interface">
  <div class="text">
    Points are shown on the screen facing towards the fighters.
    <br>
    <b>contrasting colors</b> are used, points are displayed <b>large size</b>, because the fighters look at the monitor from afar.
    <br>
    Who fights next? See below.
  </div>
  <img src="/src/images/projects/hemagon/10.png" alt="Nicolay Apraksin / Hemagon / Fight demo">
  <div class="text">
    Also, Hemagon <b>implemented a caption for the stream</b>.
    <br>
    <b>The server receives the data realtime</b> so the caption updates instantly.
  </div>
  <img src="/src/images/projects/hemagon/11.png" alt="Nicolay Apraksin / Hemagon / Stream caption">
</div>

<PageFooter excludeId="hemagon" />

<script>
  import ProjectHeader from '../../../components/projects/ProjectHeader.svelte'
  import PageFooter from '../../../components/PageFooter.svelte'
</script>
