'use strict';

let user = {
  // your code goes here
  name: 'Helga',
  age: 75,
  calorieTarget: 1500,
  meals: [
    {
      title: 'breakfast',
      date: '2016-06-18',
      description: 'Sausage and eggs',
      calories: 800
    },
    {
      title: 'lunch',
      date: '2016-06-15',
      description: 'kale',
      calories: 100
    },
    {
      title: 'dinner',
      date: '2016-06-25',
      description: 'Steak frites',
      calories: 1200
    }
  ],
  caloriesEatenOn: function(date) {
    // takes a date, returns number of calories consumed

    let calories = 0;

    for (let i = 0, max = this.meals.length; i < max; i++) {
      let currentMeal = this.meals[i];

      if (currentMeal.date === date) {
        calories += currentMeal.calories;
      }
    }

    return calories;
  },
  avgDailyCalories: function() {
    //calculates average number of calories consumed per day
    // rounded down to nearest whole calorie
    let totalCalories = 0;

    for (let i = 0, max = this.meals.length; i < max; i++) {
      totalCalories += this.meals[i].calories;
    }
    return totalCalories / this.meals.length;
  },
  onTrack: function() {
    // compares avgDailyCalories() to User's target daily calorie intake
    // returns true if average calroic intake is at or below target and
    // returns false if User exceed the target
    let avgCalories = this.avgDailyCalories();

    if (avgCalories > this.calorieTarget) {
      return false;
    } else {
      return true;
    }
  }
};


module.exports = user;
