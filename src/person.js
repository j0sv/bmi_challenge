function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
}

  Person.prototype.calculate_bmi = function(option) {

    calculator = new BMICalculator();

/*alert ($("input:radio[name ='calc_method']:checked").val()!='met'); */
if (option == 'met') {
  calculator.metric_bmi(this);
/*  alert('met' + this.weight + this.height+this.bmiMessage+this.bmiValue);*/
} else {
  calculator.imperical_bmi(this);
/*  alert('imp' + this.weight + this.height);*/
}

};
