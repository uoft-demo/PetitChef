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
        print(data_g['title'], data_g['image'], data_g['sourceUrl'])  # more contents can be added


def recommended_recipe():
    """Recommend 2 random recipes"""
    response = api.get_random_recipes(number=2)
    data = response.json()
    recipes = data['recipes']
    for i in range(len(recipes)):
        print(recipes[i]['title'], recipes[i]['image'], recipes[i]['sourceUrl'])  # more contents can be added
