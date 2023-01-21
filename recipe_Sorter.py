import spoonacular as sp

api = sp.API("e86e7107f9724c0797f751fba55182cc")


def search_recipes(keyword: str):
  """
    Search and display 5 recipes. print "No result found" if there is no relevant result for the keyword.
    :param: keyword
    :return:
    """
  search_recipes_r = api.search_recipes_complex(keyword, number=10)
  data_s = search_recipes_r.json()

  search_results = data_s["results"]
  if not search_results:
    print("No results found")

  for i in range(len(search_results)):
    get_recipes_r = api.get_recipe_information(search_results[i]['id'])
    data_g = get_recipes_r.json()
    print(data_g['title'], data_g['image'], data_g['sourceUrl'])
  # more contents can be added


def recommended_recipe():
  """Recommend 10 random recipes"""
  response = api.get_random_recipes(number=10)
  data = response.json()
  recipes = data['recipes']
  for i in range(len(recipes)):

    print(recipes[i]['title'], recipes[i]['image'],
          recipes[i]['sourceUrl'])  # more contents can be added


#preferences values
# knife = Bool value from preferences
# sharp = Bool value from preferences
# oven = Bool value from preferences
# stove = Bool value from preferences
# raw = Bool value from preferences
# irritants = Bool value from preferences
knife = True
sharp = True
oven = False
stove = False
raw = True
irritants = False


# Counts and creates dict of the recipei and nb of points for every recipe with loop
def recipe_point_counter(recipe_list):
  dict = {}
  for i in range(len(recipe_list)):
    key = str("recipe" + str(i))
    dict[key] = point_counter(recipe_list[i], knife, sharp, oven, stove, raw, irritants)


def point_counter(recipei, knife, sharp, oven, stove, raw, irritants):
  count = 0
  if not knife:
    if "knife" or "chop" in recipei:
      count += 1
  else:
    count += 0

  if not sharp:
    if "sharp" or "scissor" or "grater" or "blender" or "peeler" in recipei:
      count += 1
    else:
      count += 0

  if not oven:
    if "oven" or "bake" in recipei:
        count += 1
    else:
      count += 0

  if not stove:
    if "boil" or "fry" or "stove" or "grill" or "pan" or "pot" or "barbeque" or "steam" or "skillet" in recipei:
        count += 1
    else:
        count += 0

  if not raw:
    if "meat" or "pork" or "beef" or "chicken" or "mutton" or "fish" in recipei:
        count += 1
    else:
        count += 0

  if not irritants:
    if "onion" or "jalapeno" or "cayenne" or "ghost" or "chilli" or "habanero" in recipei:
        count += 1
    else:
        count += 0



# head: 0
# sous: 1 to 4
# apprentice 5 to 6
def recipe_sorter(dict_of_recipes):
  head = []
  sous = []
  apprentice = [] 
  for i in range (len(dict_of_recipes)):
    key = str("recipe" + str(i))
    if dict_of_recipes[key] < 1:
      head.append(key)
    if 0 < dict_of_recipes[key] < 5:
      sous.append(key)
    if dict_of_recipes[key] >= 5:
      apprentice.append(key)
  print(head)
  print(sous)
  print(apprentice)


dicttest = {
  "recipe0": 0,
  "recipe1": 0,
  "recipe2": 0
}
recipe_sorter(dicttest)
  
