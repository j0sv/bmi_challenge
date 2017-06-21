describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value using metric", function() {
    person.calculate_bmi('met');
    expect(person.bmiValue).toEqual(26.01);
  });

  it("should calculate BMI value using imperical", function() {
    person.weight=198;
    person.height=72;
    person.calculate_bmi('imp');
    expect(person.bmiValue).toEqual(26.85);
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi('met');
    expect(person.bmiMessage).toEqual("Overweight");
  });

});
