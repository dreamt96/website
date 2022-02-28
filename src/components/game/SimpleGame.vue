<template>
  <div class="root">
    <div>
      <h3>movable circle with direction key</h3>
    </div>
    <div>
      <svg :width="size" :height="size" class="game">
        <circle :cx="cx" :cy="cy" r="4" stroke="green" stroke-width="2" fill="yellow"/>
      </svg>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SimpleGame",
  data() {
    return {
      size: 500,
      left: false,
      up: false,
      right: false,
      down: false,
      cx: 5,
      cy: 5,
      speed: 5
    }
  },
  mounted() {
    this.addKeyBoardInputListener();
    this.addInterval();
  },
  methods: {
    addInterval() {
      // @ts-ignore
      this.interval = setInterval(function () {
        // @ts-ignore
        this.determineHowToMove();
      }.bind(this), 50);
    },
    determineHowToMove() {
      let trueCount: number = 0;
      if (this.left) {
        trueCount++;
      }
      if (this.right) {
        trueCount++;
      }
      if (this.up) {
        trueCount++;
      }
      if (this.down) {
        trueCount++;
      }
      if (trueCount > 1) {
        this.move("stop")
      } else {
        if (this.left) {
          this.move("left");
        }
        if (this.right) {
          this.move("right");
        }
        if (this.up) {
          this.move("up");
        }
        if (this.down) {
          this.move("down");
        }
      }
    },
    move(command: "stop" | "left" | "right" | "up" | "down") {
      switch (command) {
        case "stop":
          break;
        case "left":
          this.cx = this.cx - this.speed;
          break;
        case "right":
          this.cx = this.cx + this.speed;
          break;
        case "up":
          this.cy = this.cy - this.speed;
          break;
        case "down":
          this.cy = this.cy + this.speed;
          break;
      }
      this.relocate();
    },
    relocate() {
      if (this.cx <= 0) {
        this.cx = 0;
      } else if (this.cx >= this.size) {
        this.cx = this.size;
      } else if (this.cy <= 0) {
        this.cy = 0;
      } else if (this.cy >= this.size) {
        this.cy = this.size;
      }
    },
    addKeyBoardInputListener() {
      // @ts-ignore
      document.game = this;
      // @ts-ignore
      document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37) {
          // @ts-ignore
          this.game.left = true;
        } else if (event.keyCode == 38) {
          // @ts-ignore
          this.game.up = true;
        } else if (event.keyCode == 39) {
          // @ts-ignore
          this.game.right = true;
        } else if (event.keyCode == 40) {
          // @ts-ignore
          this.game.down = true;
        }
      });

      document.addEventListener('keyup', function (event) {
        if (event.keyCode == 37) {
          // @ts-ignore
          this.game.left = false;
        } else if (event.keyCode == 38) {
          // @ts-ignore
          this.game.up = false;
        } else if (event.keyCode == 39) {
          // @ts-ignore
          this.game.right = false;
        } else if (event.keyCode == 40) {
          // @ts-ignore
          this.game.down = false;
        }
      });

    }
  }
})
</script>

<style scoped lang="scss">
.root {
  .game {
    background-color: azure;
  }
}
</style>
