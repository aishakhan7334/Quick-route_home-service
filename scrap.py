import requests
from bs4 import BeautifulSoup
import json

# Define the URL of the website you want to scrape
URL = 'https://realpython.github.io/fake-jobs/'  # Replace with the actual URL

def scrape_jobs():
    # Send a request to the website
    response = requests.get(URL)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        # List to hold job data
        jobs = []

       # Find all job listings (this will vary depending on the website structure)
        for job_element in soup.find_all('div', class_='card-content'):
            # Extract job details with checks to ensure elements exist
            title_element = job_element.find('h2', class_='title is-5')
            company_element = job_element.find('h3', class_='subtitle is-6 company')
            location_element = job_element.find('p', class_='location')
            date_element = job_element.find('p', class_='is-small has-text-grey').find('time')



            title = title_element.text.strip() if title_element else 'N/A'
            company = company_element.text.strip() if company_element else 'N/A'
            location = location_element.text.strip() if location_element else 'N/A'
            date = date_element['datetime'] if date_element else 'N/A'


            # Store job data
            job = {
                'title': title,
                'company': company,
                'location': location,
                'date': date
            }
            jobs.append(job)

        # Save job data to a JSON file
        with open('jobs.json', 'w') as file:
            json.dump(jobs, file, indent=4)

        print("Jobs successfully scraped and saved to jobs.json")
    else:
        print(f"Failed to retrieve data. Status code: {response.status_code}")

if __name__ == '__main__':
    scrape_jobs()
