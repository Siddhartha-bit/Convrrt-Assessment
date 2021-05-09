<template>
  <div id="background">
    <div id="focus-ring" :tabindex="tabIndex" :style="disabledFocusStyle">
      <div id="checkbox" :style="disabledStyle" tabindex="-1">
        <input
          type="checkbox"
          id="input-element"
          @click="parseType"
          :disabled="isDisabled"
          :checked="isInputSelected"
        />
        <div v-if="isCheckboxSelected">
          <div id="checkmark-filler">
            <span class="checkmark-container">
              <div class="checkmark_stem"></div>
              <div class="checkmark_kick"></div>
            </span>
          </div>
        </div>
        <div v-if="isRemoveSelected">
          <div id="remove-filler">
            <span class="remove-container">
              <div class="remove-horiz"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <span style="width:8px"> </span>
    <p>Blue whale decided to have shrimp</p>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: {
    selectionType: {
      type: String,
      default: "checkbox",
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isInputSelected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggle-favorite"],
  data() {
    return {
      isCheckboxSelected:
        this.selectionType === "checkbox" && this.isInputSelected,
      isRemoveSelected:
        this.selectionType !== "checkbox" && this.isInputSelected,
      tabIndex: this.isDisabled ? -1 : 0,
    };
  },
  computed: {
    // isCheckboxSelected() {
    //   return this.selectionType === "checkbox" && this.isInputSelected;
    // },

    // isRemoveSelected() {
    //   return this.selectionType !== "checkbox" && this.isInputSelected;
    // },
    disabledStyle() {
      if (this.isDisabled) {
        if (this.isCheckboxSelected) {
          return "pointer-events:none; opacity: 0.4";
        } else if (this.isRemoveSelected) {
          return "pointer-events:none; opacity: 0.4";
        }
        return "pointer-events:none; background-color: #ccc;";
      }
      return "pointer-events:all; background-color: white";
    },
    disabledFocusStyle() {
      if (this.isDisabled) {
        return "pointer-events:none;";
      }
      return "pointer-events:all;";
    },
  },
  methods: {
    toggleInput() {
      this.isCheckboxSelected = !this.isCheckboxSelected;
    },
    toggleRemove() {
      this.isRemoveSelected = !this.isRemoveSelected;
    },
    parseType() {
      this.selectionType === "checkbox"
        ? this.toggleInput()
        : this.toggleRemove();
    },
  },
};
</script>

<style>
#background {
  width: 262px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#checkbox {
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
}

#checkbox:hover {
  box-shadow: 0px 0px 5px 5px gray;
}

#focus-ring {
  width: 28px;
  height: 28px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

#focus-ring:focus {
  border: 3px solid #0f64f2;
}

#checkmark-filler {
  width: 25px;
  height: 25px;
  background-color: #0f64f2;
  border-radius: 3px;
}

.checkmark-container {
  pointer-events: none;
  display: inline-block;
  width: 22px;
  height: 22px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkmark_stem {
  position: absolute;
  width: 5px;
  height: 16px;
  background-color: white;
  left: 12px;
  top: 2px;
  border-radius: 3px;
}

.checkmark_kick {
  position: absolute;
  width: 7px;
  height: 5px;
  background-color: white;
  left: 6.5px;
  top: 13px;
  border-radius: 3px;
}

#remove-filler {
  width: 25px;
  height: 25px;
  background-color: gray;
  border-radius: 3px;
}

.remove-container {
  pointer-events: none;
  display: inline-block;
  width: 22px;
  height: 22px;
}

.remove-horiz {
  position: relative;
  width: 16px;
  height: 5px;
  background-color: white;
  left: 3.5px;
  top: 10px;
  border-radius: 1px;
}

#input-element {
  position: absolute;
  /* top: 2px; */
  width: 25px;
  height: 25px;
  opacity: 0;
  cursor: pointer;
}
</style>
