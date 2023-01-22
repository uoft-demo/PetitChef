let saveFile = () => {
    var yes1 = document.getElementById("yes1")
    var no1 = document.getElementById("no1")
    var yes2 = document.getElementById("yes2")
    var no2 = document.getElementById("no2")
    var yes3 = document.getElementById("yes3")
    var no3 = document.getElementById("no3")
    var yes4 = document.getElementById("yes4")
    var no4 = document.getElementById("no4")
    var yes5 = document.getElementById("yes5")
    var no5 = document.getElementById("no5")
    var yes6 = document.getElementById("yes6")
    var no6 = document.getElementById("no6")
    var cuisine = document.getElementById("keyword");

    if((yes1.checked == true && no1.checked == true)||(yes2.checked == true && no2.checked == true)||(yes3.checked == true && no3.checked == true)||(yes4.checked == true && no4.checked == true)||(yes5.checked == true && no5.checked == true)||(yes6.checked == true && no6.checked == true)){
        return document.getElementById("error").innerHTML
    }

    else if(yes1.checked == true){
        var knife = true;
        return document.getElementById("result").innerHTML = knife;
    }

    else if(yes2.checked == true){
        var sharp = true;
        return document.getElementById("result").innerHTML = sharp;
    }

     else if(yes3.checked == true){
        var oven = true;
       return document.getElementById("result").innerHTML = oven;
    }  
    else if(yes4.checked == true){
        var stove = true;
        return document.getElementById("result").innerHTML = stove
    }  
    
    else if(yes5.checked == true){
        var raw = true; 
        return document.getElementById("result").innerHTML = raw;
    }  
    else if(yes6.checked == true){
        var irritants =true
        return document.getElementById("result").innerHTML = irritants;
    }  

    else if(no1.checked == true){
        var knife = false;
        return document.getElementById("result").innerHTML = knife;
    }

    else if(no2.checked == true){
        var sharp = false;
        return document.getElementById("result").innerHTML = sharp;
    }

     else if(no3.checked == true){
        var oven = false;
       return document.getElementById("result").innerHTML = oven;
    }  
    else if(no4.checked == true){
        var stove = false;
        return document.getElementById("result").innerHTML = stove
    }  
    
    else if(no5.checked == true){
        var raw = false; 
        return document.getElementById("result").innerHTML = raw;
    }  
    else if(no6.checked == true){
        var irritants = false
        return document.getElementById("result").innerHTML = irritants;
    }
}

function testrun(saveFile) {
    print(knife);
    print(sharp);
    print(oven);
    print(stove);
    print(raw);
    print(irritants);
}

var knife = true;
var sharp = false;
var oven = false;
var stove = false;
var raw = false;
var irritants = true;

const all_recipes = [["Korean Fried Chicken", "https://lakegenevacountrymeats.com/recipes/simple-fried-chicken", "1 Chicken, 3 Eggs, 2 cup Flour, 1 Tbsp Kosher Salt, 2 tsp Pepper, 1 tsp Garlic Powder, 1 tsp Paprika, Vegetable Oil", "Step 1 In a large bowl, beat the eggs. In another bowl, combine the salt, pepper, garlic powder and paprika to make a seasoned salt. Add the flour to a third bowl. Step 2 Prepare the chicken by first seasoning each piece of chicken to your taste with the seasoned salt. Then dip each piece in the egg and drag through flour until coated well. Step 3 Fill a large pot or deep fryer half full with oil and heat to 350°F. Place the chicken parts in and fry until dark and crisp. The thighs and legs will take longer to cook – about 15 minutes – than the breast and wings, which will take about 10 minutes. Step 4 Remove from heat, let sit for 5 minutes to cool and enjoy!"]
                     ["Chocolate Mug Cake", "https://www.tablefortwoblog.com/the-moistest-chocolate-mug-cake/", "All-purpose flour, Unsweetened cocoa powder, Baking powder, Sugar, Salt, Milk, Oil, Chocolate hazelnut spread", "In a medium bowl, whisk together dry ingredients. Whisk in the milk and vegetable oil until all ingredients are combined and batter has no clumps. Pour batter into a microwave-safe mug. Mine was a 14-ounce mug. You want enough head space for the cake to rise without pouring over. Add hazelnut chocolate spread in the middle of the batter or mini chocolate chips. Just drop it in the middle, no need to push it down and sink it in the batter. It does that on its own when it cooks! :) Place a paper towel into the microwave and set the mug on top (this is to catch any batter if your mug cake overflows). Microwave mug cake for 70 seconds on high (PLEASE READ NOTES CAREFULLY BELOW) Carefully remove from microwave and enjoy!"]
                     ["Basic Crepes", 
                     "https://www.allrecipes.com/recipe/16383/basic-crepes/",
                     "1 cup all-purpose flour, 2 large eggs, ½ cup milk, ½ cup water, ¼ teaspoon salt, 2 tablespoons butter, melted", 
                     "Step 1 Whisk flour and eggs together in a large mixing bowl; gradually add in milk and water, stirring to combine. Add salt and melted butter; beat until smooth. Step 2 Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crêpe. Tilt the pan with a circular motion so that the batter coats the surface evenly. Step 3 Cook until the top of the crêpe is no longer wet and the bottom has turned light brown, 1 to 2 minutes. Run a spatula around the edge of the skillet to loosen the crêpe; flip and cook until the other side has turned light brown, about 1 minute more. Serve hot."]];

const nb_recipes = 3;

function point_counter (recipei, knife, sharp, oven, stove, raw, irritants){
  let count = 0;
  if (!knife) {
    if (recipei.includes("knife"||"chop"||"cut")) {
      ++count;
    }
  }
  if (!sharp) {
    if (recipei.includes("sharp"||"scissors"||"grater"||"peeler"||"blender"||"skewer")){
      ++count;
    }
  }
  if (!oven){
    if (recipei.includes("bake"||"oven")){
      ++count;
    }
  }
  if (!stove){
    if (recipei.includes("boil"||"fry"||"stove"||"grill"||"pan"||"pot"||"barbeque"||"steam"||"skillet")){
      ++count;
    }
  }
  if (!raw){
    if (recipei.includes("meat"||"pork"||"beef"||"chicken"||"mutton"||"fish")){
      ++count;
    }
  }
  if (!irritants){
    if (recipei.includes("onion"||"jalapeno"||"cayenne"||"ghost"||"chilli"||"habanero")){
      ++count;
    }
  }
  console.log(count);
}


function recipe_sorter(knife, sharp, oven, stove, raw, irritants){
  const head = [];
  const sous = [];
  const apprentice = [];
  for (let i = 0; i < nb_recipes; i++) {
    let key = all_recipe[i][2].concat(all_recipe[i][3]);    
    if (point_counter(key, knife, sharp, oven, stove, raw, irritants) < 1){
      head.push(all_recipe[i]);
    }
    
    if ((0 < point_counter(key, knife, sharp, oven, stove, raw, irritants)) && (point_counter(key, knife, sharp, oven, stove, raw, irritants) < 5)){
      sous.push(all_recipe[i]);
    }
    
    if (point_counter(key, knife, sharp, oven, stove, raw, irritants) >= 5){
      apprentice.push(all_recipe[i]);
    }
  console.log(head);
  console.log(sous);
  console.log(apprentice);
  return head;
  return sous;
  return apprentice;
}
}

recipe_sorter(knife, sharp, oven, stove, raw, irritants);
