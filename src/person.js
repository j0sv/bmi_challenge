function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
}

  Person.prototype.calculate_bmi = function() {

    calculator = new BMICalculator();

    if ($("input:radio[name ='calc_method']:checked").val()!='met') {
      calculator.imperical_bmi(this);
    } else {
      calculator.metric_bmi(this);
    }

  };
