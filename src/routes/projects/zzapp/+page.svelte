<ProjectHeader
  title="Zzapp"
  description="Browser quiz game for learning how to play Dota 2"
  roles="{['Senior Fullstack Developer', 'Product Designer']}"
/>

<div class="project-story">
  <div class="text">
    Dota 2 players are so passionate about their hobby that they spend all their free time on the game.
    When they're not playing, they're consuming the game's accompanying content - watching live streams of tournaments and other famous players.
    <br>
    Watching streams is a passive affair.
    This is where our game comes into play.
    Why just watch the stream when you can watch the stream and play right there?
    <br>
    The main screen of the game prompted you to select the stream you were interested in.
  </div>
  <img src="/src/images/projects/zzapp/1.png" alt="Nicolay Apraksin / Zzapp / Index">
  <div class="text">
    The stream opens on part of the screen, and the game starts on the remaining space.
  </div>
  <img src="/src/images/projects/zzapp/1a.png" alt="Nicolay Apraksin / Zzapp / Stream">
  <div class="text">
    The second scenario for using the game is to take time when the computer is not available.
    <br>
    The game is fully adapted to mobile platforms, which are always at hand: in transport, between studies, before going to bed.
  </div>
  <img src="/src/images/projects/zzapp/mobile2.png" alt="Nicolay Apraksin / Zzapp / Mobile game">

  <div class="text">
    <h2>About the game</h2>
    The game is built on metaphors from Dota 2.
    <br>
    Each scenario is a sequence of stages. Passed one, choose where to move on.
  </div>
  <img src="/src/images/projects/zzapp/2.png" alt="Nicolay Apraksin / Zzapp / Scenario">

  <div class="text">
    The stage consists of a sequence of questions.
    Each question is put in accordance with the game creature. Each creature has its own type of question.
    The choice of one of two options, of four, the choice of several of their four answers, and so on.
    <br>
    Questions are time limited. Be careful: time is over considered as incorrect answer!
    <br>
    The game goes until the player runs out of health.
    Each incorrectly answered question removes one health point.
    <br>
    For each correctly answered question, the player receives an internal currency.
    In the game shop you can buy items that provide additional opportunities - more health at the start, health recovery during the game, skipping a question and so on.
  </div>
  <img src="/src/images/projects/zzapp/3.png" alt="Nicolay Apraksin / Zzapp / Game">

  <div class="text">
    Is time over? Lost health.
  </div>
  <img src="/src/images/projects/zzapp/4.png" alt="Nicolay Apraksin / Zzapp / Timeout">

  <div class="text">
    Wrong answer? Oops.
  </div>
  <img src="/src/images/projects/zzapp/5.png" alt="Nicolay Apraksin / Zzapp / Wrong answer">

  <div class="text">
    Correct answer! Go further, and also get some rewards: for the type of question, as well as for the remaining time.
  </div>
  <img src="/src/images/projects/zzapp/6.png" alt="Nicolay Apraksin / Zzapp / Write answer">

  <div class="text">
    In-game shop with items. Accumulate game currency, spend on improvements!
  </div>
  <img src="/src/images/projects/zzapp/7.png" alt="Nicolay Apraksin / Zzapp / Shop">

  <div class="text">
    <h2>Management</h2>
    Comprehensive administrative interfaces allow you to edit scenarios, question categories, questions, and more.
    <br>
    Questions in the game are related to content from Dota 2 itself, we display names, icons, specific values.
    We have made a database of this knowledge - heroes, creatures, their abilities, items.
    <br>
    When creating a question, you can use the search context menu to substitute the appropriate entity.
  </div>
  <img src="/src/images/projects/zzapp/9.png" alt="Nicolay Apraksin / Zzapp / Question creation">
  <div class="text">
    And of course, we watch for the players!
    <br>
    Every game you play is recorded: all the answers, the time spent, the strategy of behavior.
    <br>
    Based on this data, we wanted to create an infographic showing players' knowledge of Dota 2 topics.
  </div>
  <img src="/src/images/projects/zzapp/8.png" alt="Nicolay Apraksin / Zzapp / Game history">
</div>

<PageFooter excludeId="zzapp" />

<script>
import ProjectHeader from '../../../components/projects/ProjectHeader.svelte'
import PageFooter from '../../../components/PageFooter.svelte'
</script>
