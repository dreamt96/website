<template>
  <div class="root">
    <div>
      <h3>movable circle handled by direction key</h3>
    </div>
    <div>
      <svg :height="size" :width="size" class="game">
        <circle :cx="cx" :cy="cy" fill="yellow" r="4" stroke="green" stroke-width="2"/>
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
      oneStep: 0.5,
      timePerStep: 5
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
      }.bind(this), this.timePerStep);
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
          this.cx = this.cx - this.oneStep;
          break;
        case "right":
          this.cx = this.cx + this.oneStep;
          break;
        case "up":
          this.cy = this.cy - this.oneStep;
          break;
        case "down":
          this.cy = this.cy + this.oneStep;
          break;
      }
      this.relocate();
    },
    relocate() {
      if (this.cx <= 0) {
        this.cx = 0;
      } else if (this.cx >= this.size) {
        this.cx = this.size;
      }
      if (this.cy <= 0) {
        this.cy = 0;
      } else if (this.cy >= this.size) {
        this.cy = this.size;
      }
    },
    removeKeyBoardInputListener() {
      document.removeEventListener('keydown', function (event) {
        // @ts-ignore
        this.game.keydownEventProcessor(event);
      });
      document.removeEventListener('keyup', function (event) {
        // @ts-ignore
        this.game.keyupEventProcessor(event);
      });
    },
    // @ts-ignore
    keydownEventProcessor(event) {
      if (event.keyCode == 37) {
        // @ts-ignore
        this.left = true;
      } else if (event.keyCode == 38) {
        // @ts-ignore
        this.up = true;
      } else if (event.keyCode == 39) {
        // @ts-ignore
        this.right = true;
      } else if (event.keyCode == 40) {
        // @ts-ignore
        this.down = true;
      }
    },
    // @ts-ignore
    keyupEventProcessor(event) {
      if (event.keyCode == 37) {
        // @ts-ignore
        this.left = false;
      } else if (event.keyCode == 38) {
        // @ts-ignore
        this.up = false;
      } else if (event.keyCode == 39) {
        // @ts-ignore
        this.right = false;
      } else if (event.keyCode == 40) {
        // @ts-ignore
        this.down = false;
      }
    },
    addKeyBoardInputListener() {
      // @ts-ignore
      document.game = this;
      document.addEventListener('keydown', function (event) {
        // @ts-ignore
        this.game.keydownEventProcessor(event);
      });
      document.addEventListener('keyup', function (event) {
        // @ts-ignore
        this.game.keyupEventProcessor(event);
      });
    }
  },
  unmounted() {
    this.removeKeyBoardInputListener();
  }
})
</script>

<style lang="scss" scoped>
.root {
  .game {
    background-color: azure;
  }
}
</style>
