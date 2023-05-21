import requests
import json

results_data = []
for i in range(3):
    print(i*10)
    
    search_url = "https://www.yelp.com/search/snippet?ficnd_desc=Psychiatrists&find_loc=Davis%2C+CA%2C+United+States&request_origin=user&start=" + str(i*10)
    search_response = requests.get(search_url)
    search_results = search_response.json()['searchPageProps']['mainContentComponentsListProps']
    
    for result in search_results:
        if result['searchResultLayoutType'] == "iaResult":
            name = result['searchResultBusiness']['name']
            phone = result['searchResultBusiness']['phone']
            review_count = result['searchResultBusiness']['reviewCount']
            rating = result['searchResultBusiness']['rating']
            business_url = "https://www.yelp.com" + result['searchResultBusiness']['businessUrl']
            categories = result['searchResultBusiness']['categories']
            categories_titles = []
            for category in categories:
                categories_titles.append(category['title'])
            result_data = {
                'name': name,
                'phone': phone,
                'review_count': review_count,
                'rating': rating,
                'business_url': business_url,
                'categories': categories_titles
            }
            results_data.append(result_data)

# Save the results to a JSON file
filename = "search_results.json"
with open(filename, 'w') as file:
    json.dump(results_data, file)

print("Results saved to", filename)
