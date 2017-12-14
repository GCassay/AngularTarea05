export class CounterService {

  numToInactive:number = 0;
  numToActive:number = 0;

  countToActive() {
    this.numToActive++;
    console.log("Set to Active: " + this.numToActive);
  }

  countToInactive() {
    this.numToInactive++;
    console.log("Set to Inactive: " + this.numToInactive);
  }
}
