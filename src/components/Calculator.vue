<template>
  <div class="box">
    <h1 class="title has-text-centered">Teloneio Calculator (Beta)</h1>
    <form>
      <div class="field">
        <label class="label">CIF</label>
        <div class="control has-icons-left">
          <input
            id="totalCost"
            class="input"
            type="number"
            step="any"
            min="0.00"
            v-model.number="cif"
          />
          <span class="icon is-left">
            <i class="fas fa-euro-sign"></i>
          </span>
          <p class="help">
            CIF: Αξία αντικειµένου + Έξοδα µεταφοράς + Ασφάλιστρα
          </p>
        </div>
      </div>

      <div class="field">
        <label class="label">Αποστολή</label>
        <div class="field">
          <div class="control is-expanded has-icons-left">
            <div class="select is-fullwidth">
              <select v-model="selected">
                <optgroup label="Standard">
                  <option value="standard">Standard shipping</option>
                </optgroup>
                <optgroup label="Express" disabled>
                  <option value="dhl-express">DHL Express</option>
                  <option value="ems">EMS</option>
                  <option value="fedex">Fedex</option>
                  <option value="ups">UPS</option>
                </optgroup>
              </select>
              <div class="icon is-left">
                <i :class="courierIcon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="notification mt-4">
      <div class="is-size-6">Φ.Π.Α. 24%: {{ vatFees.format() }}</div>
      <div class="is-size-6">Τέλος εκτελωνισμού: {{ clearance.format() }}</div>
      <hr />
      <div class="has-text-weight-bold is-size-5 ">
        Σύνολο: {{ total.format() }}
        <span v-if="cif > 150">+ δασμούς</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import currency from 'currency.js'

const EUR = (value: number) =>
  currency(value, { symbol: '€', separator: '.', decimal: ',' })

export default defineComponent({
  name: 'Calculator',
  data: () =>
    ({
      cif: 0,
      vat: 0.24,
      selected: 'standard',
    } as Data),
  computed: {
    vatFees(): currency {
      return this.cif > 22 ? EUR(this.cif).multiply(this.vat) : EUR(0)
    },
    clearance(): currency {
      if (this.cif <= 22) return EUR(0)
      else if (this.cif > 22 && this.cif <= 150) return EUR(15)
      else if (this.cif > 150 && this.cif <= 500) return EUR(20)
      else if (this.cif > 500 && this.cif <= 1000) return EUR(25)
      else return EUR(50)
    },
    total(): currency {
      return this.clearance.add(this.vatFees)
    },
    courierIcon(): string {
      // switch (this.selected) {
      //   case "dhl-express":
      //     return "fab fa-dhl";
      //   case "fedex":
      //     return "fab fa-fedex";
      //   case "ups":
      //     return "fab fa-ups";
      //   default:
      //     return "fas fa-truck";
      // }
      return this.selected === 'standard'
        ? 'fas fa-truck'
        : 'fas fa-shipping-fast'
    },
  },
  methods: {},
})

interface Data {
  cif: number
  vat: number
  selected: string
}
</script>
